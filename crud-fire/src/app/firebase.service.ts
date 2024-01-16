import { Injectable } from '@angular/core';
import { AngularFirestore, DocumentChangeAction, DocumentReference } from '@angular/fire/firestore';
import { firebaseConfig } from '../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService { 

  constructor( private firestore: AngularFirestore) { }


  createItem(data: any): Promise<DocumentReference> {
    return this.firestore.collection('items').add(data);
  }

  getItems(): Observable<DocumentChangeAction<any>[]> {
    return this.firestore.collection('items').snapshotChanges();
  }

  
  getItemById(itemId: string): Observable<any> {
    return this.firestore.collection('items').doc(itemId).valueChanges();
  }

  
  updateItem(itemId: string, data: any): Promise<void> {
    return this.firestore.collection('items').doc(itemId).update(data);
  }

  
  deleteItem(itemId: string): Promise<void> {
    return this.firestore.collection('items').doc(itemId).delete();
  }
}


}
