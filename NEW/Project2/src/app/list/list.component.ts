import { Component, OnInit } from '@angular/core';
import { YourFirebaseService} from '@angular-devkit/build-angular'

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  data: any[] = [];
  toastMessage: string = '';

  constructor(private firebaseService: YourFirebaseService) { }

  ngOnInit(): void {
    this.loadData();
  }

  createNew() {
    const newItem = { num: this.data.length + 1, name: 'New Item', age: 0 }; 
    this.firebaseService.createItem(newItem).then(() => {
      this.loadData();
      this.toastMessage = 'New item added successfully!';
    }).catch((error: any) => {
      console.error('Error adding new item:', error);
    });
  }

  editItem(item: any) {
    const updatedItem = { ...item, name: 'Updated Item' }; 
    this.firebaseService.updateItem(updatedItem).then(() => {
      this.loadData();
      this.toastMessage = 'Item updated successfully!';
    }).catch((error: any) => {
      console.error('Error updating item:', error);
    });
  }

  confirmDelete(item: any) {
    if (confirm('Are you sure you want to delete this item?')) {
      this.deleteItem(item);
    }
  }

  deleteItem(item: any) {
    this.firebaseService.deleteItem(item).then(() => {
      this.loadData();
      this.toastMessage = 'Item deleted successfully!';
    }).catch((error: any) => {
      console.error('Error deleting item:', error);
    });
  }

  private loadData() {
    this.firebaseService.getData().then((result: any[]) => {
      this.data = result;
    }).catch((error: any) => {
      console.error('Error fetching data:', error);
    });
  }
}