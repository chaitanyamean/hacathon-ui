import { NgModule } from  '@angular/core';
import {MatAutocompleteModule, MatNativeDateModule,MatDatepickerModule,MatIconModule,MatButtonModule,MatCheckboxModule, MatToolbarModule, MatCardModule,MatFormFieldModule,MatInputModule,MatRadioModule,MatListModule} from  '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
 
@NgModule({
imports: [
  MatNativeDateModule,
  MatDatepickerModule,
  MatIconModule,
  MatButtonModule,
  MatCheckboxModule, 
  MatToolbarModule,
  FormsModule, 
  MatCardModule,
  MatFormFieldModule,
  MatInputModule,
  MatListModule,
  MatRadioModule,
  MatAutocompleteModule,
  ReactiveFormsModule
],
 
exports: [
MatNativeDateModule,
FormsModule,
MatDatepickerModule,
MatIconModule,
MatButtonModule,
MatCheckboxModule, 
MatToolbarModule, 
MatCardModule,
MatFormFieldModule,
MatInputModule,
MatListModule,
MatRadioModule,
MatAutocompleteModule,
ReactiveFormsModule
],
 
})
export class CustomMaterialModule { }
