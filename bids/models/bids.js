'use strict';

const mongoose = require('mongoose');

const bidsSchema = new mongoose.Schema({
  store: {
    type: String,
    required: [true, 'The brand is required']
  },
  price: {
    type: String,
    required: [true, 'The price is required']
  },
  // image: {
  //   type: String, default: ''
  // },
  // specs: {
  //   type: Array,
  //   default: []
  // }
});

const Bid = mongoose.model('Bid', bidsSchema);

module.exports = Bid;
