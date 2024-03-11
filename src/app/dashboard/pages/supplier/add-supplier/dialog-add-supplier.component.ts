import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { SupplierModel } from 'src/app/context/supplier/domain/models/supplier.model';
import { SupplierAdapterService } from 'src/app/context/supplier/infrastucture/adapters/supplier.adapter.service';


@Component({
  selector: 'app-add-supplier-component',
  templateUrl: './dialog-add-supplier.component.html',
  styleUrls: ['./dialog-add-supplier.component.css']
})

export class DialogAddSupplierComponent implements OnInit {

  @Output()supplierAdded: EventEmitter<any> = new EventEmitter();

  categories: SupplierModel[] = [];

 supplierData = {
    name: '',
    estado: '',
  };

  constructor(
    public dialogRef: MatDialogRef<DialogAddSupplierComponent>,
    private supplierService: SupplierAdapterService,
  ) {}

  ngOnInit(): void {
    this.loadSuppliers();
  }

  crearCategoria(): void {
    if (!this.isValidSupplierData()) {
      console.error('Por favor, complete todos los campos.');
      return;
    }

    this.supplierService.create(this.supplierData).subscribe({
      next: (response) => {
        //console.log('Categoria creado:', response);
        this.dialogRef.close('success');
      },
      error: (error) => {
        console.error('Error al crear el categoria:', error);
      }
    });
  }

  isValidSupplierData(): boolean {
    return (
      this.supplierData.name.trim() !== '' &&
      this.supplierData.estado !== null
    );
  }

  loadSuppliers(): void {
    this.supplierService.findAll().subscribe((categories: SupplierModel[]) => {
      this.categories = categories;
    });
  }


  onClose(): void {
    this.dialogRef.close();
  }
}
