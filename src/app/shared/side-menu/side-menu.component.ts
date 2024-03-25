import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';
import { MenuItem, SidebarService } from 'src/app/services/sidebar.service';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.css']
})
export class SideMenuComponent implements OnInit {
  public adminMenuItems: MenuItem[] = [];
  public usersMenuItems: MenuItem[] = [];

  constructor(private sidebarService: SidebarService, 
              private authService: AuthService) { }

  ngOnInit(): void {
    this.adminMenuItems = this.sidebarService.getAdminMenuItems();
    this.usersMenuItems = this.sidebarService.getUsersMenuItems();
  }

    logout(): void {
      this.authService.logout();
    }
  
}