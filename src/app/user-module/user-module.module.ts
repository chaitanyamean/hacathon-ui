import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { UserDataComponent } from './user-data/user-data.component';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatAutocompleteModule, MatRadioModule, MatCardModule, MatButtonModule, MatFormFieldModule,MatSelectModule,MatInputModule} from  '@angular/material';
 import { UserServiceService } from './user-service.service';
import { UserExamComponent } from './user-exam/user-exam.component';



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
    RouterModule.forChild([
      {path: 'employeeHome', component: UserDataComponent},
      {path: 'quiz', component: UserExamComponent}
    ])
  ],
  exports: [UserDataComponent],
  declarations: [UserDataComponent, UserExamComponent],
  providers: [UserServiceService]
  
})
export class UserModuleModule { }
