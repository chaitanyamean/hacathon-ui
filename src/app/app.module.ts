import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {CustomMaterialModule} from './custom-material/custom-material.module';
import {HttpClientModule} from '@angular/common/http';;
import { LoginSignupService } from './signup-login/login-signup.service';
import { ChartsModule } from 'ng2-charts';

import { AppComponent } from './app.component';
import { AdminModuleModule } from './admin-module/admin-module.module';
import { UserModuleModule } from './user-module/user-module.module';
import { HrModule } from './hr/hr/hr.module';
import { HrRoutingModule } from './hr/hr/hr-routing.module';
import { FormsModule } from '@angular/forms';
import { SignUpComponent } from './signup-login/sign-up/sign-up.component';
import { LoginComponent } from './signup-login/login/login.component';
import { MatButtonModule, MatCheckboxModule } from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    SignUpComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    AdminModuleModule,
    UserModuleModule,
    HrModule,
    ChartsModule,
    HrRoutingModule,
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
