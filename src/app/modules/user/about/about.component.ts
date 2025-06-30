import { Component } from '@angular/core';
import { FooterComponent } from '../../../shared/user/footer/footer.component';
import { HeaderComponent } from '../../../shared/user/header/header.component';

@Component({
  selector: 'app-about',
  imports: [HeaderComponent,FooterComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {

}
