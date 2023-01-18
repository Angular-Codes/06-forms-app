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

}
