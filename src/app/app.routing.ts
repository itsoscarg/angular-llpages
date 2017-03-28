import { Routes } from '@angular/router';

import { BidDetailsComponent } from './bid-details/bid-details.component';
import { BidListComponent } from './bid-list/bid-list.component';

export const routes: Routes = [
    { path: '', component: BidListComponent },
    { path: 'bid/:id', component: BidDetailsComponent },
    { path: '**', redirectTo: '' }
];
