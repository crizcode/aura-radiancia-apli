import { Injectable } from "@angular/core";

export interface MenuItem {
    path: string;
    title: string;
}
  
@Injectable({
    providedIn: 'root'
})
export class SidebarService {
    private adminMenuItems: MenuItem[] = [
        { path: '/home/productos', title: 'Producto' }, 
        { path: '/home/categoria', title: 'Categoria' },
        { path: '/home/proveedor', title: 'Proveedor' }, 
    ];
  
    private usersMenuItems: MenuItem[] = [
        { path: '/home/persona', title: 'Persona' }, 
    ];
  

    constructor() { }
  
    getAdminMenuItems(): MenuItem[] {
        return this.adminMenuItems;
    }

    getUsersMenuItems(): MenuItem[] {
        return this.usersMenuItems;
    }
}
