import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Database, set, ref, update, onValue } from '@angular/fire/database';
import { FormsModule } from '@angular/forms';
import { CustomerComponent } from "./customer/customer.component";
import { TableComponent } from "./table/table.component";
import { MatDialogRef, MatDialog, MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';
import { FirebaseService } from './shared/firebase.service';
import { config } from 'process';
@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [CommonModule, MatDialogModule, RouterOutlet, FormsModule, CustomerComponent, TableComponent]
})
export class AppComponent {
  title = 'crudfire';
  constructor(private dialog: MatDialog, public firebaseservice: FirebaseService){}
  createCustomerForm(){
    this.dialog.open(CustomerComponent)

  }

}