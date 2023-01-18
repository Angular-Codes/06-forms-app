import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TemplateRoutingModule } from './template-routing.module';
import { SwitchesComponent } from './switches/switches.component';
import { BasicComponent } from './basic/basic.component';
import { DynamicComponent } from './dynamic/dynamic.component';


@NgModule({
  declarations: [
    SwitchesComponent,
    BasicComponent,
    DynamicComponent
  ],
  imports: [
    CommonModule,
    TemplateRoutingModule
  ]
})
export class TemplateModule { }
