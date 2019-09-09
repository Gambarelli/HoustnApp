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
import { LoginComponent } from './page/login/login.component';
import { LayoutComponent } from './layout/layout.component';
import { MenuComponent } from './menu/menu.component';
import { AngularFireModule } from '@angular/fire';
import { environment } from '../environments/environment';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AuthService } from './services/auth.service';
import { UsersComponent } from './page/users/users.component';
import { TicketComponent } from './page/ticket/ticket.component';
import { CompanyComponent } from './page/company/company.component';
import { UserLayoutComponent } from './layout/user-layout/user-layout.component';


registerLocaleData(en);

@NgModule({
  declarations: [
    AppComponent,
    DepartmentsComponent,
    LoginComponent,
    LayoutComponent,
    MenuComponent,
    UsersComponent,
    TicketComponent,
    CompanyComponent,
    UserLayoutComponent,

  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    SharedModule,
    NgZorroAntdModule,
    NzIconModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireAuthModule
  ],
  providers: [
    { provide: NZ_I18N, useValue: en_US },
    { provide: NZ_ICONS, useValue: ANT_ICONS },
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
