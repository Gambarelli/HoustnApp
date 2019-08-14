import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DepartmentsComponent } from './departments/departments.component';

import { LoginComponent } from './page/login/login.component' 
const routes: Routes = [
  { path: '', redirectTo: 'table', pathMatch: 'full' },
  { path: 'table', loadChildren: () => import('./table/table.module').then(m => m.TableModule) },
  { path: 'departments', component: DepartmentsComponent },
  { path: 'login', component: LoginComponent },
  { path: 'form', loadChildren: () => import('./form/form.module').then(m => m.FormModule) },
  { path: 'page-header', loadChildren: () => import('./page-header/page-header.module').then(m => m.PageHeaderModule) },
  { path: '**', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
