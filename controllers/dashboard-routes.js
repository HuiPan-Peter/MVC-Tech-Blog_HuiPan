const router = require("express").Router();
const { Post, User } = require("../models");
const withAuth = require("../utils/auth");

router.get("/", withAuth, async (req, res) => {
    try {
        const postData = await Post.findAll({
            include: [
                {
                    model: User,
                    attributes: ["id", "username"],
                },
            ],
            order: [["createdAt", "DESC"]],
        });

        const posts = postData.map((post) => post.get({ plain: true }));
        res.render("dashboard", {
            loggedIn: req.session.loggedIn,
            loggedInUserData: req.session.loggedInUserData,
            posts: posts,
        });
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;
// const router = require('express').Router();
// const sequelize = require('../config/connection');
// const { Post, User, Comment } = require('../models');
// const withAuth = require('../utils/auth');

// // get all posts for dashboard
// router.get('/', withAuth, (req, res) => {
//   Post.findAll({
//     where: {
//       user_id: req.session.user_id
//     },
//     attributes: [
//       'id',
//       'post_text',
//       'title',
//       'created_at'
//     ],
//     include: [
//       {
//         model: Comment,
//         attributes: ['id', 'comment_text', 'post_id', 'user_id', 'created_at'],
//         include: {
//           model: User,
//           attributes: ['username']
//         }
//       },
//       {
//         model: User,
//         attributes: ['username']
//       }
//     ]
//   })
//     .then(dbPostData => {
//       const posts = dbPostData.map(post => post.get({ plain: true }));
//       res.render('dashboard', { posts, loggedIn: true, username: req.session.username });
//     })
//     .catch(err => {
//       console.log(err);
//       res.status(500).json(err);
//     });
// });

// router.get('/edit/:id', withAuth, (req, res) => {
//   Post.findByPk(req.params.id, {
//     attributes: [
//       'id',
//       'post_text',
//       'title',
//       'created_at'
//     ],
//     include: [
//       {
//         model: Comment,
//         attributes: ['id', 'comment_text', 'post_id', 'user_id', 'created_at'],
//         include: {
//           model: User,
//           attributes: ['username']
//         }
//       },
//       {
//         model: User,
//         attributes: ['username']
//       }
//     ]
//   })
//     .then(dbPostData => {
//       if (dbPostData) {
//         const post = dbPostData.get({ plain: true });
        
//         res.render('edit-post', {
//           post,
//           loggedIn: true,
//           username: req.session.username
//         });
//       } else {
//         res.status(404).end();
//       }
//     })
//     .catch(err => {
//       res.status(500).json(err);
//     });
// });

// module.exports = router;
