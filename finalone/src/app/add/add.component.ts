import { Component } from '@angular/core';
import { UserAddService } from '../user-add.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-add',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent {
  countriesApi: string= 'https://restcountries.com/v3.1/all';
  constructor(private info: HttpClient) {}

  ngOnInit (): void {}
    
    };
  

