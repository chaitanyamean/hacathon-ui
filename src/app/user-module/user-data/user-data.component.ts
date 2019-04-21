import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { UserServiceService } from '../user-service.service';

@Component({
  selector: 'app-user-data',
  templateUrl: './user-data.component.html',
  styleUrls: ['./user-data.component.css']
})
export class UserDataComponent implements OnInit {

public userJobDetails = {
        exp: '',
        skillSet: [],
        location: '',
        noticePeriod: '',
        salary: '',
        isActivelyLookingforJob: true,
        empDetailsId: '',
        userId: '',
}

public skillArray: any[];

  dropdownList:any = {};
  selectedItems = [];
  dropdownSettings = {};

  myControl = new FormControl();
  options: string[] = ['Hyderabad', 'Bangalore', 'Pune', 'Visakhapatnam'];
  filteredOptions: Observable<string[]>;

  constructor(private userService: UserServiceService) { }

  public ngOnInit(): void {
    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value))
    );
        this.userService.getAllTags().subscribe(result => {
          let dropdownData:any = result;
          this.dropdownList = dropdownData.data;
        });

    this.dropdownSettings = {
      singleSelection: false,
      idField: '_id',
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
    { value: '0', viewValue: 'fresher' },
    { value: '1', viewValue: '1' },
    { value: '2', viewValue: '2' },
    { value: '3', viewValue: '3' },
    { value: '4', viewValue: '4' },
    { value: '5', viewValue: '5' },
    { value: '6', viewValue: '6' },
    { value: '7', viewValue: '7' },
    { value: '8', viewValue: '8' },
    { value: '9', viewValue: '9' },
    { value: '10', viewValue: '10' },
    { value: '11', viewValue: '>10' }
  ];

  public NoticePeriod: any[] = [
    { value: '0', viewValue: 'Immediate joining' },
    { value: '1', viewValue: '30 Days' },
    { value: '2', viewValue: '45 Days' },
    { value: '3', viewValue: '2 Months' },
    { value: '4', viewValue: '> 2 Months' }
  ];

  public submit(){
    this.userJobDetails.skillSet = this.skillArray;
    console.log(this.userJobDetails);
    this.userService.setUserDetails(this.userJobDetails);
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
