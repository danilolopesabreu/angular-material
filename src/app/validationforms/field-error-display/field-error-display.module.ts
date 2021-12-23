import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FieldErrorDisplayComponent } from "./field-error-display.component";

@NgModule({
    imports: [
        CommonModule,
    ],
    declarations: [
        FieldErrorDisplayComponent
    ],
    exports: [FieldErrorDisplayComponent]
})

export class FieldErrorDisplayModule { }