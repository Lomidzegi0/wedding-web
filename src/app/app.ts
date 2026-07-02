import { Component } from '@angular/core';
import { FirestoreService } from './services/firestore.service';

@Component({
  selector: 'app-root',
  template: `<h1>Wedding Website</h1>`
})
export class App {

  constructor(private firestore: FirestoreService) {
    this.testFirestore();
  }

  async testFirestore() {
    await this.firestore.addGuest(
      'Test User',
      true,
      2
    );

    console.log('Guest saved!');
  }
}