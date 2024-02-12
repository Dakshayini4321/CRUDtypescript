import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-list-user',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './list-user.component.html',
  styleUrl: './list-user.component.css'
})

export class ListUserComponent implements OnInit {
  users: any[] = [];
  currentPage: number = 1;
  itemsPerPage: number = 15;
  token: string ='eyJpdiI6IjBBTmxYZ1dYZW5lNDgyUzdLYzkyQUE9PSIsInZhbHVlIjoiZE0wQmJkRFU3ZVVSWHRDbGR4NThuQXpxWjl3T0xnVXRQUmZYczYvN3Z5OVFJVS9JdVlzWFRLNVJMR05WWlUrS0tZZ2QrN0hWR3h4NXhkZjcvYnZPL3FBQ0ZtY0tMZ2gyOTd5cFZRdVJPMUpieTMzRXdqMTVhK3B4bTQxRGlDeVMyYmlMZ3lmY0ZhM1N3OVlXOEJ4M0JnPT0iLCJtYWMiOiJlNWZkNmNhN2QyN2YzZmZhOWNkMmNlMWNkZTdiZWZjNTU3MGFjNTYzMDU3NmMxNDE2N2Y4YTkxYWY0MjUyM2YxIn0=';


  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.fetchUsers();
  }

  fetchUsers() {
    this.http.get<any>('https://doe-dev-api.isorobot.io/api/v1/users')
      .subscribe(response => {
        this.users = response;
      });
  }

  deleteUser(userId: number) {
    this.http.delete('https://doe-dev-api.isorobot.io/api/v1/users/${userId')
      .subscribe(() => {
       
        this.users = this.users.filter(user => user.id !== userId);
      });
  }
  onPageChange(pageNumber: number) {
    this.currentPage = pageNumber;
    this.fetchUsers();
  }
}


