import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { PersonModel } from 'src/app/context/person/domain/models/person.model';
import { PersonAdapterService } from 'src/app/context/person/infrastucture/adapters/person.adapter.service';


@Component({
  selector: 'app-add-person-component',
  templateUrl: './dialog-add-person.component.html',
  styleUrls: ['./dialog-add-person.component.css']
})

export class DialogAddPersonComponent implements OnInit {

  @Output() personAdded: EventEmitter<any> = new EventEmitter();

  people: PersonModel[] = [];

  personData = {
    nombre: '',
    apellido: '',
    email: '',
    userName: '',
    pass: '',
    departmentId: 0,
    roleId: 0,

  };

  constructor(
    public dialogRef: MatDialogRef<DialogAddPersonComponent>,
    private personService: PersonAdapterService,
  ) {}

  ngOnInit(): void {
    this.loadPeople();
  }

  crearPersona(): void {
    if (!this.isValidPersonData()) {
      console.error('Por favor, complete todos los campos.');
      return;
    }

    this.personService.create(this.personData).subscribe({
      next: (response) => {
        this.dialogRef.close('success');
      },
      error: (error) => {
        console.error('Error al crear persona:', error);
      }
    });
  }

  isValidPersonData(): boolean {
    return (
      this.personData.nombre !== '' &&
      this.personData.apellido !== '' &&
      this.personData.email !== '' &&
      this.personData.userName !== '' &&
      this.personData.pass !== '' &&
      this.personData.departmentId !== null &&
      this.personData.roleId !== null
    );
  }

  loadPeople(): void {
    this.personService.findAll().subscribe((people: PersonModel[]) => {
      this.people = people;
    });
  }


  onClose(): void {
    this.dialogRef.close();
  }
}
