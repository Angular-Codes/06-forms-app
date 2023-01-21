import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TemplateRoutingModule } from './template-routing.module';
import { SwitchesComponent } from './switches/switches.component';
import { BasicComponent } from './basic/basic.component';
import { DynamicComponent } from './dynamic/dynamic.component';
import { FormsModule } from '@angular/forms';
import { CustomMinDirective } from './directives/custom-min.directive';


@NgModule({
  declarations: [
    SwitchesComponent,
    BasicComponent,
    DynamicComponent,
    // directives
    CustomMinDirective,
  ],
  imports: [
    CommonModule,
    TemplateRoutingModule,
    FormsModule,
  ]
})
export class TemplateModule { }
