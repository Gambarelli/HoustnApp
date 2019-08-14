import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ANT_ICONS } from '../ant-svg-icons';
import { NzIconModule } from 'ng-zorro-antd/icon';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NZ_I18N, en_US, NZ_ICONS } from 'ng-zorro-antd';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { SharedModule } from './shared.module';
import { DepartmentsComponent } from './departments/departments.component';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { FlexLayoutModule } from "@angular/flex-layout";
import { LoginComponent } from './page/login/login.component'

import { NgZorroAntdModule } from 'ng-zorro-antd';


registerLocaleData(en);

@NgModule({
  declarations: [
    AppComponent,
    DepartmentsComponent,
    LoginComponent,

  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    SharedModule,
    NgZorroAntdModule,
    FlexLayoutModule,
    NzIconModule
    ReactiveFormsModule
  ],
  providers: [
    { provide: NZ_I18N, useValue: en_US },
    { provide: NZ_ICONS, useValue: ANT_ICONS }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
