import { MenuInfo } from './menuInfo';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  @Input()
  MenuData: Array<MenuInfo> = [];

  @Input()
  isSelected: string = ""
  
  @Output()
  MenuChange: EventEmitter<MenuInfo> = new EventEmitter<MenuInfo>();

  constructor() {}

  ngOnInit(): void {}

  HandleMenuClick(menuItem: MenuInfo) {
    this.MenuChange.emit(menuItem);
  }
}
