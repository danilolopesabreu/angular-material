import { Routes } from '@angular/router';

import { ExtendedFormsComponent } from './extendedforms/extendedforms.component';
import { FormComponent } from './form.component';
import { RegularFormsComponent } from './regularforms/regularforms.component';
import { WizardComponent } from './wizard/wizard.component';

export const FormsRoutes: Routes = [
    {
      path: '',
        component: FormComponent,
        children:[
          {
            path: '',
            children: [ {
              path: 'regular',
              component: RegularFormsComponent
          }]}, {
          path: '',
          children: [ {
            path: 'extended',
            component: ExtendedFormsComponent
          }]
          }, {
          path: '',
          children: [ {
            path: 'individual',
            loadChildren: () => import('../validationforms/validationforms.module').then(m => m.ValidationFormsModule)
          }]
          }, {
              path: '',
              children: [ {
                  path: 'wizard',
                  component: WizardComponent
              }]
          }
        ]
    }
    
];
