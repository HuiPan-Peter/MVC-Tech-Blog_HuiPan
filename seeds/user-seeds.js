const sequelize = require('../config/connection');
const { User, Post } = require('../models');

const userdata = [
  {
    username: 'HuiPan',
    email: 'guaranstone@gmail.com',
    password: '@12345'
  },
  {
    username: 'TestUser01',
    email: 'test_user01@gmail.com',
    password: 'a12345'
  },
  {
    username: 'TestUser02',
    email: 'test_user02@gmail.com',
    password: 'b12345'
  },
  {
    username: 'TestUser03',
    email: 'test_user03@gmail.com',
    password: 'c12345'
  },
  {
    username: 'TestUser04',
    email: 'test_user04@gmail.com',
    password: 'd12345'
  },
  {
    username: 'TestUser05',
    email: 'test_user05@gmail.com',
    password: 'e12345'
  }
];

const seedUsers = () => User.bulkCreate(userdata, {individualHooks: true});

module.exports = seedUsers;
