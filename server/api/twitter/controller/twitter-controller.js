"use strict";

const twitterDAO = require('../dao/twitter-dao');

module.exports = class twitterController {
  static getAll(req, res) {
    twitterDAO
      .getAll()
      .then(twitter => res.status(200).json(twitter))
      .catch(error => res.status(400).json(error));
  }

  static createNew(req, res) {
    let _twitter = req.body;

    twitterDAO
      .createNew(_twitter)
      .then(twitter => res.status(201).json(twitter))
      .catch(error => res.status(400).json(error));
  }

  static removeById(req, res) {
    let _id = req.params.id;

    twitterDAO
      .removeById(_id)
      .then(() => res.status(200).end())
      .catch(error => res.status(400).json(error));
  }
}
