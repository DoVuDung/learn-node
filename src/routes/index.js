//import các router vào
const newsRouter = require('./news'); 
const coursesRouter = require('./courses');
const siteRouter = require('./site');
const searchRouter = require('./search');
const meRouter = require('./me');

function route(app) {
    //console.log(__dirname)
    //route
    //app.get('/home', (req, res) => res.render('home'))
    //route
    //app.get('/news', (req, res) => res.render('news'))
    app.use('/news', newsRouter); //trang news
    app.use('/search', searchRouter); //trang tìm kiếm
    app.use('/courses', coursesRouter); //trang khóa học
    app.use('/me', meRouter); //my course
    app.use('/', siteRouter); //trang chủ

    //route
    // app.get('/search', (req, res) => {

    //     res.render('search');
    // })

    //route
    //action  ---> dispatcher ---> function handler
    app.post('/search', (req, res) => {
        console.log(req.params);
        console.log(req.body); //use it for data form
        res.send('');
    });
}

module.exports = route;
