import { Component } from '@angular/core';
import { FooterComponent } from '../../../shared/user/footer/footer.component';
import { HeaderComponent } from '../../../shared/user/header/header.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-properties',
  imports: [HeaderComponent, FooterComponent, CommonModule],
  templateUrl: './properties.component.html',
  styleUrl: './properties.component.css'
})
export class PropertiesComponent {

  properties = [

    {
      title: '2BHK Villa in Palakkad Town',
      location: 'Kunnathurmedu, Palakkad',
      price: 2800000,
      type: 'Villa',
      market: 'Buy',
      area: 1200,
      imageUrl: 'https://source.unsplash.com/400x300/?house,villa'
    },
    {
      title: 'Residential Plot in Ottapalam',
      location: 'Ottapalam, Palakkad',
      price: 1200000,
      type: 'Land / Plot',
      market: 'Buy',
      area: 2000,
      imageUrl: 'https://source.unsplash.com/400x300/?land,plot'
    },
    {
      title: 'Commercial Shop Space',
      location: 'Shornur Road, Palakkad',
      price: 3200000,
      type: 'Shop',
      market: 'Lease',
      area: 800,
      imageUrl: 'https://source.unsplash.com/400x300/?shop,commercial'
    },
    {
      title: 'A Furnished House',
      location: 'Noorani, Palakkad',
      price: 800000,
      type: 'House',
      market: 'Rent',
      area: 700,
      imageUrl: 'https://source.unsplash.com/400x300/?house,villa'
    },
    {
      title: 'Residential Plot in Pattambi',
      location: 'Pattambi, Palakkad',
      price: 100000,
      type: 'Land / Plot',
      market: 'Buy',
      area: 1800,
      imageUrl: 'https://source.unsplash.com/400x300/?land,plot'
    },
    {
      title: 'Commercial Shop Space',
      location: 'Shornur Road, Palakkad',
      price: 3200000,
      type: 'Shop',
      market: 'Rent',
      area: 800,
      imageUrl: 'https://source.unsplash.com/400x300/?shop,commercial'
    }
  ]




}
