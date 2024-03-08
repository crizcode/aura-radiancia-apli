import { CategoryEntity } from "src/app/context/category/infrastucture/entities/category.entity";
import { SupplierEntity } from "src/app/context/supplier/infrastucture/entities/supplier.entity";

export interface ProductEntity {
      id: number;
      name: string;
      descripcion: string;
      precio: number;
      stock: number;
      creationDate: Date;
      Product: CategoryEntity;
      Supplier: SupplierEntity;
  }
  