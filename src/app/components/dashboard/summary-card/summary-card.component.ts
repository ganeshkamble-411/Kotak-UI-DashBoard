import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // 👈 Safe zone ke liye add kar sakte ho

@Component({
  selector: 'app-summary-card',
  standalone: true, // 👈 Safe checklist line
  imports: [CommonModule],
  templateUrl: './summary-card.component.html',
  styleUrl: './summary-card.component.css'
})
export class SummaryCardComponent {}