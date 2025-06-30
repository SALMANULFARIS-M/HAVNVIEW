import { Component } from '@angular/core';
import { HeaderComponent } from '../../../shared/user/header/header.component';
import { FooterComponent } from '../../../shared/user/footer/footer.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [HeaderComponent,FooterComponent,RouterModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
