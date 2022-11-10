import { Component } from '@angular/core';
import { MenuItem } from 'src/MenuItem';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ChirpusPizza Menu';

  m1 : MenuItem = {id: 1, name: 'Cheesy Bread', price: 4.99};
  m2 : MenuItem = {id: 2, name: 'Cheese Pizza', price: 11.99};
  m3 : MenuItem = {id: 3, name: 'Calzone', price: 9.99};
  m4 : MenuItem = {id: 4, name: 'Pepperoni Pizza', price: 12.50};
  m5 : MenuItem = {id: 5, name: 'Supreme Pizza', price: 13.00};
  m6 : MenuItem = {id: 5, name: 'Pizza Size Upgrade:', price: 2.50};

  menu : MenuItem[] = [this.m1, this.m2, this.m3, this.m4, this.m5, this.m6]
}

