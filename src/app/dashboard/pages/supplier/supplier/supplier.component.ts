
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { AngularAdapterService } from 'src/app/context/commons/services/angular-adapter.service';
import { MatDialog } from '@angular/material/dialog';
import { SupplierModel } from 'src/app/context/supplier/domain/models/supplier.model';
import { SupplierAdapterService } from 'src/app/context/supplier/infrastucture/adapters/supplier.adapter.service';
import { DialogAddSupplierComponent } from '../dialog-add-supplier/dialog-add-supplier.component';
import { DialogEditSupplierComponent } from '../dialog-edit-supplier/dialog-edit-supplier.component';




@Component({
  templateUrl: './supplier.component.html',

})
export default class SupplierComponent implements OnInit {
  suppliers: SupplierModel[] = [];
  dataSource = new MatTableDataSource<SupplierModel>();
  columnsToDisplay: string[] = ['id', 'nombre', 'estado', 'acciones'];

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(
    private supplierService: SupplierAdapterService,
    private angularService: AngularAdapterService,
    public dialog: MatDialog,
  ) { }

  ngOnInit(): void {
    this.listarProveedores();
  }


dialogAddProveedor() {
    this.dialog.open(DialogAddSupplierComponent);
}

dialogEditProveedor() {
  this.dialog.open(DialogEditSupplierComponent);
}



listarProveedores(): void {
  this.supplierService.findAll()
    .subscribe(suppliers => {
      this.suppliers = suppliers;
      this.dataSource.data = suppliers;
      this.dataSource.paginator = this.paginator;
    }, error => {
      this.angularService.handleHttpError(error); // Utilizando el método de manejo de errores centralizado
    });
}




  // eliminar categoria

  eliminarProveedor(id: number): void {

    const confirmacion = window.confirm(`¿Estás seguro de que deseas eliminar el categoryo con ID: ${id}?`);
    
    if (confirmacion) {
        // llamamos al servicio para eliminar el categoryo
        this.supplierService.deleteById(id).subscribe(() => {
            console.log('Suppliero eliminado correctamente');
            
        }, error => {
            console.error('Error al eliminar categoryo:', error);
           
        });
    } else {

        console.log('Eliminación de categoryo cancelada por el usuario');
    }
  }


  editarProveedor(){

  }
}