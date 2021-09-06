const express = require('express');
const morgan = require('morgan');
const app = express();
const path = require('path');
var methodOverride = require('method-override') // thằng middleware sẽ nhận phương thức là post nhưng nó sẽ xử lí để override lại là put
    // override with the X-HTTP-Method-Override header in the request
const SortMiddleware = require('./app/middlewares/SortMiddleware')
app.use(methodOverride('_method'))

const exphbs = require('express-handlebars');
const port = 3000;

const route = require('./routes'); //index.js sẽ được tự động nạp vào

//connect to database server
const db = require('./config/db')
db.connect()

//middleware excecute for data's form from client to server
app.use(
    express.urlencoded({
        extended: true,
    }),
);

//sent code javascript to server
app.use(express.json());


app.use(SortMiddleware); //custome middleware

//lí do vì sao khi mở trình duyệt không cần gõ public là vì:
//bản thân thằng localhost:3000/img/f8_text_logo.png = public/img/f8_text_logo.png
app.use(express.static(path.join(__dirname, 'public')))

//HTTP logger
app.use(morgan('combined'));

//template engine
app.engine('handlebars', exphbs({
    helpers: {
        sum: (a, b) => a + b,
        sortable: (field, sort) => {
            const sortType = field === sort.column ? sort.type : 'default';
            const icons = {
                default: 'oi oi-elevator',
                asc: 'oi oi-sort-ascending',
                desc: 'oi oi-sort-descending'
            }

            const types = {
                default: 'desc',
                asc: 'desc',
                desc: 'asc'
            }

            const icon = icons[sortType];
            const type = types[sortType];
            return `<a href="?_sort&column=${field}&type=${type}"><span class="${icon}"></span></a>` //tra về trực tiếp cho giao diện, gọi là chống tấn công xss, đoạn mã trên sẽ  được convert sang kí tự 
        }
    }
}));

app.set('view engine', 'handlebars');

app.set('views', path.join(__dirname, 'resources', 'views'))

//route init
route(app)

app.listen(port, () => console.log(`App listening at https://localhost:${port}`))