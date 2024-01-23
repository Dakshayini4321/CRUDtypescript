import { Injectable } from '@angular/core';
import { Firestore } from '@angular/fire/firestore/firebase';
import { student } from './student.service';
import { FirebaseAppModule } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor( private afs: Firestore) { }


  addstudent(student : student) {
  student.num = this.afs.createId();
  return this.afs.collection('/student').add(student);

  }

}
