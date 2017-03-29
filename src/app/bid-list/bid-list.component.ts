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
    //adds first 4
    this.myBidService.getList()
      .then((bidsList) => {
        var list = this.bids;
    for (var i = 0; i < 2; i++){
      console.log(this.bids);
      this.bids.push(bidsList[i]);
    }
    //timeout 3 sec
    setTimeout(function(){
      for (var i = 2; i < 5; i++){
        list.push(bidsList[i]);
      }

      setTimeout(function(){
        for (var i = 5; i < 8; i++){
          list.push(bidsList[i]);
        }
      }, 3000);

    },2000);

    //adds next one

    //
    // setTimeout(3000);
    //
    // //adds next one
    // for (var i = 6; i < 8; i++){
    //   this.bids.push(bidsList[i]);
    // }
    //
    //


        // this.bids = bidsList;

      })
      .catch((err) => {
        this.errorMessage = 'There was an error. Try again later.';
      });
  }

}
