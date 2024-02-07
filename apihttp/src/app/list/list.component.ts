import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr'; 
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-list',
  standalone: true,
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
  imports: [FormsModule, CommonModule]
  
})
export class ListComponent implements OnInit {
  users: any[] = [];
  paginatedUsers: any[] = [];
  currentPage: number = 1;
  itemsPerPage: number = 15; 
  totalPages: number = 0;
  filterText: string = '';

  private apiUrl: string = 'https://doe-dev-api.isorobot.io/api/v1/users'; 

  constructor(private http: HttpClient, private toastr: ToastrService) {}

  ngOnInit() {
    this.fetchUsers();
  }

  fetchUsers() {
    this.http.get<any[]>(this.apiUrl)
      .subscribe(
        (response) => {
          this.users = response;
          this.updatePagination();
        },
        (error) => {
          console.error('API Error:', error);
          this.toastr.error('Failed to fetch users. Please try again.', 'Error');
        }
      );
  }

  updatePagination() {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;
    this.paginatedUsers = this.users.slice(startIndex, endIndex);

    this.totalPages = Math.ceil(this.users.length / this.itemsPerPage);
  }

  changePage(newPage: number) {
    if (newPage >= 1 && newPage <= this.totalPages) {
      this.currentPage = newPage;
      this.updatePagination();
    }
  }

  applyFilter() {
    this.paginatedUsers = this.users.filter(user =>
      user.first_name.toLowerCase().includes(this.filterText.toLowerCase())
    );

    this.currentPage = 1; 
    this.totalPages = Math.ceil(this.paginatedUsers.length / this.itemsPerPage);
  }
}