import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '@angular/fire/firestore';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [],
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent implements OnInit {
  items: any[] = [];

  constructor(private firebaseService: FirebaseService) {}

  ngOnInit(): void {
    this.firebaseService.getItems().subscribe((data) => {
      this.items = data.map((item) => ({ id: item.payload.doc.id, ...item.payload.doc.data() }));
    });
  }
}