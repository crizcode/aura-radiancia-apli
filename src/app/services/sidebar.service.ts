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
        { path: '/dashboard/productos', title: 'Producto' }, 
        { path: '/dashboard/categoria', title: 'Categoria' },
        { path: '/dashboard/proveedor', title: 'Proveedor' }, 


        // Agrega más elementos del menú según sea necesario
    ];
  
    constructor() { }
  
    getMenuItems(): MenuItem[] {
        return this.menuItems;
    }
}
