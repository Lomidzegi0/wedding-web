import { inject, Injectable, OnInit } from '@angular/core';
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
export class FirestoreService implements OnInit {
  private guestsCollection!: CollectionReference;
  private firestore = inject(Firestore);

  ngOnInit(): void {
    this.guestsCollection = collection(this.firestore, 'rsvps');
  }

  public addGuest(guest: Guest) {
    return addDoc(this.guestsCollection, {
      ...guest,
      createdAt: new Date()
    });
  }

  public getGuests(): Observable<Guest[]> {
    return collectionData(this.guestsCollection, {
      idField: 'id'
    }) as Observable<Guest[]>;
  }
}