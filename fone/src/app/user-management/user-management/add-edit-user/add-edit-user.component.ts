import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../../../user.service';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-add-edit-user',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './add-edit-user.component.html',
  styleUrl: './add-edit-user.component.css'
})

export class AddEditUserComponent implements OnInit {
  userForm: any;
  toastMessage: any ;

  constructor(private formBuilder: FormBuilder, private userService: UserService) { }

  ngOnInit(): void {
    this.initForm();
  }

  initForm(): void {
    this.userForm = this.formBuilder.group({
      first_name: ['', Validators.required],
      last_name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      personal_email: [''],
      mobile: [''],
      office_number: [''],
      organization_id: ['', Validators.required],
      department_id: ['', Validators.required],
      division_id: ['', Validators.required],
      section_id: ['', Validators.required],
      designation_id: ['', Validators.required],
      pwd: ['', Validators.required],
      pwd_confirm: ['', Validators.required],
      addresses: this.formBuilder.group({
        contact: this.formBuilder.group({
          address: [''],
          street: [''],
          state: [''],
          city: [''],
          zip: [''],
          contact: [''],
          country_id: ['']
        }),
        emergency: this.formBuilder.group({
          relative_name: [''],
          relationship: [''],
          address: [''],
          relative_mobile: ['']
        })
      }),
      address: [''],
      street: [''],
      state: [''],
      city: [''],
      country_id: [''],
      zip: [''],
      contact: [''],
      relative_name: [''],
      relationship: [''],
      relative_mobile: [''],
      relative_address: [''],
      role_ids: [''],
      is_auditor: [false],
      is_top_user: [true],
      is_send_welcome: [false],
      date_of_birth: [''],
      national_insurance_number: [''],
      joining_date: [''],
      leaving_date: [''],
      is_license_active: [true]
    });
  }

  onSubmit(): void {
    if (this.userForm.valid) {
      this.userService.addUser(this.userForm.value).subscribe(
        response => {
          this.toastMessage = 'User saved successfully';
          
        },
        error => {
          this.toastMessage = 'Error saving user';
        }
      );
    } else {
      this.toastMessage = 'Please fill in all required fields correctly';
    }
  }
}