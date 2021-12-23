import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { NouisliderModule } from "ng2-nouislider";
import { TagInputModule } from "ngx-chips";
import { MaterialModule } from "src/app/app.module";
import { FieldErrorDisplayModule } from "./field-error-display/field-error-display.module";
import { ValidationFormsComponent } from "./validationforms.component";
import { ValidationFormsRoutes } from "./validationforms.routing";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(ValidationFormsRoutes),
        FormsModule,
        ReactiveFormsModule,
        NouisliderModule,
        TagInputModule,
        MaterialModule,
        FieldErrorDisplayModule
    ],
    declarations: [
        ValidationFormsComponent
    ]
})

export class ValidationFormsModule { }