import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { AngularAdapterService } from 'src/app/context/commons/services/angular-adapter.service';
import { MatDialog } from '@angular/material/dialog';
import { LiveAnnouncer } from '@angular/cdk/a11y';
import {MatSort, Sort} from '@angular/material/sort';
import { ConfirmDialogComponent } from 'src/app/home/components/confirm-dialog/confirm-dialog.component';
import { SupplierModel } from 'src/app/context/supplier/domain/models/supplier.model';
import { SupplierAdapterService } from 'src/app/context/supplier/infrastucture/adapters/supplier.adapter.service';
import { DialogAddSupplierComponent } from '../add-supplier/dialog-add-supplier.component';
import { DialogEditarSupplierComponent } from '../editar-supplier/dialog-editar-supplier.component';


@Component({
  templateUrl: './supplier.component.html',
})
export default class SupplierComponent implements OnInit {
  
  categories: SupplierModel[] = [];
  dataSource = new MatTableDataSource<SupplierModel>();
  columnsToDisplay: string[] = ['supplierId', 'name', 'estado', 'acciones'];
  value = '';

  constructor(
    private supplierService: SupplierAdapterService,
    private angularService: AngularAdapterService,
    public dialog: MatDialog,              
    private _liveAnnouncer: LiveAnnouncer, 
  ) { }

  ngOnInit(): void {
    this.listarProveedores();
  }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
  }


  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;



  applyFilter(event: Event) {
    const target = (event.target as HTMLInputElement);
    if (target) {
      const filterValue = target.value;
      this.dataSource.filter = filterValue.trim().toLowerCase();
    }
  
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
  
  clearFilter() {
    this.value = '';
    this.dataSource.filter = '';
    this.listarProveedores();
  }

  announceSortChange(sortState: Sort) {
    if (sortState.direction) {
      this._liveAnnouncer.announce(`Sorted ${sortState.direction}ending`);
    } else {
      this._liveAnnouncer.announce('Sorting cleared');
    }
  }

  dialogAddProveedor() {
    const dialogRef = this.dialog.open(DialogAddSupplierComponent);
    dialogRef.afterClosed().subscribe(result => {
      if (result === 'success') {
        this.listarProveedores();
      }
    });
  }
  
  listarProveedores(): void {
    this.supplierService.findAll().subscribe(categories => {
      this.categories = categories;
      this.dataSource.data = categories;
      this.dataSource.paginator = this.paginator;
    }, error => {
      this.angularService.handleHttpError(error);
    });
  }

  dialogEditarProveedor(supplierId: number): void {
    const dialogRef = this.dialog.open(DialogEditarSupplierComponent, {
      data: { supplierId: supplierId }
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result === 'success') {
        this.listarProveedores();
      }
    });
  }

  confirmDeleteProveedor(id: number): void {
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      width: '280px',
      data: { message: '¿Estás seguro de que deseas eliminar proveedor?' }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.supplierService.deleteById(id).subscribe({
          next: () => {
            this.listarProveedores();
          },
          error: (error) => {
            console.error('Error al eliminar producto:', error);
          },
          complete: () => {
          }
        });
      } else {

      }
    });
  }

}
