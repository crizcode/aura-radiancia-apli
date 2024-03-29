import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { catchError, forkJoin, throwError } from 'rxjs';
import { SupplierModel } from 'src/app/context/supplier/domain/models/supplier.model';
import { SupplierAdapterService } from 'src/app/context/supplier/infrastucture/adapters/supplier.adapter.service';



@Component({
  selector: 'app-editar-supplier',
  templateUrl: './dialog-editar-supplier.component.html',
  styleUrls: ['./dialog-editar-supplier.component.css']
})

export class DialogEditarSupplierComponent implements OnInit {

  supplier: SupplierModel = {} as SupplierModel;
  loaded: boolean = false;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: { supplierId: number },
    private dialogRef: MatDialogRef<DialogEditarSupplierComponent>,
    private supplierService: SupplierAdapterService,
  ) {}

  ngOnInit(): void {
    const supplierId = this.data.supplierId;
    forkJoin({
      supplier: this.supplierService.findById(supplierId),
    }).pipe(
      catchError(error => {
        console.error('Error al obtener los datos:', error);
        return throwError(error);
      })
    ).subscribe(({ supplier }) => {
      if (!supplier) {
        console.error('No se encontró el proveedor');
        return;
      }
      this.supplier = supplier; // Asigna el proveedor recibido
      this.loaded = true;
    });
  }

  
  updateProveedor(): void {
      // Convertir el estado a una cadena '1' o '0'
      this.supplier.estado = this.supplier.estado == 'Activo' ? '1' : '0';
      this.supplierService.update(this.supplier).subscribe(() => {
      this.dialogRef.close('success');
    }, error => {
      console.error('Error al actualizar el proveedor:', error);
    });
  }

  estados = [
    { name: 'Activo', value: 'Activo' },
    { name: 'Inactivo', value: 'Inactivo' }
  ];
  
}