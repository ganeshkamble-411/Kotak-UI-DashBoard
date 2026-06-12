import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  // 1. Dropdown ka state track karne ke liye property
  isDropdownOpen: boolean = false;

  // 2. Click hone par state badalne wala method jo compiler dhoond raha hai
  toggleDropdown(event: Event): void {
    event.stopPropagation(); // Yeh dropdown ko click karte hi turant band hone se rokega
    this.isDropdownOpen = !this.isDropdownOpen;
  }

  // 3. Optional: Agar kahin aur click ho to dropdown band karne ke liye utility
  closeDropdown(): void {
    this.isDropdownOpen = false;
  }
}