import { NgModule } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material'
import { MatSelectModule } from '@angular/material/select';
// import { ChartsModule } from 'ng2-charts';
import { MatTableModule } from '@angular/material/table';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { HrRoutingModule } from './hr-routing.module';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material';
import { MatButtonModule, MatCheckboxModule, MatToolbarModule } from '@angular/material';
import { HttpClientModule } from '@angular/common/http';
import { EmployeeService } from './employee.service';
import { CandidateScoreBarComponent } from '../candidate-score-bar/candidate-score-bar.component';
import { HrComponent } from '../hr-dashboard/hr-dashboard.component';
import { CandidateDetailsComponent } from '../candidate-details/candidate-details.component';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';


const routes: Routes = [
  { path: 'Candidates', component: HrComponent},
  { path: 'employeeDetails/:id/:name', component: CandidateDetailsComponent }
]

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    CommonModule,
    FormsModule,
    HrRoutingModule,
    MatFormFieldModule,
    HttpClientModule,
    MatSelectModule,
    MatTableModule,
    MatToolbarModule,
    MatDialogModule,
    MatInputModule,
    MatButtonModule,
    MatCheckboxModule
],
  declarations: [
    HrComponent,
    CandidateScoreBarComponent,
    CandidateDetailsComponent
  ],
  providers: [EmployeeService,
    { provide: MAT_DIALOG_DATA, useValue: {} },
    { provide:MatDialogRef, useValue: {} }]
})
export class HrModule { }
