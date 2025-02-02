import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';
import { AppComponent } from './app/app.component';
import { AccountsComponent } from './app/components/accounts/accounts.component';
import { TransactionsComponent } from './app/components/transactions/transactions.component';


bootstrapApplication(AppComponent, {
  providers: [
    provideHttpClient(),
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
