import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header.component';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { CalendarModule } from 'angular-calendar';
import {NgxChartsModule} from '@swimlane/ngx-charts';

import { HomeComponent } from './home/home.component';
import { CustomerComponent } from './customer/customer.component';
import { SalesComponent } from './sales/sales.component';
import { ReportsComponent } from './reports/reports.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'customer', component: CustomerComponent},
  { path: 'sales', component: SalesComponent },
  { path: 'reports', component: ReportsComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    CustomerComponent,
    SalesComponent,
    ReportsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    NgbModule.forRoot(),
    RouterModule.forRoot(routes),
    CalendarModule.forRoot(),
    NgxChartsModule
  ],
  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
