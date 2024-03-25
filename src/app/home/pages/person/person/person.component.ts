import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { AngularAdapterService } from 'src/app/context/commons/services/angular-adapter.service';
import { MatDialog } from '@angular/material/dialog';
import { LiveAnnouncer } from '@angular/cdk/a11y';
import {MatSort, Sort} from '@angular/material/sort';
import { ConfirmDialogComponent } from 'src/app/home/components/confirm-dialog/confirm-dialog.component';
import { PersonModel } from 'src/app/context/person/domain/models/person.model';
import { PersonAdapterService } from 'src/app/context/person/infrastucture/adapters/person.adapter.service';
import { DialogAddPersonComponent } from '../add-person/dialog-add-person.component';
import { DialogEditarPersonComponent } from '../editar-person/dialog-editar-person.component';


@Component({
  templateUrl: './person.component.html',
})
export default class PersonComponent implements OnInit {
  
  people: PersonModel[] = [];
  dataSource = new MatTableDataSource<PersonModel>();
  columnsToDisplay: string[] = ['id', 'nombre', 'apellido', 'email','userName','departmentId','roleId','estado', 'acciones'];
  value = '';

  constructor(
    private personService: PersonAdapterService,
    private angularService: AngularAdapterService,
    public dialog: MatDialog,               
    private _liveAnnouncer: LiveAnnouncer,
  ) { }

  ngOnInit(): void {
    this.listarPersonas();
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
    this.listarPersonas();
  }

  announceSortChange(sortState: Sort) {
    if (sortState.direction) {
      this._liveAnnouncer.announce(`Sorted ${sortState.direction}ending`);
    } else {
      this._liveAnnouncer.announce('Sorting cleared');
    }
  }



  dialogAddPersona() {
    const dialogRef = this.dialog.open(DialogAddPersonComponent);
    dialogRef.afterClosed().subscribe(result => {
      if (result === 'success') {
        this.listarPersonas();
      }
    });
  }
  

  listarPersonas(): void {
    this.personService.findAll().subscribe(people => {
      this.people = people;
      this.dataSource.data = people;
      this.dataSource.paginator = this.paginator;
    }, error => {
      this.angularService.handleHttpError(error);
    });
  }

  // Navegar a editar
  dialogEditarPersona(personId: number): void {
    const dialogRef = this.dialog.open(DialogEditarPersonComponent, {
      data: { personId: personId }
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result === 'success') {
        this.listarPersonas();
      }
    });
  }

  // Eliminar persona

  confirmDeletePersona(id: number): void {
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      width: '250px',
      data: { message: '¿Estás seguro de que deseas inhabilitar esta persona?' }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.personService.deleteById(id).subscribe({
          next: () => {
            this.listarPersonas();
          },
          error: (error) => {
            console.error('Error al eliminar persona:', error);
          },
          complete: () => {
          }
        });
      } else {
      }
    });
  }
}
