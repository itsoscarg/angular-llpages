import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { RouterModule } from "@angular/router";
import { routes } from './app.routing';
import { BidListComponent } from './bid-list/bid-list.component';
import { BidDetailsComponent } from './bid-details/bid-details.component';
import {BidService} from './bid.service';

@NgModule({
  declarations: [
    AppComponent,
    BidListComponent,
    BidDetailsComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes)
  ],
  providers: [BidService],
  bootstrap: [AppComponent]
})
export class AppModule { }
