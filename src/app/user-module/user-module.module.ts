import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { UserDataComponent } from './user-data/user-data.component';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatAutocompleteModule, MatRadioModule, MatCardModule,
  MatButtonModule, MatFormFieldModule,MatSelectModule,MatInputModule} from  '@angular/material';
 import { UserServiceService } from './user-service.service';
<<<<<<< HEAD
import { UserExamComponent } from './user-exam/user-exam.component';
=======
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
>>>>>>> 78400c0a34e9f878fb87c9fca865d65fcb7baf60

 const routes: Routes = [
  { path: 'user-dashboard',  component: UserDashboardComponent },
  {path: 'user-details', component: UserDataComponent}
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatAutocompleteModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    MatCardModule,
    MatRadioModule,
    MatButtonModule,
    NgMultiSelectDropDownModule.forRoot(),
<<<<<<< HEAD
    RouterModule.forChild([
      {path: 'employeeHome', component: UserDataComponent},
      {path: 'quiz', component: UserExamComponent}
    ])
  ],
  exports: [UserDataComponent],
  declarations: [UserDataComponent, UserExamComponent],
=======
    RouterModule.forChild(routes)
  ],
  exports: [UserDataComponent],
  declarations: [UserDataComponent, UserDashboardComponent],
>>>>>>> 78400c0a34e9f878fb87c9fca865d65fcb7baf60
  providers: [UserServiceService]

})
export class UserModuleModule { }
