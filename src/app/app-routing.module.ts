import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { AddBookingComponent } from './add-booking/add-booking.component';
import { AddCarComponent } from './add-car/add-car.component';
import { AddDriverComponent } from './add-driver-list/add-driver-list.component';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { BuyCarComponent } from './buy-car/buy-car.component';
import { CarListComponent } from './car-list/car-list.component';
import { CarSoldComponent } from './car-sold/car-sold.component';
import { CustomerBookingComponent } from './customer-booking/customer-booking.component';
import { CustomerHomeComponent } from './customer-home/customer-home.component';

import { CustomerLoginComponent } from './customer-login/customer-login.component';
import { CustomerSignupComponent } from './customer-signup/customer-signup.component';
import { DeleteDriverComponent } from './delete-driver/delete-driver.component';
import { DriverListComponent } from './driver-list/driver-list.component';
import { ErrorComponent } from './error/error.component';
import { HomePageComponent } from './home-page/home-page.component';
import { ListBookingComponent } from './list-booking/list-booking.component';
import { LoginPromptComponent } from './login-prompt/login-prompt.component';
import { PreviousBookingComponent } from './previous-booking/previous-booking.component';
import { SellCarComponent } from './sell-car/sell-car.component';
import { UpdateDriverComponent } from './update-driver/update-driver.component';
import { ViewDriverComponent } from './view-driver/view-driver.component';

const routes: Routes = [
  { path: 'login-prompt', component: LoginPromptComponent },
  { path: 'admin-login', component: AdminLoginComponent },
  { path: 'home-page', component: HomePageComponent },
  { path: 'admin-home', component: AdminHomeComponent },
  { path: 'customer-login', component: CustomerLoginComponent },
  { path: 'customer-signup', component: CustomerSignupComponent },
  { path: 'customer-home', component: CustomerHomeComponent },
  { path: 'driver-list', component: DriverListComponent },
  { path: 'car-list', component: CarListComponent },
  { path: 'booking-list', component: ListBookingComponent },
  { path: 'previous-booking', component: PreviousBookingComponent },
  { path: 'customer-booking', component: CustomerBookingComponent },
  { path: 'sell-car', component: SellCarComponent },
  { path: 'car-sold', component: CarSoldComponent },
  { path: 'about-us', component: AboutUsComponent },
  { path: 'buy-car', component: BuyCarComponent },
  { path: 'error', component: ErrorComponent },
  { path: 'view-driver', component: ViewDriverComponent },
  { path: 'add-driver-list', component: AddDriverComponent },
  { path: 'update-driver', component: UpdateDriverComponent },
  { path: 'app-delete-driver', component: DeleteDriverComponent },
  { path: 'app-add-car', component: AddCarComponent },
  { path: 'add-booking', component: AddBookingComponent },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
