//import Course
const Course = require('../models/Course')
//import mongoose
const {multipleMongooseToObject} = require('../../util/mongoose') //lấy tất cả nhưng gì có trong multi đó
//class đặt trùng tên
class SitesController {
    //GET /home
    index(req, res, next) { //define by callback
        // Course.find({}, function(err,courses){
        //     if(!err) res.json(courses)
        //     return
        //     next(err)
            
        // })
        //res.render('home');

          //promise
        Course.find({})
            .then(courses =>{
                //chỗ này để giải quyết lỗi lúc đầu (lỗi bảo mật, handlebars không cho phép truy cập trực tiếp vào như phiên bản lớn hơn 4.5.0)
                //courses = courses.map(course => course.toObject()) //xử lí chuyên cho handlebars
                res.render('home',{courses: multipleMongooseToObject(courses)})
            }) //enhanced object literals es6
            .catch(next)
    }

  
    //[GET] /news/:slug
    show(req, res) {
        res.send('NEWS DETAILS');
    }
}
//tạo ra một đối tượng và xuất ra ngoài class trên
//đồng thời khởi tạo luôn
module.exports = new SitesController();
