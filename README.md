# MVC-Tech-Blog_HuiPan
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Table of Contents

1. [Description](#userStory)

2. [Installation](#installation)

3. [Usage](#usage)

4. [Contributions](#contributions)

5. [Questions](#questions)

## Description

This is a CMS-style blog site, where developers can publish their Tech-blog and comment on other developers’ posts.

```
User Story:
AS A developer who writes about tech
I WANT a CMS-style blog site
SO THAT I can publish articles, blog posts, and my thoughts and opinions
```

```
Acceptance Criteria:
GIVEN a CMS-style blog site
WHEN I visit the site for the first time
THEN I am presented with the homepage, which includes existing blog posts if any have been posted; navigation links for the homepage and the dashboard; and the option to log in
WHEN I click on the homepage option
THEN I am taken to the homepage
WHEN I click on any other links in the navigation
THEN I am prompted to either sign up or sign in
WHEN I choose to sign up
THEN I am prompted to create a username and password
WHEN I click on the sign-up button
THEN my user credentials are saved and I am logged into the site
WHEN I revisit the site at a later time and choose to sign in
THEN I am prompted to enter my username and password
WHEN I am signed in to the site
THEN I see navigation links for the homepage, the dashboard, and the option to log out
WHEN I click on the homepage option in the navigation
THEN I am taken to the homepage and presented with existing blog posts that include the post title and the date created
WHEN I click on an existing blog post
THEN I am presented with the post title, contents, post creator’s username, and date created for that post and have the option to leave a comment
WHEN I enter a comment and click on the submit button while signed in
THEN the comment is saved and the post is updated to display the comment, the comment creator’s username, and the date created
WHEN I click on the dashboard option in the navigation
THEN I am taken to the dashboard and presented with any blog posts I have already created and the option to add a new blog post
WHEN I click on the button to add a new blog post
THEN I am prompted to enter both a title and contents for my blog post
WHEN I click on the button to create a new blog post
THEN the title and contents of my post are saved and I am taken back to an updated dashboard with my new blog post
WHEN I click on one of my existing posts in the dashboard
THEN I am able to delete or update my post and taken back to an updated dashboard
WHEN I click on the logout option in the navigation
THEN I am signed out of the site
WHEN I am idle on the site for more than a set time
THEN I am able to view posts and comments but I am prompted to log in again before I can add, update, or delete posts
```

## Installation

- 1.Download GitHub repository: [Github Repository]https://github.com/HuiPan-Peter/MVC-Tech-Blog_HuiPan
- 2.Open folder with VSCode to check "dependencies": {
  "bcrypt": "^5.0.1",
  "connect-session-sequelize": "^7.1.1",
  "dotenv": "^8.2.0",
  "express": "^4.17.1",
  "express-handlebars": "^5.2.1",
  "express-session": "^1.17.1",
  "mysql2": "^2.2.5",
  "sequelize": "^6.5.1"
  };
- 3.Under node command-line run `npm i` to install dotenv, express, mysql2 and sequelize;

## Usage

- 1.Create a file in the root directory titled ".env" and assign your own "DB_NAME","DB_PW" and "DB_USER"
- 2.Under db directory, type "mysql -u root -p" in the terminal and enter your personal MySQL password. Next, type "source schema.sql" to create the tech_blog_db database with mock data.
- 3.Under root directory, run bash command `npm run seed` to invoke package.json {
  "seed": "node seeds/index.js"
  } to insert mock data into the tech_blog_db database;
- 4.Under root directory, run bash command `npm start` to start the application;
- 5.Existing user need email & password to login, and then create or edit your post;
- 6.Unregistered user need signup for a new account, and then can post a new blog, or edit;

---

## Walkthrough Video Demo and Screenshot of the Application

## [https://github.com/HuiPan-Peter/ORM_E-Commerce-Back-End_HuiPan/tree/main/videoDemo%26Screenshots](https://github.com/HuiPan-Peter/ORM_E-Commerce-Back-End_HuiPan/tree/main/videoDemo%26Screenshots)

## Contributions

https://github.com/HuiPan-Peter

## License

![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)

```
     https://opensource.org/licenses/MIT

    Licensed under the MIT License

    Copyright u00A9 [2023] [Hui Pan]
    Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the "Software"),
to deal in the Software without restriction, including without limitation the
rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is furnished
to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED,
INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR
PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE
FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE,
ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE
```

## Questions

If you have any questions about this application, Contact Me:

```
Github: https://github.com/HuiPan-Peter

Email:  guaranstone@gmail.com
```
