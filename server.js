// Imports/ requires
const path = require('path');
const express = require('express');
const session = require('express-session');
const exphbs = require('express-handlebars');
const routes = require('./controllers');
const helpers = require('./util/helpers');
const hbs = exphbs.create({ helpers });
// initializes the models in the database
const models = require('./models');
// creates teh connection to the DB
const sequelize = require('./config/connection');
// creates a session table in the DB
const SequelizeStore = require('connect-session-sequelize')(session.Store);

const app = express();
// if there is a port listed in the dotenv use that else use port 3001
const PORT = process.env.PORT || 3001;
// session object used to define the session that is created
const sess = {
  secret: 'Super secret secret',
  cookie: {},
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize,
  }),
};
// initializes the session table
app.use(session(sess));
// connecting handlebars to express
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(routes);
// force: true will reset the DB (empty it out and recreate the table)
sequelize.sync({ force: false }).then(() => {
  // turns on the server at the specified Port the console logs the local url for the client side.
  app.listen(PORT, () =>
    console.log('Now listening on http://localhost:' + PORT)
  );
});
