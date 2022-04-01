import { Routes } from '@angular/router';

import { FormComponent } from './form.component';

export const FormsRoutes: Routes = [
    {
      path: '',
        component: FormComponent,
        children:[
          {
            path: '',
            children: [ {
              path: 'individual',
              loadChildren: () => import('../validationforms/validationforms.module').then(m => m.ValidationFormsModule)
            }]
          }
        ]
    }
    
];
