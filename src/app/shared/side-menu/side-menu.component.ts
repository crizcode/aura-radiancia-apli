import { Component, OnInit } from '@angular/core';
import { MenuItem, SidebarService } from 'src/app/services/sidebar.service';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.css']
})
export class SideMenuComponent implements OnInit {
  public menuItems: MenuItem[] = [];

  constructor(private sidebarService: SidebarService) { }

  ngOnInit(): void {
    this.menuItems = this.sidebarService.getMenuItems();
  }
}