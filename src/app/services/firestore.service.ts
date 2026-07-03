import { inject, Injectable } from '@angular/core';
import {
  Firestore,
  collection,
  collectionData,
  addDoc,
  CollectionReference,
  DocumentReference
} from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Guest } from '../shared/interfaces/guest.interface';
 
@Injectable({
  providedIn: 'root'
})
 
export class FirestoreService {
  private readonly firestore = inject(Firestore);
  
  private readonly guestsCollection: CollectionReference = collection(this.firestore, 'rsvps');
 
  public addGuest(guest: Guest): Promise<DocumentReference> {
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
 