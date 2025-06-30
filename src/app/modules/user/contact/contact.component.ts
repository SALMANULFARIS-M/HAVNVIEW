import { Component } from '@angular/core';
import { FooterComponent } from '../../../shared/user/footer/footer.component';
import { HeaderComponent } from '../../../shared/user/header/header.component';

@Component({
  selector: 'app-contact',
  imports: [HeaderComponent,FooterComponent],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {

}
