import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { catchError, forkJoin, throwError } from 'rxjs';
import { PersonModel } from 'src/app/context/person/domain/models/person.model';
import { PersonAdapterService } from 'src/app/context/person/infrastucture/adapters/person.adapter.service';
@Component({
  selector: 'app-editar-person',
  templateUrl: './dialog-editar-person.component.html',
  styleUrls: ['./dialog-editar-person.component.css']
})

export class DialogEditarPersonComponent implements OnInit {
  person: PersonModel = {} as PersonModel;
  loaded: boolean = false; // Flag para indicar si los datos se han cargado

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: { personId: number },
    private dialogRef: MatDialogRef<DialogEditarPersonComponent>,
    private personService: PersonAdapterService,
  ) {}

  ngOnInit(): void {
    const personId = this.data.personId;
    forkJoin({
      person: this.personService.findById(personId),
    }).pipe(
      catchError(error => {
        console.error('Error al obtener los datos:', error);
        return throwError(error);
      })
    ).subscribe(({ person}) => {
      if (!person) {
        console.error('No se encontró el persona');
        return;
      }
      this.person = person;
      this.loaded = true;
    });
  }

  updatePersona(): void {
    this.personService.update(this.person).subscribe(() => {
      console.log('Persona actualizada correctamente');
      this.dialogRef.close('success');
    }, error => {
      console.error('Error al actualizar persona:', error);
    });
  }
}