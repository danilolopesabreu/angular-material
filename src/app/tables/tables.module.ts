import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from '../app.module';

import { TablesRoutes } from './tables.routing';

import { DataTableComponent } from './datatable.net/datatable.component';
import { DataTable2Component } from './datatable_2/datatable2.component';


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(TablesRoutes),
    FormsModule,
    MaterialModule
  ],
  declarations: [
      DataTableComponent,
      DataTable2Component
  ]
})

export class TablesModule {}
