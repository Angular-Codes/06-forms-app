import { Component } from '@angular/core';

interface MenuItem {
  name: string;
  path: string;
}

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.css']
})
export class SideMenuComponent {

  templateMenuItems: MenuItem[] = [
    {
      name: 'Basic',
      path: 'template/basic',
    },
    {
      name: 'Dynamic',
      path: 'template/dymamic',
    },
    {
      name: 'Switch',
      path: 'template/switch',
    }
  ]

  reactiveMenuItems: MenuItem[] = [
    {
      name: 'Basic',
      path: 'reactive/basic',
    },
    {
      name: 'Dynamic',
      path: 'reactive/dymamic',
    },
    {
      name: 'Switch',
      path: 'reactive/switch',
    }
  ] 

}
