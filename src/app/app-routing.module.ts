import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./modules/pages/home/home.module').then(m => m.HomeModule),
    data: {
      title: 'Home'
    },
  },
  {
    path: 'employees',
    loadChildren: () => import('./modules/pages/employees/employees.module').then(m => m.EmployeesModule),
    data: {
      title: 'Employees'
    }
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
