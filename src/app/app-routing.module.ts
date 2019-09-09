import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DepartmentsComponent } from './departments/departments.component';
import { UsersComponent } from './page/users/users.component';
import { CompanyComponent } from './page/company/company.component';
import { TicketComponent } from './page/ticket/ticket.component';
import { LoginComponent } from './page/login/login.component';
import { LayoutComponent } from '../app/layout/layout.component';
import { UserLayoutComponent  } from '../app/layout/user-layout/user-layout.component';
const routes: Routes = [

  {
    path: '',
    component: LoginComponent
  },
  {
    path: 'queue',
    component: UserLayoutComponent
  },
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: 'table', loadChildren: () => import('./table/table.module').then(m => m.TableModule) },
      { path: 'departments', component: DepartmentsComponent },
      { path: 'users', component: UsersComponent },
      { path: 'ticket', component: TicketComponent },
      { path: 'company', component: CompanyComponent },
      { path: 'login', component: LoginComponent },
      { path: 'form', loadChildren: () => import('./form/form.module').then(m => m.FormModule) },
      { path: 'page-header', loadChildren: () => import('./page-header/page-header.module').then(m => m.PageHeaderModule) },
      { path: '**', redirectTo: '', pathMatch: 'full' }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
