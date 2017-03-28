// import { Component, OnInit } from '@angular/core';
//
// @Component({
//   selector: 'app-bid-list',
//   templateUrl: './bid-list.component.html',
//   styleUrls: ['./bid-list.component.css']
// })
// export class BidListComponent implements OnInit {
//
//   constructor() { }
//
//   ngOnInit() {
//   }
//
// }
import { Component, OnInit } from '@angular/core';

import { BidService } from '../bid.service';

@Component({
  selector: 'app-bid-list',
  templateUrl: './bid-list.component.html',
  styleUrls: ['./bid-list.component.css']
})
export class BidListComponent implements OnInit {

  bids: Array<Object> = [];
  errorMessage: string = '';

  constructor(private myBidService: BidService) { }

  ngOnInit() {
    this.myBidService.getList()
      .then((bidsList) => {
        this.bids = bidsList;
      })
      .catch((err) => {
        this.errorMessage = 'There was an error. Try again later.';
      });
  }

}
