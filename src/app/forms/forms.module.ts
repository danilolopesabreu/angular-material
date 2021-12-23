import { FormComponent } from './form.component';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NouisliderModule } from 'ng2-nouislider';
import { TagInputModule } from 'ngx-chips';
import { SelectModule } from 'ng2-select';
import { MaterialModule } from '../app.module';
import { FormsRoutes } from './forms.routing';

import { ExtendedFormsComponent } from './extendedforms/extendedforms.component';
import { RegularFormsComponent } from './regularforms/regularforms.component';
import { WizardComponent } from './wizard/wizard.component';
import { FieldErrorDisplayComponent } from '../validationforms/field-error-display/field-error-display.component';
import { FieldErrorDisplayModule } from '../validationforms/field-error-display/field-error-display.module';



@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(FormsRoutes),
    FormsModule,
    ReactiveFormsModule,
    NouisliderModule,
    TagInputModule,
    MaterialModule,
    FieldErrorDisplayModule
  ],
  declarations: [
      FormComponent,
      ExtendedFormsComponent,
      RegularFormsComponent,
      WizardComponent
  ]
})

export class Forms {}
