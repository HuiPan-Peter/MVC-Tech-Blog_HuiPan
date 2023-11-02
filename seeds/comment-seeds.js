const { Comment } = require('../models');

const commentdata = [
  {
    comment_text: 'User01: I am interested and would like to contact you for further details.',
    user_id: 1,
    post_id: 1
  },
  {
    comment_text: 'User01: I am interested and would like to contact you for further details.',
    user_id: 1,
    post_id: 2
  },
  {
    comment_text: 'User01: I am interested and would like to contact you for further details.',
    user_id: 1,
    post_id: 3
  },
  {
    comment_text: 'User02: I am interested and would like to contact you for further details.',
    user_id: 2,
    post_id: 1
  },
  {
    comment_text: 'User03: I am interested and would like to contact you for further details.',
    user_id: 3,
    post_id: 4
  },
  {
    comment_text: 'User03: I am interested and would like to contact you for further details.',
    user_id: 3,
    post_id: 2
  },
  {
    comment_text: 'User04: I am interested and would like to contact you for further details.',
    user_id: 4,
    post_id: 1
  },
  {
    comment_text: 'User05: I am interested and would like to contact you for further details.',
    user_id: 5,
    post_id: 1
  },
  {
    comment_text: 'User05: I am interested and would like to contact you for further details.',
    user_id: 5,
    post_id: 5
  },
  {
    comment_text: 'User05: I am interested and would like to contact you for further details.',
    user_id: 5,
    post_id: 3
  }
];

const seedComments = () => Comment.bulkCreate(commentdata);

module.exports = seedComments;
