import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {CustomMaterialModule} from './custom-material/custom-material.module';
import {HttpClientModule} from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { LoginSignupService } from './signup-login/login-signup.service';

import { AppComponent } from './app.component';
import { SignUpComponent } from './signup-login/sign-up/sign-up.component';
import { LoginComponent } from './signup-login/login/login.component';
import { UserModuleModule } from './user-module/user-module.module';

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
    HttpClientModule,
    UserModuleModule,
    RouterModule.forRoot([
      {path: '', redirectTo: '/login', pathMatch:'full'},
      {path: 'signup', component: SignUpComponent},
      {path: 'login', component: LoginComponent},
      {path: 'employeeHome', loadChildren: './user-module/user-module.module#UserModuleModule'},
      { path: '**', redirectTo: '' }
    ])
  ],
  providers: [LoginSignupService],
  bootstrap: [AppComponent]
})
export class AppModule { }
