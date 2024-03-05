import { Component, OnInit } from '@angular/core';
import { ProductModel } from 'src/app/context/product/domain/models/product.model';
import { ProductAdapterService } from 'src/app/context/product/infrastucture/adapters/product.adapter.service';


@Component({
  selector: 'app-add-product-component',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  ngOnInit(): void {
  }

  constructor(private productService: ProductAdapterService) { }

  saveProduct(event: Event): void {
    event.preventDefault();

    // Mostrar la ventana emergente de confirmación
    const confirmed = confirm('¿Desea registrar el producto?');

    // Si el usuario confirmó, proceder con el registro
    if (confirmed) {
      const formData = new FormData(event.target as HTMLFormElement);
      const newProduct: ProductModel = {
      id: 0,
      name: formData.get('name') as string,
      descripcion: formData.get('descripcion') as string,
      precio: +formData.get('precio')!,
      stock: +formData.get('stock')!,
      creationDate: new Date(formData.get('creationDate') as string),
      Category: { id: +formData.get('categoryId')!, name: formData.get('categoryName')! as string, estado: '' },
      Supplier: { id: +formData.get('supplierId')!, name: formData.get('supplierName')! as string, estado: '' }
    };

    this.productService.save(newProduct).subscribe(
      (savedProduct: ProductModel) => {
        alert('Producto guardado con éxito'); 
        // Redireccionar a otra página
      },
    );
  }
}

getSystemDate(): string {
  const today = new Date();
  const formattedDate = today.toISOString().split('T')[0];
  return formattedDate;
}
}