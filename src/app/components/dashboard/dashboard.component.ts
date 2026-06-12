import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../header/header.component';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { SummaryCardComponent } from './summary-card/summary-card.component';
import { TransactionsComponent } from './transactions/transactions.component';
import { WidgetsComponent } from './widgets/widgets.component';
import { Transaction } from '../../models/transaction.model';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    CommonModule, 
    HeaderComponent, 
    SidebarComponent, 
    SummaryCardComponent, 
    TransactionsComponent, 
    WidgetsComponent
  ],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'] // 👈 Yeh line add ho gayi hai tumhari custom CSS file ke liye
})
export class DashboardComponent {
  mockTransactions: Transaction[] = [
    { date: '29 May 2026', description: 'CHRG: DEBIT CARD ANNUAL FEE X3329 FOR 2026', amount: 588.82, type: 'debit' },
    { date: '26 May 2026', description: 'UPI/MAHARASHTRIAN R/614608700889/PaidViaKotakApp', amount: 30.00, type: 'debit' },
    { date: '26 May 2026', description: 'UPI/ROMAN RANGE /614608700629/PaidViaKotakApp', amount: 35.00, type: 'debit' },
    { date: '24 May 2026', description: 'UPI/KORI ANDRE/614422825340/PaidViaKotakApp', amount: 230.00, type: 'debit' },
    { date: '23 May 2026', description: 'UPI/KEN ANDRE/614323080514/PaidViaKotakApp', amount: 200.00, type: 'debit' }
  ];
}