require('dotenv').config();
const   express = require('express'),
        massive = require('massive'),
        session = require('express-session'),
        ctrl = require('./controller'),
        mainctrl = require('./mainctrl'),
        {SERVER_PORT, CONNECTION_STRING, SESSION_SECRET} = process.env,
        port = SERVER_PORT,
        app = express();



app.use(express.json());

app.use(session({
    resave: false,
    saveUninitialized: true,
    secret: SESSION_SECRET,
    cookie: {maxAge: 1000 * 60 * 60 *24 * 365}
    
}))

massive({
    connectionString: CONNECTION_STRING,
    ssl: {rejectUnauthorized: false}
}).then(db => {
    app.set('db', db);
    console.log('db connected');
})

app.post('/auth/register', ctrl.register);
app.post('/auth/login', ctrl.login);
app.post('/auth/logout', ctrl.logout);

app.post('/api/post/:userid', mainctrl.createPost);
app.get('/api/post/:postid', mainctrl.deletePost);
app.get('/api/posts/:userid', mainctrl.getUserPosts);



app.listen(port, () => console.log(`listening on port ${port}`))



