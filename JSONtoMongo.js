'use strict';
/*
  Import modules/files you may need to correctly run the script.
  Make sure to save your DB's uri in the config file, then import it with a require statement!
 */
var fs = require('fs'),
    mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    Listing = require('./ListingSchema.js'),
    config = require('./config'),
    entries = require('./listings.json')

/* Connect to your database */
var db = mongoose.connect('mongodb://caiohern24:caiyot_e12@ds125994.mlab.com:25994/assignment3-database');

/*
  Instantiate a mongoose model for each listing object in the JSON file,
  and then save it to your Mongo database
 */
var x = 0;
Object.keys(entries).forEach(function(entry) {
  Object.keys(entries[entry]).forEach(function(category) {
    // console.log(entries[entry][category].coordinates);
    var newListing = Listing({

      code: entries[entry][category].code,
      name: entries[entry][category].name,
      coordinates: entries[entry][category].coordinates,  
      address: entries[entry][category].address
    });

    // save the user
    newListing.save(function(err) {
      if (err) throw err;
      x++;
      console.log('Listing number ' + x + ' created!');
    });
  });
});

/*
  Once you've written + run the script, check out your MongoLab database to ensure that
  it saved everything correctly.
 */
