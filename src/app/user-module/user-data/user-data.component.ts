import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { UserServiceService } from '../user-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-data',
  templateUrl: './user-data.component.html',
  styleUrls: ['./user-data.component.css']
})
export class UserDataComponent implements OnInit {

public userJobDetails = {
        exp: 0,
        skillSet: [],
        location: '',
        noticePeriod: 15,
        salary: '',
        isActivelyLookingforJob: true,
        userId: '',
};

lookingForJobs = [
  {
  job: 'Actively looking for jobs',
  value: true
  },

 { job: 'Not Actively looking for jobs', value: false}];

public skillArray = [];
actionBtn: string;

  dropdownList:any = {};
  selectedItems = [];
  dropdownSettings = {};

  myControl = new FormControl();
  options: string[] = ['Hyderabad', 'Bangalore', 'Pune', 'Visakhapatnam'];
  filteredOptions: Observable<string[]>;

  constructor(private userService: UserServiceService,
    private router: Router
    ) { }

  public ngOnInit(): void {
    this.actionBtn = 'Submit';
    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value))
    );
        this.userService.getAllTags().subscribe(result => {
          const dropdownData: any = result;
          this.dropdownList = dropdownData.data;

          if (dropdownData['status'] === 200) {
            const userId = localStorage.getItem('userId')
              this.userService.getEmpDetails(userId).subscribe(data => {
                console.log(data);
                const detailsRes: any = data;
                if(detailsRes['status'] === 200) {
                  this.userJobDetails.exp = detailsRes.data.exp;
                  this.userJobDetails.isActivelyLookingforJob = detailsRes.data.isActivelyLookingforJob;
                  this.userJobDetails.location = detailsRes.data.location;
                  this.userJobDetails.noticePeriod = detailsRes.data.noticePeriod;
                  this.userJobDetails.salary = detailsRes.data.salary;
                  this.userJobDetails.skillSet = detailsRes.data.skillSet;
                  if (detailsRes.data.empDetailsId) {
                    this.actionBtn = 'Update';
                    this.userJobDetails['empDetailsId'] = detailsRes.data.empDetailsId;
                  }
                }
              });
          }
        });

    this.dropdownSettings = {
      singleSelection: false,
      idField: 'itemId',
      textField: 'tags',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      itemsShowLimit: 5,
      allowSearchFilter: true
    };
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.options.filter(option => option.toLowerCase().indexOf(filterValue) === 0);
  }

  public experienceList: any[] = [
    { value: 0, viewValue: 'fresher' },
    { value: 1, viewValue: '1' },
    { value: 2, viewValue: '2' },
    { value: 3, viewValue: '3' },
    { value: 4, viewValue: '4' },
    { value: 5, viewValue: '5' },
    { value: 6, viewValue: '6' },
    { value: 7, viewValue: '7' },
    { value: 8, viewValue: '8' },
    { value: 9, viewValue: '9' },
    { value: 1, viewValue: '10' },
    { value: 11, viewValue: '>10' }
  ];

  public NoticePeriod: any[] = [
    { value: 15, viewValue: '15 Days' },
    { value: 30, viewValue: '30 Days' },
    { value: 45, viewValue: '45 Days' },
    { value: 60, viewValue: '2 Months' },
    { value: 90, viewValue: '> 2 Months' }
  ];

  public submit(){
    this.userJobDetails.userId = localStorage.getItem('userId');

    console.log(this.userJobDetails);
    if (this.actionBtn === 'Submit') {
      this.userJobDetails.skillSet = this.skillArray;

      this.userService.setUserDetails(this.userJobDetails).subscribe(data => {
        console.log(data);

        const resObj = data;

        if (resObj['status'] === 200) {
          // tslint:disable-next-line: no-unused-expression
          this.router.navigate(['/user-dashboard']);
        }
      });
    } else {
      this.userService.updateEmpDetails(this.userJobDetails).subscribe(data => {
        const resObj = data;
        console.log(data);

        if (resObj['status'] === 200) {
          // tslint:disable-next-line: no-unused-expression
          this.router.navigate(['/user-dashboard']);

        }
      });
    }
  }

  onItemSelect(item: any) {
    this.skillArray.push(item);
  }
  onSelectAll(items: any) {
    this.userJobDetails.skillSet = items;
  }

onExperienceSelected(event){
  this.userJobDetails.exp = event.value; //option value will be sent as event
}

onNoticePeriodSelected(event){
  this.userJobDetails.noticePeriod = event.value; //option value will be sent as event
}

onLocationChanged(event){
  this.userJobDetails.location = event.option.value; //option value will be sent as event
}

}
