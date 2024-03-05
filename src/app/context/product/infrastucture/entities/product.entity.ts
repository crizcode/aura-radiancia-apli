export interface ProductEntity {
    id: number;
    name: string;
    descripcion: string;
    precio: number;
    cantidad: number;
    stock: number;
    creationDate: Date;
    categoryName: string;
    supplierName: string;
    supplierId: number;
    categoryId: number;
}
