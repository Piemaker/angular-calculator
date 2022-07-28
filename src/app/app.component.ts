import { MenuInfo } from './components/header/menuInfo';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'home';
  selectedComponent = 'home';
  num = 1;

  MyMenuData: Array<MenuInfo> = [
    {
      header: 'Home',
      command: 'home',
      IsActive: true,
      isSelected: this.selectedComponent,
    },
    {
      header: 'Calculator',
      command: 'calc',
      isSelected: this.selectedComponent,
    },
    {
      header: 'About',
      command: 'about',
      IsFloatingRight: true,
      isSelected: this.selectedComponent,
    },
  ];
  HandleMenuChange(e: MenuInfo) {
    console.log(e);
    this.selectedComponent = e.command;
  }
  handlePushData() {
    let input = {
      header: `Test${++this.num}`,
      command: `test${++this.num}`,
      IsActive: false,
      isSelected: this.selectedComponent,
    };
    this.MyMenuData.push(input);
  }
}
