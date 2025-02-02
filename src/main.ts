import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { AppComponent } from './app/app.component';
import { AccountsComponent } from './app/components/accounts/accounts.component';
import { TransactionsComponent } from './app/components/transactions/transactions.component';

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter([
      {
        path: 'accounts',
        component:AccountsComponent
      },
      {
        path: 'transactions',
        component: TransactionsComponent
      },
      {
        path: '',
        redirectTo: '/accounts',
        pathMatch: 'full'
      }
    ])
  ]
}).catch((err) => console.error(err));
