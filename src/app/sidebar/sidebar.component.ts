import { Component } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
  activeMenu: string = '';
  isHovered: boolean = false;

  toggleMenu(menu: string) {
    this.activeMenu = this.activeMenu === menu ? '' : menu;
  }
}
