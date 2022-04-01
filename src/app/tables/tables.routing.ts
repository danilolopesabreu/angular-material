import { Routes } from '@angular/router';

import { DataTableComponent } from './datatable.net/datatable.component';
import { DataTable2Component } from './datatable_2/datatable2.component';

export const TablesRoutes: Routes = [
    {
      path: '',
      children: [ {
        path: 'aguardando',
        component: DataTable2Component
        }]
    },
    {
      path: '',
      children: [ {
        path: 'pendentes',
        component: DataTableComponent
        }]
    }
    
];
