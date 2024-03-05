import { CategoryEntity } from "src/app/context/category/infrastucture/entities/categoryt.entity";
import { SupplierEntity } from "src/app/context/supplier/infrastucture/entities/supplier.entity";

export interface ProductModel {
    id: number;
    name: string;
    descripcion: string;
    precio: number;
    stock: number;
    creationDate: Date;
    Category: CategoryEntity;
    Supplier: SupplierEntity;
}
