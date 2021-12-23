import { Routes } from '@angular/router';

import { AdminLayoutComponent } from './layouts/admin/admin-layout.component';

export const AppRoutes: Routes = [
    {
      path: '',
      redirectTo: 'dashboard',
      pathMatch: 'full',
    }, {
      path: '',
      component: AdminLayoutComponent,
      children: [
      {
        path: '',
        loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule)
      },
      {
        path: 'lancamentos',
        loadChildren: () => import('./tables/tables.module').then(m => m.TablesModule)
      },
      {
        path: 'lancamento',
        loadChildren: () => import('./forms/forms.module').then(m => m.Forms)
      }
  ]}
];
