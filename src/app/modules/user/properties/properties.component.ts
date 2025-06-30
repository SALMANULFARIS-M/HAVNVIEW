import { Component } from '@angular/core';
import { FooterComponent } from '../../../shared/user/footer/footer.component';
import { HeaderComponent } from '../../../shared/user/header/header.component';

@Component({
  selector: 'app-properties',
  imports: [HeaderComponent,FooterComponent],
  templateUrl: './properties.component.html',
  styleUrl: './properties.component.css'
})
export class PropertiesComponent {

}
