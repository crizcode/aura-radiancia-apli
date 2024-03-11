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
  loaded: boolean = false; // Flag para indicar si los datos se han cargado

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
    ).subscribe(({ supplier}) => {
      if (!supplier) {
        console.error('No se encontró el proveedor');
        return;
      }
      this.supplier = supplier;
      this.loaded = true;
    });
  }

  updateProveedor(): void {
    this.supplierService.update(this.supplier).subscribe(() => {
      console.log('Proveedor actualizado correctamente');
      this.dialogRef.close('success');
    }, error => {
      console.error('Error al actualizar el proveedor:', error);
      // Puedes manejar el error aquí si lo deseas
    });
  }
}