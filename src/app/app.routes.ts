import { Routes } from '@angular/router';
import { Main } from './features/main/main';
import { GuestList } from './features/admin/guest-list/guest-list';

export const routes: Routes = [
  {
    path: "",
    component: Main,
    title: "მოსაწვევი"
  },
  {
    path: "admin/guests",
    component: GuestList,
    title: "სტუმრების სია"
  }
];