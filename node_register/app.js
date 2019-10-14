const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');
const FileStore = require('session-file-store')(session);
const cors = require('cors');
const {sequelize, account} = require('./database/connection');

const app = express();
app.use(cors('*'));

app.use(bodyParser.json());

app.use(express.json());



app.use('/css', express.static(__dirname + '/css'))
app.set('view engine', 'html')
app.set('views', __dirname+'/views')
app.engine('html', require('ejs').renderFile);

sequelize.sync();
app.listen(3001, () => {
    console.log("Express server has started on port 3001");
});


app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true,
    store: new FileStore()
}))


app.get('/', (req, res, next) => {
    console.log(req.session);
    if(!req.session.num){
        req.session.num = 1;
    } else {
        req.session.num = req.session.num + 1;
    }
    res.send(`Number : ${req.session.num}`);
});


app.post('/register', (req, res) => {
    console.log(req.body);
    res.send('회원가입 완료');
    account.create({
        username: req.body.username,
        password: req.body.pwd
    }).then(() => {
        console.log('성공');
    }).catch((err) => {
        console.log(err);
    });

    const a = sequelize.accounts.findOne({where: {username}});

    console.log(a)
});


