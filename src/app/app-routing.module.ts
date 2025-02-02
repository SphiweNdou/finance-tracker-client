import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountsComponent } from './components/accounts/accounts.component';
import { TransactionsComponent } from './components/transactions/transactions.component';

const routes: Routes = [
  {
    path: 'accounts',
    component: AccountsComponent,
  },
  {
    path: 'transactions',
    component: TransactionsComponent,
  },
  {
    //default path
    path: '',
    redirectTo: '/accounts',
    pathMatch: 'full',
  },
];

@NgModule(
    {
        imports:[RouterModule.forRoot(routes)],
        exports: [RouterModule]
    }
)
export class AppRoutingModule{}