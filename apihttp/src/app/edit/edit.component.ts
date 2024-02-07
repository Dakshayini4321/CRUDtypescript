import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../user.service';
import { ToastrService } from 'ngx-toastr'; 

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  sectionid: number = 2;
  editedUser: any = {};

  constructor(
    private userService: UserService, 
    private route: ActivatedRoute,
    private router: Router,
    private toastr: ToastrService
  ) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.sectionid = +params['id'];
      this.fetchUserDetails();
    });
  }

  fetchUserDetails() {
    this.userService.getUserDetails(this.sectionid).subscribe(
      (userDetails) => {
        this.editedUser = userDetails || {}; 
      },
      (error) => {
        console.error('Failed to fetch user details:', error);
        this.toastr.error('Failed to fetch user details. Please try again.', 'Error');
      }
    );
  }

  updateUser() {
    this.userService.updateUser(this.sectionid, this.editedUser).subscribe(
      (updatedUser) => {
        this.toastr.success('User details updated successfully!', 'Success');
        this.router.navigate(['/list']); 
      },
      (error) => {
        console.error('Failed to update user details:', error);
        this.toastr.error('Failed to update user details. Please try again.', 'Error');
      }
    );
  }
}