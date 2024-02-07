
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'; 
import { UserService } from '../user.service';
@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  userDetails: any; 

  constructor(
    private userService: UserService,
    private route: ActivatedRoute 
  ) {}

  ngOnInit() {
   
    this.route.params.subscribe(params => {
      const userId = params['id'];
      this.fetchUserDetails(userId);
    });

   
  }

  fetchUserDetails(userId: number) {
    
    this.userService.getUserDetails(userId).subscribe(
      (userDetails) => {
        this.userDetails = userDetails;
      },
      (error) => {
        console.error('Failed to fetch user details:', error);
      }
    );
  }
}