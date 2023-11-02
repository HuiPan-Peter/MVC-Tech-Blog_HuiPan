const sequelize = require('../config/connection');
const { User, Post } = require('../models');

const userdata = [
  {
        "username": "Hui Pan",
        "email": "guaranstone@gmail.com",
        "password": "@Ab12345",
        "isAdmin": "true"
    },
    {
        "username": "Test User01",
        "email": "test_user01@gmail.com",
        "password": "a12345",
        "isAdmin": "false"
    },
    {
        "username": "Test User02",
        "email": "test_user02@gmail.com",
        "password": "b12345",
        "isAdmin": "false"
    },
    {
        "username": "Test User03",
        "email": "test_user03@gmail.com",
        "password": "c12345",
        "isAdmin": "false"
    }
];

const seedUsers = () => User.bulkCreate(userdata, {individualHooks: true});

module.exports = seedUsers;
