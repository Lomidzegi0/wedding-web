import { Injectable } from '@angular/core';
import {
  Firestore,
  collection,
  collectionData,
  addDoc,
  CollectionReference 
} from '@angular/fire/firestore';
import { Observable } from 'rxjs';

export interface Guest {
  name: string;
  attending: boolean;
  mobileNumber: number;
  createdAt?: Date;
  id?: string;
}

@Injectable({
  providedIn: 'root'
})
export class FirestoreService {
  // 1. Declare the property variable here without assigning it yet
  private guestsCollection!: CollectionReference;

  constructor(private firestore: Firestore) {
    // 2. Initialize it safely inside the constructor after firestore is injected
    this.guestsCollection = collection(this.firestore, 'rsvps');
  }

  addGuest(guest: Guest) {
    return addDoc(this.guestsCollection, {
      ...guest,
      createdAt: new Date()
    });
  }

  getGuests(): Observable<Guest[]> {
    return collectionData(this.guestsCollection, {
      idField: 'id'
    }) as Observable<Guest[]>;
  }
}