

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FirebaseService } from '@angular/fire/firestore';

@Component({
  selector: 'app-add-edit',
  standalone: true,
  imports: [],
  templateUrl: './add-edit.component.html',
  styleUrls: ['./add-edit.component.css'],
})
export class AddEditComponent implements OnInit {
  item: any = {};
  isEditMode: boolean = false;

  constructor(
    private firebaseService: FirebaseService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    const itemId = this.route.snapshot.paramMap.get('id');
    if (itemId) {
      this.isEditMode = true;
      this.firebaseService.getItemById(itemId).subscribe((data) => {
        this.item = data;
      });
    }
  }

  saveOrUpdate(): void {
    if (this.isEditMode) {
      this.firebaseService.updateItem(this.item.id, this.item).then(() => {
        console.log('Item updated successfully!');
        this.router.navigate(['/list']); 
      });
    } else {
      this.firebaseService.createItem(this.item).then(() => {
        console.log('Item saved successfully!');
        this.router.navigate(['/list']); 
      });
    }
  }
}