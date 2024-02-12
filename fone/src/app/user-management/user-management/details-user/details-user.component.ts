import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-details-user',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './details-user.component.html',
  styleUrl: './details-user.component.css'
})

export class DetailsUserComponent implements OnInit {
  SectionId: any;
  user: any;
  token: string ='eyJpdiI6IjBBTmxYZ1dYZW5lNDgyUzdLYzkyQUE9PSIsInZhbHVlIjoiZE0wQmJkRFU3ZVVSWHRDbGR4NThuQXpxWjl3T0xnVXRQUmZYczYvN3Z5OVFJVS9JdVlzWFRLNVJMR05WWlUrS0tZZ2QrN0hWR3h4NXhkZjcvYnZPL3FBQ0ZtY0tMZ2gyOTd5cFZRdVJPMUpieTMzRXdqMTVhK3B4bTQxRGlDeVMyYmlMZ3lmY0ZhM1N3OVlXOEJ4M0JnPT0iLCJtYWMiOiJlNWZkNmNhN2QyN2YzZmZhOWNkMmNlMWNkZTdiZWZjNTU3MGFjNTYzMDU3NmMxNDE2N2Y4YTkxYWY0MjUyM2YxIn0=';

  constructor(private route: ActivatedRoute, private http: HttpClient) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.SectionId = params['id'];
      this.fetchUserDetails();
    });
  }

  fetchUserDetails() {
    this.http.get<any>('https://doe-dev-api.isorobot.io/api/v1/users/${this.userId')
      .subscribe(response => {
        this.user = response;
      });
  }
}