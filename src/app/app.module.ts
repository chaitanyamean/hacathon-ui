import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {CustomMaterialModule} from './custom-material/custom-material.module';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { SignUpComponent } from './signup-login/sign-up/sign-up.component';
import { LoginComponent } from './signup-login/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    SignUpComponent, 
    LoginComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CustomMaterialModule,
    RouterModule.forRoot([
      {path: '', redirectTo: '/login', pathMatch:'full'},
      {path: 'signup', component: SignUpComponent},
      {path: 'login', component: LoginComponent}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
