import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { SignupComponent } from './user/signup/signup.component';
import { SigninComponent } from './user/signin/signin.component';
import { AppRoutingModule } from './app-routing.module';
import { AuthService } from './user/auth.service';
import { BillService } from './bill/bill.service';
import { BillComponent } from './bill/bill.component';
import { BillInputComponent } from './bill/bill-input/bill-input.component';
import { BillResultsComponent } from './bill/bill-results/bill-results.component';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    SignupComponent,
    SigninComponent,
    BillComponent,
    BillInputComponent,
    BillResultsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [AuthService, BillService],
  bootstrap: [AppComponent]
})
export class AppModule { }
