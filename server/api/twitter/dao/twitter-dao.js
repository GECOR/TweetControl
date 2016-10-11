"use strict";

const mongoose = require('mongoose');
const Promise = require('bluebird');
const twitterSchema = require('../model/twitter-model');
const _ = require('lodash');
const Twitter = require('twitter');
const twitterConst = require('../../../constants/twitter.json');

twitterSchema.statics.getAll = () => {
  return new Promise((resolve, reject) => {
    /*let _query = {};

    twitter
      .find(_query)
      .exec((err, todos) => {
        err ? reject(err)
          : resolve(todos);
      });*/

      var client = new Twitter({
        consumer_key: twitterConst.TWITTER_CONSUMER_KEY,
        consumer_secret: twitterConst.TWITTER_CONSUMER_SECRET,
        access_token_key: twitterConst.TWITTER_ACCESS_TOKEN_KEY,
        access_token_secret: twitterConst.TWITTER_ACCESS_TOKEN_SECRET
      });

      /*var params = {screen_name: 'nodejs'};
      client.get('statuses/user_timeline', params, function(error, tweets, response) {
        if (!error) {
          resolve(tweets);
        }
      });*/

      client.post('statuses/update', {status: 'I Love Twitter'},  function(error, tweet, response) {
        if(error) throw error;
        resolve(tweet);  // Tweet body. 
        //console.log(response);  // Raw response object. 
      });
  });
}

twitterSchema.statics.createNew = (twitter) => {
  return new Promise((resolve, reject) => {
    if (!_.isObject(twitter)) {
      return reject(new TypeError('Todo is not a valid object.'));
    }

    let _something = new twitter(twitter);

    _something.save((err, saved) => {
      err ? reject(err)
        : resolve(saved);
    });
  });
}

twitterSchema.statics.removeById = (id) => {
  return new Promise((resolve, reject) => {
    if (!_.isString(id)) {
      return reject(new TypeError('Id is not a valid string.'));
    }

    twitter
      .findByIdAndRemove(id)
      .exec((err, deleted) => {
        err ? reject(err)
          : resolve();
      });
  });
}

const twitter = mongoose.model('twitter', twitterSchema);

module.exports = twitter;
