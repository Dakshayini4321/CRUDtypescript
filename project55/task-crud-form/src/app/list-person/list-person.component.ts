import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PersonService } from '../person.service';
import { ToastrService } from 'ngx-toastr';



@Component({
  selector: 'app-list',
  templateUrl: './list-person.component.html',
  styleUrls: ['./list-person.component.css']
})
export class ListComponent implements OnInit {
  persons: Person[] = {};

  
  newPerson: Partial<Person> = {
    name: '',
    age: 0
  };

  constructor(
    private personService: PersonService,
    private router: Router,
    private toastr: ToastrService
  ) { }

  ngOnInit(): void {
    this.loadPersons();
  }

  loadPersons(): void {
    this.personService.getPersons().subscribe(persons => {
      this.persons = persons;
    });
  }

  editPerson(id: string): void {
    this.router.navigate(['/form', { id }]);
    this.toastr.info('Editing Person', 'Edit');
  }

  deletePerson(id: string): void {
    if (confirm('Are you sure you want to delete this person?')) {
      this.personService.deletePerson(id).then(() => {
        this.loadPersons();
        this.toastr.success('Person deleted successfully', 'Delete');
      });
    }
  }

  createNewPerson(): void {
    this.toastr.info('<input type="text" [(ngModel)]="newPerson.name" placeholder="Name">' +
      '<input type="number" [(ngModel)]="newPerson.age" placeholder="Age">' +
      '<button class="btn btn-primary" (click)="saveNewPerson()">Save</button>', 'Create New', {
      enableHtml: true,
      closeButton: true,
      tapToDismiss: false
    });
  }

  saveNewPerson(): void {
    this.personService.addPerson(this.newPerson as Person).then(() => {
      this.loadPersons();
      this.toastr.success('New Person created successfully', 'Create New');
      this.newPerson = { name: '', age: 0 }; 
    });
  }
}

interface Person {
  id?: string;
  number: number;
  name: string;
  age: number;
}