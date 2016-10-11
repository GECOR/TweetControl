"use strict";

const mongoose = require('mongoose');
const twitterDAO = require(process.cwd() + '/server/api/twitter/dao/twitter-dao');
const expect = require('chai').expect;
const setupMongoose = require('../../_helpers/db').setupMongoose;

describe('twitterDAO', () => {
  before(() => {
    setupMongoose(mongoose);
  });

  afterEach(() => {
    twitterDAO.remove();
  })

  describe('getAll', () => {

  })

  describe('createNew', () => {

  })

  describe('removeById', () => {

  })
})
