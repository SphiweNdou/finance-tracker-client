import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { AccountsComponent } from "./components/accounts/accounts.component";
import { TransactionsComponent } from "./components/transactions/transactions.component";

@Component({
  selector: 'app-root',
  imports: [RouterModule, AccountsComponent, TransactionsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'finance-tracker-client';
}
