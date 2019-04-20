import { NgModule } from '@angular/core';
import { MatSelectModule } from '@angular/material/select';
import { MatTableModule } from '@angular/material/table';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { CommonModule } from '@angular/common';
import { HrComponent, EmployeeDetailsDialog } from './hr.component';
import { Routes, RouterModule } from '@angular/router';
import { HrRoutingModule } from './hr-routing.module';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material';
import { MatButtonModule, MatCheckboxModule } from '@angular/material';
import { HttpClientModule } from '@angular/common/http';

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
    MatCheckboxModule
  ],
  declarations: [
    HrComponent,
    EmployeeDetailsDialog
  ],
  entryComponents: [
    EmployeeDetailsDialog
  ]
})
export class HrModule { }
