import { Routes } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {ImageComponent} from "./image/image.component";

export const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'assign', component:ImageComponent},
  {path:'**', component:HomeComponent} // wildcard route
];
