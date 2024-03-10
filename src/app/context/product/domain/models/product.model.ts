import { CategoryEntity } from "src/app/context/category/infrastucture/entities/category.entity";
import { SupplierEntity } from "src/app/context/supplier/infrastucture/entities/supplier.entity";

export interface ProductModel {

id?: number;
name: string;
descripcion: string;
precio: number | null;
stock: number | null;
creationDate?: Date;
categoryId: number;
category?: CategoryEntity; // Relación con Category
supplierId: number;
supplier?: SupplierEntity; // Relación con Supplier
}

