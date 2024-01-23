


import { Component, OnInit } from '@angular/core';
import { Firestore, addDoc, collection, collectionData, doc, updateDoc, deleteDoc, DocumentReference, DocumentData } from '@angular/fire/firestore';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'crud';

  constructor(private fb: Firestore) {}

  ngOnInit(): void {
    this.add();
    this.read();
    this.update();
    this.delete();
  }

  async add() {
    const docRef = await addDoc(collection(this.fb, 'users'), {
      age: '3',
      name: 'sab',
    });
    console.log("Document written with ID: ", docRef.id);
  }

  read() {
    const itemCollection = collection(this.fb, 'users');
    const data = collectionData(itemCollection);
    console.log(data);
  }

  async update() {
    const itemCollection = collection(this.fb, 'users');
    const querySnapshot = await itemCollection.get();
    querySnapshot.forEach(async (doc: { ref: DocumentReference<unknown, { age: string; name: string; }>; id: any; }) => {
      await updateDoc(doc.ref, { age: 'updatedAge', name: 'updatedName' });
      console.log("Document updated with ID: ", doc.id);
    });
  }

  async delete() {
    const itemCollection = collection(this.fb, 'users');
    const querySnapshot = await itemCollection.get();
    querySnapshot.forEach(async (doc: { ref: DocumentReference<unknown, DocumentData>; id: 2; }) => {
      await deleteDoc(doc.ref);
      console.log("Document deleted with ID: ", doc.id);
    });
  }
}