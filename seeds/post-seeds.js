const { Post } = require('../models');

const postdata = [
  {
    title: 'Front-end Technologies, A Detailed Guide',
    post_text: 'JavaScript. Front-end frameworks. Frameworks offer a platform for the best possible use of programming languages.',
    user_id: 1
  },
  {
    title: 'Why developers need career coaching',
    post_text: 'Take the growing demand for JavaScript. In 2018, reports Hackerrank , 73% of developers said they knew JavaScript.',
    user_id: 4
  },
  {
    title: 'Node.JS VS PHP, in a nutshell.',
    post_text: 'Node.js made it possible to use JavaScript on the back-end when it was introduced in 2009, bringing the rise of web applications with entirely JavaScript-powered.',
    user_id: 4
  },
  {
    title: 'When it comes to text editors, I feel like Goldilocks',
    post_text: 'Falling between two stalls I often find myself torn between the approaches of traditional and modal text editors. ',
    user_id: 2
  },
  {
    title: 'Simple settings for writing and converting markdown with Sublime Text',
    post_text: 'Prettify your markdown There are dedicated markdown packages, but if you write in Sublime, here are some very simple tweaks you can make to get a lovely centered column. ',
    user_id: 1
  },
  {
    title: 'Logitech MX Master 3/3s scroll wheel fix',
    post_text: 'You arrived here because you have a Logitech MX Master 3 mouse, and sometimes you try and scroll up and it just does not do anything.',
    user_id: 5
  },
  {
    title: 'Building a line graph with CSS clip-mask',
    post_text: 'This is not a substitute for d3 or chart.js. It is however, a surprisingly simple and effective way of creating a line graph. ',
    user_id: 3
  },
  {
    title: 'Neovim Power Tips: Volume 2',
    post_text: 'If you want to see the video version of this content, it is on my YouTube channel here.',
    user_id: 3
  },
  {
    title: 'How to animate along an SVG path at the same time the path animates?',
    post_text: 'I had to create something along these lines (pun intended) recently; a line that animates to nothing with "something" on the end; ',
    user_id: 3
  },
  {
    title: 'Getting the context of Web Components',
    post_text: 'The default nature of Web Components and one of their main selling points, is that they are closed off.  ',
    user_id: 4
  },
  {
    title: 'A CSS class-naming convention might still be your best choice',
    post_text: 'I am here to remind you that a naming convention for your CSS, even in 2022, with Cascade Layers, Web Components and more. ',
    user_id: 2
  }
];

const seedPosts = () => Post.bulkCreate(postdata);

module.exports = seedPosts;
