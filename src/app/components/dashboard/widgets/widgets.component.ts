import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-widgets',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './widgets.component.html',
  styleUrls: ['./widgets.component.css'] 
})
export class WidgetsComponent {
  services = [
    { title: 'Correspondence address update' },
    { title: 'Change of home branch' },
    { title: 'Email ID update' },
    { title: 'Update nominee' }
  ];
}