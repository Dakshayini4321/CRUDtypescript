import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, DocumentChangeAction } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class PersonService {
  private personsCollection: AngularFirestoreCollection<Person>;

  constructor(private firestore: AngularFirestore) {
    this.personsCollection = firestore.collection<Person>('persons');
  }

  getPersons(): Observable<Person[]> {
    return this.personsCollection.snapshotChanges().pipe(
      map((actions: DocumentChangeAction<Person>[]) =>
        actions.map((a: DocumentChangeAction<Person>) => {
          const data = a.payload.doc.data() as Person;
          const id = a.payload.doc.id;
          return { id, ...data };
        })
      )
    );
  }

  getPersonById(id: string): Observable<Person | undefined> {
    return this.personsCollection.doc<Person>(id).valueChanges();
  }

  addPerson(person: Person): Promise<void> {
    return this.personsCollection.add(person);
  }

  updatePerson(id: string, person: Person): Promise<void> {
    return this.personsCollection.doc(id).update(person);
  }

  deletePerson(id: string): Promise<void> {
    return this.personsCollection.doc(id).delete();
  }
}

interface Person {
  id?: string;
  number: number;
  name: string;
  age: number;
}