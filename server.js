const path = require('path');
const express = require('express');
const session = require('express-session');
const exphbs = require('express-handlebars');
const helpers = require('./utils/helpers');

const app = express();
const PORT = process.env.PORT || 3001;

const sequelize = require('./config/connection');
const SequelizeStore = require('connect-session-sequelize')(session.Store);

const sess = {
  secret: 'Super secret secret',
  cookie: {
    // session expires in two hours
    expires: 7200000
  },
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize
  })
};
// Set up sessions
app.use(session(sess));
// Incorporate the custom helper methods: ./utils/helpers.js
const hbs = exphbs.create({ helpers });

//setup handlebars with express
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

//allow api to use json and url encoding
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

// Sets up the routes
app.use(require('./controllers/'));

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log(`Server listening on http://localhost:${PORT}`));
});
