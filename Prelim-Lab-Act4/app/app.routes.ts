import { Routes } from '@angular/router';
import { Home } from '../home/home';
import { Directives } from '../Directives/directives';
import { DataBinding } from '../DataBinding/data-binding';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'directives', component: Directives },
  { path: 'data-binding', component: DataBinding }
];
