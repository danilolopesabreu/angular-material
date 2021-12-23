import { Routes } from '@angular/router';

import { DashboardComponent } from './dashboard.component';

export const DashboardRoutes: Routes = [
    {

      path: '',
      children: [ {
        path: 'dashboard',
        component: DashboardComponent,
        children:[
          {
          path: 'lancamentos',
          loadChildren: () => import('./../tables/tables.module').then(m => m.TablesModule)
          },
          {
            path: 'lancamento/individual',
            loadChildren: () => import('../validationforms/validationforms.module').then(m => m.ValidationFormsModule)
          }
        ]

    }]
}
];
