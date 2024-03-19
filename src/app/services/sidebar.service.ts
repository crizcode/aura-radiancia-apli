import { Injectable } from "@angular/core";

export interface MenuItem {
    path: string;
    title: string;
}
  
@Injectable({
    providedIn: 'root'
})
export class SidebarService {
    private menuItems: MenuItem[] = [
        { path: '/home/productos', title: 'Producto' }, 
        { path: '/home/categoria', title: 'Categoria' },
        { path: '/home/proveedor', title: 'Proveedor' }, 
    ];
  
    constructor() { }
  
    getMenuItems(): MenuItem[] {
        return this.menuItems;
    }
}
