import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  standalone: true,
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
  providers: [],
  imports: [ReactiveFormsModule],
})
export class FormComponent implements OnInit {
  myForm!: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.initializeForm();
  }

  initializeForm() {
    this.myForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      subscribe: [false],
      terms: [false, Validators.requiredTrue],
      phoneNumber: [''],
      address: [''],
      age: ['']
    });
  }

  onSubmit() {
    
    console.log(this.myForm.value);
  }
}
