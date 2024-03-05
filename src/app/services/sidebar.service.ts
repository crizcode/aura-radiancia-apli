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
        { path: '/dashboard/categoria', title: 'Categoria' }, // Corregido la ruta del producto
        // Agrega más elementos del menú según sea necesario
    ];
  
    constructor() { }
  
    getMenuItems(): MenuItem[] {
        return this.menuItems;
    }
}
