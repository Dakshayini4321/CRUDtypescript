import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-add',
 standalone: true, 
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css'],
  imports:[FormsModule, CommonModule],
})
export class AddComponent {
  user: any = {
    first_name: '',
    last_name: '',
    email: '',
    personal_email: '',
    mobile: '',
    office_number: '',
    organization_id: 1,
    department_id: 18,
    division_id: 10,
    section_id: 13,
    designation_id: 5,
    pwd: '',
    pwd_confirm: '',
    addresses: {
      contact: {
        address: '',
        street: '',
        state: '',
        city: '',
        zip: '',
        contact: '',
        country_id: null
      },
      emergency: {
        relative_name: '',
        relationship: '',
        address: '',
        relative_mobile: ''
      }
    },
    address: '',
    street: '',
    state: '',
    city: '',
    country_id: '',
    zip: '',
    contact: '',
    relative_name: '',
    relationship: '',
    relative_mobile: '',
    relative_address: '',
    role_ids: [],
    is_auditor: false,
    is_top_user: true,
    is_send_welcome: false,
    date_of_birth: '',
    national_insurance_number: '',
    joining_date: '',
    leaving_date: '',
    is_license_active: 1
  };

  itemsPerPage: number = 15;
  formError: string = '';

  private apiUrl: string = 'https://doe-dev-api.isorobot.io/api/v1/users'; 

  constructor(private toastr: ToastrService, private http: HttpClient) {}

  submitForm() {
    
    this.http.post(this.apiUrl, this.user)
      .subscribe(
        (response) => {
          console.log('API Response:', response);
          this.toastr.success('User added successfully!', 'Success');
        },
        (error) => {
          console.error('API Error:', error);
          this.toastr.error('Failed to add user. Please try again.', 'Error');
        }
      );
  }

  showToastr() {
    this.toastr.info('This is a sample Toastr message.', 'Info');
  }
}