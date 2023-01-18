import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BasicComponent } from './basic/basic.component';
import { DynamicComponent } from './dynamic/dynamic.component';
import { SwitchesComponent } from './switches/switches.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'basic',
        component: BasicComponent
      },
      {
        path: 'dymamic',
        component: DynamicComponent
      },
      {
        path: 'switch',
        component: SwitchesComponent
      },
      {
        path: '**',
        redirectTo: 'basic'
      }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ]
})
export class ReactiveRoutingModule { }
