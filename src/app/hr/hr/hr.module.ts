import { NgModule } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material'
import { MatSelectModule } from '@angular/material/select';
import { ChartsModule } from 'ng2-charts';
import { MatTableModule } from '@angular/material/table';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { CommonModule } from '@angular/common';
import { HrComponent, EmployeeDetailsDialog } from './hr.component';
import { Routes, RouterModule } from '@angular/router';
import { HrRoutingModule } from './hr-routing.module';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material';
import { MatButtonModule, MatCheckboxModule } from '@angular/material';
import { HttpClientModule } from '@angular/common/http';
import { EmployeeService } from './employee.service';

const routes: Routes = [
  { path: 'hr', component: HrComponent }
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
    MatDialogModule,
    MatInputModule,
    MatButtonModule,
    MatCheckboxModule,
    ChartsModule
  ],
  declarations: [
    HrComponent,
    EmployeeDetailsDialog
  ],
  entryComponents: [
    EmployeeDetailsDialog
  ],
  providers: [EmployeeService,
    { provide: MAT_DIALOG_DATA, useValue: {} },
    { provide:MatDialogRef, useValue: {} }]
})
export class HrModule { }
