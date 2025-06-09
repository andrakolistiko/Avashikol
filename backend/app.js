const express = require('express');
const dotenv = require('dotenv');
const { initDB } = require('./bd/BD');
const cors = require('cors');
const bodyParser = require('body-parser');
const passport = require('passport');
const session = require('express-session');
const GitHubStrategy = require('passport-github2').Strategy;
const GoogleStrategy = require('passport-google-oauth20').Strategy;


//just for changes
const app = express();
const port = process.env.PORT || 8080;

dotenv.config();

/* app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers',
        'Origin, X-Requested-With, Content-Type, Accept, Z-Key, Authorization'
    );
    next();
});
app.use(cors({ methods: ['GET', 'POST', 'PUT', 'DELETE', 'UPDATE', 'PATCH'] }));
app.use(cors({ origin: 'http://localhost:4200',credentials: true }));
 */
app.use(cors({
  origin: 'http://localhost:4200', // URL del frontend Angular
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'OPTIONS'], 
}));

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));


app.use(session({
    secret: 'secret',
    resave: false,
    saveUninitialized: true,
    cookie: {
        secure: false,
        sameSite: 'lax'
    }
}));
app.use(passport.initialize());
app.use(passport.session());
//estrategia de github 
passport.use(new GitHubStrategy({
    clientID: process.env.GITHUB_CLIENT_ID,
    clientSecret: process.env.GITHUB_CLIENT_SECRET,
    callbackURL: process.env.CALLBACK_URL_GITHUB
},
    function (accessToken, refreshToken, profile, done) {
        return done(null, profile);
    }
));
//estrategia de google
passport.use(new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: process.env.CALLBACK_URL_GOOGLE
},
    (accessToken, refreshToken, profile, done) => {
        return done(null, profile);
    }
));
//serilizacion 
passport.serializeUser((user, done) => {
    done(null, user);
});
passport.deserializeUser((user, done) => {
    done(null, user);
});

//ruta de estado de sesion
app.get('/', (req, res) => { res.send(req.session.user !== undefined ? `Logged in as: ${req.session.user.displayName}` : 'Logged out') });

initDB((err, database) => {
    if (err) {
        console.error('Error connecting to the database:', err);
        return;
    }
});

app.use('/', require('./routes'));

app.listen(port, () => { console.log(`Running on port: ${port}`) });