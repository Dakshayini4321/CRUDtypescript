import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ConfirmDialogComponent } from '../confirm-dialog/confirm-dialog.component';
import { Person } from '../models/person';
import { PersonFormComponent } from '../person-form/person-form.component';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
  people: Person[] = [];

  constructor(private dialog: MatDialog, private snackBar: MatSnackBar) {}

  editPerson(person: Person): void {
    const dialogRef = this.dialog.open(PersonFormComponent, {
      data: { person, editMode: true }
    });

    dialogRef.afterClosed().subscribe(updatedPerson => {
      if (updatedPerson) {
        this.updatePerson(updatedPerson);
        this.showSnackBar('Person updated successfully.');
      }
    });
  }

  confirmDeletePerson(personId: number): void {
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      data: { message: 'Are you sure you want to delete this person?' }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.deletePerson(personId);
        this.showSnackBar('Person deleted successfully.');
      }
    });
  }

  deletePerson(personId: number): void {
    this.people = this.people.filter(person => person.id !== personId);
  }

  createNewPerson(): void {
    const dialogRef = this.dialog.open(PersonFormComponent, {
      data: { editMode: false }
    });

    dialogRef.afterClosed().subscribe(newPerson => {
      if (newPerson) {
        newPerson.id = this.generateUniqueId();
        this.people.push(newPerson);
        this.showSnackBar('Person added successfully.');
      }
    });
  }

  private generateUniqueId(): number {
    return Math.floor(Math.random() * 1000);
  }

  private updatePerson(updatedPerson: Person): void {
    const index = this.people.findIndex(p => p.id === updatedPerson.id);
    if (index !== -1) {
      this.people[index] = updatedPerson;
    }
  }

  private showSnackBar(message: string): void {
    this.snackBar.open(message, 'Close', {
      duration: 3000,
      horizontalPosition: 'center',
      verticalPosition: 'bottom',
    });
  }
}