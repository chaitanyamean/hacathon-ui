import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { UserDataComponent } from './user-data/user-data.component';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatAutocompleteModule, MatRadioModule, MatCardModule,
  MatButtonModule, MatFormFieldModule,MatSelectModule,MatToolbarModule,MatInputModule} from  '@angular/material';
 import { UserServiceService } from './user-service.service';
import { UserExamComponent } from './user-exam/user-exam.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import {MatGridListModule} from '@angular/material/grid-list';

 const routes: Routes = [
  { path: 'user-dashboard',  component: UserDashboardComponent },
  {path: 'user-details', component: UserDataComponent},
  { path: 'user-quiz/:id', component: UserExamComponent}
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
    MatToolbarModule,
    MatCardModule,
    MatRadioModule,
    MatButtonModule,
    MatGridListModule,
    NgMultiSelectDropDownModule.forRoot(),
    RouterModule.forChild(routes)
  ],
  exports: [UserDataComponent],
  declarations: [UserDataComponent, UserDashboardComponent, UserExamComponent],
  providers: [UserServiceService]

})
export class UserModuleModule { }
