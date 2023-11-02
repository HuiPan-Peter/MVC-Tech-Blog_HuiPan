const { Post } = require('../models');

const postdata = [
  {
    title: 'JavaScript Expert: available 2023-11-04 from 08:00AM till 10:00AM.',
    post_text: '8 years programming exprience on front-end, have two hours expertise available to share online. From 08:00AM to 10:00AM at 2023-11-04 Saturday Morning. If you interested please contact me by email: peterpan@gmail.com',
    user_id: 10
  },
  {
    title: 'CSS & Tailwind Expert: available 2023-11-05 from 10:00AM till 11:30AM.',
    post_text: '10 years programming exprience on front-end, have 1.5 hours expertise available to share online. From 10:00AM to 11:30AM at 2023-11-04 Sunday Morning. If you interested please contact me by email: user2@gmail.com',
    user_id: 8
  },
  {
    title: 'Database Expert: available 2023-11-05 from 02:00PM till 04:00PM.',
    post_text: '15 years programming exprience on back-end, have 2 hours expertise within MySQL available to share online. From 02:00PM to 04:0PM at 2023-11-05 Sunday Afternoon. If you interested please contact me by email: user3@gmail.com',
    user_id: 1
  },
  {
    title: 'TEST Expert: available 2023-11-05 from 02:00PM till 04:00PM.',
    post_text: '2 years software-testing exprience, have 2 hours expertise with ESLint & Prettier available to share online. From 02:00PM to 04:0PM at 2023-11-05 Sunday Afternoon. If you interested please contact me by email: user4@gmail.com',
    user_id: 4
  },
  {
    title: 'JavaScript Expert: available 2023-11-04 from 08:00AM till 10:00AM.',
    post_text: '8 years programming exprience on front-end, have two hours expertise available to share online. From 08:00AM to 10:00AM at 2023-11-04 Saturday Morning. If you interested please contact me by email: user5@gmail.com',
    user_id: 7
  },
  {
    title: 'HTML & CSS Expert: available 2023-11-05 from 10:00AM till 11:30AM.',
    post_text: '5 years programming exprience on front-end, have 1.5 hours expertise available to share online. From 10:00AM to 11:30AM at 2023-11-04 Sunday Morning. If you interested please contact me by email: user6@gmail.com',
    user_id: 4
  },
  {
    title: 'HTML & CSS Expert: available 2023-11-05 from 10:00AM till 11:30AM.',
    post_text: '5 years programming exprience on front-end, have 1.5 hours expertise available to share online. From 10:00AM to 11:30AM at 2023-11-04 Sunday Morning. If you interested please contact me by email: user6@gmail.com',
    user_id: 1
  },
  {
    title: 'JavaScript Expert: available 2023-11-04 from 08:00AM till 10:00AM.',
    post_text: '8 years programming exprience on front-end, have two hours expertise available to share online. From 08:00AM to 10:00AM at 2023-11-04 Saturday Morning. If you interested please contact me by email: user5@gmail.com',
    user_id: 1
  },
  {
    title: 'JavaScript Expert: available 2023-11-04 from 08:00AM till 10:00AM.',
    post_text: '8 years programming exprience on front-end, have two hours expertise available to share online. From 08:00AM to 10:00AM at 2023-11-04 Saturday Morning. If you interested please contact me by email: user5@gmail.com',
    user_id: 9
  },
  {
    title: 'JavaScript Expert: available 2023-11-04 from 08:00AM till 10:00AM.',
    post_text: '8 years programming exprience on front-end, have two hours expertise available to share online. From 08:00AM to 10:00AM at 2023-11-04 Saturday Morning. If you interested please contact me by email: user5@gmail.com',
    user_id: 5
  },
  {
    title: 'JavaScript Expert: available 2023-11-04 from 08:00AM till 10:00AM.',
    post_text: '8 years programming exprience on front-end, have two hours expertise available to share online. From 08:00AM to 10:00AM at 2023-11-04 Saturday Morning. If you interested please contact me by email: user5@gmail.com',
    user_id: 3
  },
  {
    title: 'JavaScript Expert: available 2023-11-04 from 08:00AM till 10:00AM.',
    post_text: '8 years programming exprience on front-end, have two hours expertise available to share online. From 08:00AM to 10:00AM at 2023-11-04 Saturday Morning. If you interested please contact me by email: user5@gmail.com',
    user_id: 10
  },
  {
    title: 'JavaScript Expert: available 2023-11-04 from 08:00AM till 10:00AM.',
    post_text: '8 years programming exprience on front-end, have two hours expertise available to share online. From 08:00AM to 10:00AM at 2023-11-04 Saturday Morning. If you interested please contact me by email: user5@gmail.com',
    user_id: 8
  },
  {
    title: 'JavaScript Expert: available 2023-11-04 from 08:00AM till 10:00AM.',
    post_text: '8 years programming exprience on front-end, have two hours expertise available to share online. From 08:00AM to 10:00AM at 2023-11-04 Saturday Morning. If you interested please contact me by email: user5@gmail.com',
    user_id: 3
  },
  {
    title: 'JavaScript Expert: available 2023-11-04 from 08:00AM till 10:00AM.',
    post_text: '8 years programming exprience on front-end, have two hours expertise available to share online. From 08:00AM to 10:00AM at 2023-11-04 Saturday Morning. If you interested please contact me by email: user5@gmail.com',
    user_id: 3
  },
  {
    title: 'JavaScript Expert: available 2023-11-04 from 08:00AM till 10:00AM.',
    post_text: '8 years programming exprience on front-end, have two hours expertise available to share online. From 08:00AM to 10:00AM at 2023-11-04 Saturday Morning. If you interested please contact me by email: user5@gmail.com',
    user_id: 7
  },
  {
    title: 'JavaScript Expert: available 2023-11-04 from 08:00AM till 10:00AM.',
    post_text: '8 years programming exprience on front-end, have two hours expertise available to share online. From 08:00AM to 10:00AM at 2023-11-04 Saturday Morning. If you interested please contact me by email: user5@gmail.com',
    user_id: 6
  },
  {
    title: 'JavaScript Expert: available 2023-11-04 from 08:00AM till 10:00AM.',
    post_text: '8 years programming exprience on front-end, have two hours expertise available to share online. From 08:00AM to 10:00AM at 2023-11-04 Saturday Morning. If you interested please contact me by email: user5@gmail.com',
    user_id: 4
  },
  {
    title: 'JavaScript Expert: available 2023-11-04 from 08:00AM till 10:00AM.',
    post_text: '8 years programming exprience on front-end, have two hours expertise available to share online. From 08:00AM to 10:00AM at 2023-11-04 Saturday Morning. If you interested please contact me by email: user5@gmail.com',
    user_id: 6
  },
  {
    title: 'JavaScript Expert: available 2023-11-04 from 08:00AM till 10:00AM.',
    post_text: '8 years programming exprience on front-end, have two hours expertise available to share online. From 08:00AM to 10:00AM at 2023-11-04 Saturday Morning. If you interested please contact me by email: user5@gmail.com',
    user_id: 7
  }
];

const seedPosts = () => Post.bulkCreate(postdata);

module.exports = seedPosts;
