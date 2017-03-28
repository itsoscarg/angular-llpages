// import { Component, OnInit } from '@angular/core';
//
// @Component({
//   selector: 'app-bid-details',
//   templateUrl: './bid-details.component.html',
//   styleUrls: ['./bid-details.component.css']
// })
// export class BidDetailsComponent implements OnInit {
//
//   constructor() { }
//
//   ngOnInit() {
//   }
//
// }

import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { BidService } from '../bid.service';

@Component({
  selector: 'app-bid-details',
  templateUrl: './bid-details.component.html',
  styleUrls: ['./bid-details.component.css']
})
export class BidDetailsComponent implements OnInit {

  bid: Object;
  errorMessage: string = '';

  constructor(
    private myRoute: ActivatedRoute,
    private myBidService: BidService,
    private myNavigator: Router
  ) { }

  ngOnInit() {
    this.myRoute.params.subscribe((params) => {
      this.getBidDetails(params['id']);
    });
  }

  getBidDetails(id) {
    this.myBidService.get(id)
      .then((theBidDetails) => {
        this.bid = theBidDetails;
      })
      .catch((err) => {
        this.errorMessage = 'Could not retrieve Bid details. Try again later.';
      });
  }

  deleteBid() {
    if (!window.confirm('Are you sure?')) {
      return;
    }

    this.myBidService.remove(this.bid['_id'])
      .then(() => {
        this.myNavigator.navigate(['/']);
      })
      .catch((err) => {
        this.errorMessage = 'Could not retrieve Bid details. Try again later.';
      });
  }

}
