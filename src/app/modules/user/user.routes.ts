import { Routes } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { ContactComponent } from "./contact/contact.component";
import { AboutComponent } from "./about/about.component";
import { PropertiesComponent } from "./properties/properties.component";
import { AuthComponent } from "../../core/authentication/auth/auth.component";


export const USER_ROUTES: Routes = [
  { path: '', component: HomeComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'about', component: AboutComponent },
  { path: 'properties', component: PropertiesComponent },
  {
    path: 'auth',
    children: [
      { path: 'login', component: AuthComponent, data: { mode: 'login' } },
      { path: 'register', component: AuthComponent, data: { mode: 'register' } }
    ]
  }

];
