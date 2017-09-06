/* Fill out these functions using Mongoose queries*/
'use strict';
var fs = require('fs'),
    mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    Listing = require('./ListingSchema.js');

mongoose.connect('mongodb://caiohern24:caiyot_e12@ds125994.mlab.com:25994/assignment3-database');

var findLibraryWest = function() {
  /*
    Find the document that contains data corresponding to Library West,
    then log it to the console.
   */
   Listing.find({ name : 'Library West'}, function (err, doc) {
     if (err) throw err;
     console.log("Finding Library West's information... \n" + doc + "\n");
   })
};

var removeCable = function() {
  /*
    Find the document with the code 'CABL'. This cooresponds with courses that can only be viewed
    on cable TV. Since we live in the 21st century and most courses are now web based, go ahead
    and remove this listing from your database and log the document to the console.
   */
   Listing.find({ code : 'CABL'}).remove(function (err, doc) {
     if (err) throw err;
     console.log("removing decoument with the code 'CABL':\n" + doc + "\n");
   })
};
var updatePhelpsLab = function() {
  /*
    Phelps Laboratory's address is incorrect. Find the listing, update it, and then
    log the updated document to the console.
   */
    Listing.findOneAndUpdate({ address: '432 Newell Dr, Gainesville, FL 32611, United States' },
      { address: 'Phelps Lab, Gainesville, FL 32603' }, function(err, doc) {
        if (err) throw err;

        // we have the updated user returned to us
        console.log("updating Phelps Laboratory's address... \n");
    });
    Listing.find({ name : 'Phelps Laboratory'}, function (err, doc) {
      if (err) throw err;
      console.log(doc);
    })
};
var retrieveAllListings = function() {
  /*
    Retrieve all listings in the database, and log them to the console.
   */
   Listing.find({}, function (err, doc) {
     console.log('Showing all listings \n' + doc);
   })
};

findLibraryWest();
removeCable();
updatePhelpsLab();
retrieveAllListings();
