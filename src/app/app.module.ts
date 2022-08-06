import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginPromptComponent } from './login-prompt/login-prompt.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { PaymentSuccessfulComponent } from './payment-successful/payment-successful.component';
import { PreviousBookingComponent } from './previous-booking/previous-booking.component';
import { SellCarComponent } from './sell-car/sell-car.component';
import { AddDriverComponent } from './add-driver-list/add-driver-list.component';
import { DriverListComponent } from './driver-list/driver-list.component';
import { CarListComponent } from './car-list/car-list.component';
import { AddCarComponent } from './add-car/add-car.component';
import { HttpClientModule } from '@angular/common/http';
import { HomePageComponent } from './home-page/home-page.component';
import { CustomerLoginComponent } from './customer-login/customer-login.component';
import { CustomerSignupComponent } from './customer-signup/customer-signup.component';
import { ListBookingComponent } from './list-booking/list-booking.component';
import { ViewBookingComponent } from './view-booking/view-booking.component';
import { AddBookingComponent } from './add-booking/add-booking.component';
import { CustomerHomeComponent } from './customer-home/customer-home.component';
import { CustomerBookingComponent } from './customer-booking/customer-booking.component';
import { CarSoldComponent } from './car-sold/car-sold.component';
import { BuyCarComponent } from './buy-car/buy-car.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ErrorComponent } from './error/error.component';
import { UpdateDriverComponent } from './update-driver/update-driver.component';
import { ViewDriverComponent } from './view-driver/view-driver.component';
import { DeleteDriverComponent } from './delete-driver/delete-driver.component';


@NgModule({
  declarations: [
    AppComponent,
    CustomerLoginComponent,
    CustomerSignupComponent,
    ListBookingComponent,
    ViewBookingComponent,
    LoginPromptComponent,
    AdminLoginComponent,
    AdminHomeComponent,
    DriverListComponent,
    CarListComponent,
    HomePageComponent,
    AddCarComponent,
    AddDriverComponent,
    AddBookingComponent,
    PaymentSuccessfulComponent,
    PreviousBookingComponent,
    SellCarComponent,
    CustomerHomeComponent,
    CustomerBookingComponent,
    CarSoldComponent,
    BuyCarComponent,
    AboutUsComponent,
    ErrorComponent,
    ViewDriverComponent,
    UpdateDriverComponent,
    DeleteDriverComponent,

  ],

  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    RouterModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

