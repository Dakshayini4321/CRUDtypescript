import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet, Routes } from '@angular/router';
import { AddEditComponent } from './add-edit/add-edit.component';
import { DetailsComponent } from './details/details.component';
import { FormComponent } from './form/form.component';
import { ListComponent } from './list/list.component';
import { WildcardComponent } from './wildcard/wildcard.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Project2';
}

export const routes: Routes = [
    { path: 'list', component: ListComponent },
    { path: 'add', component: AddEditComponent },
    { path: 'edit/:id', component: AddEditComponent },
    { path: 'details/:id', component: DetailsComponent },
    { path: 'form', component: FormComponent },
    { path: '**', component: WildcardComponent },
    { path: '', redirectTo: '/list', pathMatch: 'full' },
];
