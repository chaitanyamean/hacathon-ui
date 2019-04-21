import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { UserDataComponent } from './user-data/user-data.component';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatAutocompleteModule, MatRadioModule, MatCardModule,
  MatButtonModule, MatFormFieldModule,MatSelectModule,MatInputModule} from  '@angular/material';
 import { UserServiceService } from './user-service.service';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';

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
    RouterModule.forChild(routes)
  ],
  exports: [UserDataComponent],
  declarations: [UserDataComponent, UserDashboardComponent],
  providers: [UserServiceService]

})
export class UserModuleModule { }
