//import Course
const Course = require('../models/Course')
    //import mongoose
const { mongooseToObject } = require('../../util/mongoose') //lấy tất cả nhưng gì có trong multi đó

//class đặt trùng tên
class CoursesController {
    //GET /home
    // index(req, res, next) { //define by callback
    //     // Course.find({}, function(err,courses){
    //     //     if(!err) res.json(courses)
    //     //     return
    //     //     next(err)

    //     // })
    //     //res.render('home');

    //       //promise
    //     // Course.find({})
    //     //     // .then(courses =>{
    //     //     //     //chỗ này để giải quyết lỗi lúc đầu (lỗi bảo mật, handlebars không cho phép truy cập trực tiếp vào như phiên bản lớn hơn 4.5.0)
    //     //     //     //courses = courses.map(course => course.toObject()) //xử lí chuyên cho handlebars
    //     //     //     res.render('home',{courses: multipleMongooseToObject(courses)})
    //     //     // }) //enhanced object literals es6
    //     //     .catch(next)
    // }


    //[GET] /courses/:slug 
    //slug: là giá trị động nên chúng ta sẽ mô tả giá trị slug bằng biến params
    //test để kiểm tra xem có nhận về giá trị của slug hay không ?
    // show(req, res) {
    //     //slug chính là phần đuối của link hiển thị trên trình duyệt - phần bên show chính là slug
    //     console.log(`\t*********************${req.params.slug}*****************`) 
    //     res.send('COURSES DETAILS');
    // }

    //[GET] /courses/:slug
    show(req, res, next) {
            Course.findOne({ slug: req.params.slug })
                //then là trả về kết quả
                .then(course =>
                    res.render('courses/show', { course: mongooseToObject(course) }) //xử lí lỗi bảo mật của handlebars 
                )
                //đưa ra lỗi, nhưng next ở đây chính là một middleware
                .catch(next)
        }
        //[get] /courses/create
    create(req, res, next) {
            res.render('courses/create')
                // Course.findOne({slug: req.params.slug})
                // //then là trả về kết quả
                //     .then(course=>
                //         res.render('courses/show', {course: mongooseToObject(course)}) //xử lí lỗi bảo mật của handlebars 
                //     )
                //     //đưa ra lỗi, nhưng next ở đây chính là một middleware
                //     .catch(next)
        }
        //[post] /courses/store
    store(req, res, next) {
            //res.json(req.body)

            const formData = {...req.body }
                //console.log(req.body);
            formData.image = `https://img.youtube.com/vi/${req.body.videoId}/maxresdefault.jpg`
            req.body._id = 1
            const course = new Course(formData)
            course.save()
                //res.send('Course saved')
                .then(() => res.redirect('/'))
                .catch(err => {})
        }
        //[get] /course/:id/edit 
    edit(req, res, next) {
            console.log(req.body)

            Course.findById(req.params.id)
                .then(course => {

                    return res.render('courses/edit', {

                        course: mongooseToObject(course)

                    })
                }) //chỉ nhận giá trị đầu tiên của mảng
                .catch(next)

        }
        //GET, POST, PUT, PATCH, DELETE, OPTIONS, HEAD
        /**
         * GET: gửi dữ liệu lên server, trả lại dữ liệu cho client
         * POST: gửi dữ liệu lên server yêu cầu server lưu lại dữ liệu (tạo mới dữ liệu)
         * PUT: chỉnh sửa dữ liệu (replace)
         * PATCH: chỉnh sửa dữ liệu (sửa từng alias)
         * DELETE:
         * OPTIONS: sử dụng trong phương thức không cần page loads
         * HEAD:
         */

    //[PUT] /courses/:id/update
    update(req, res, next) {
            //res.json(req.body) test
            Course.updateOne({ _id: req.params.id }, req.body)
                .then(() => res.redirect('/me/stored/courses'))
                .catch(next)
        }
        //[DELETE] /course/:id/delete
    delete(req, res, next) {
            Course.delete({ _id: req.params.id })
                .then(() => res.redirect('back'))
                .catch(next)
        }
        //[PATCH] /course/:id/restore
    restore(req, res, next) {
            Course.restore({ _id: req.params.id })
                .then(() => res.redirect('back'))
                .catch(next)
        }
        //[DELETE] /course/:id/force

    forceDelete(req, res, next) {
        Course.deleteOne({ _id: req.params.id })
            .then(() => res.redirect('/me/stored/courses'))
            .catch(next)
    }

    //[POST] /course/handle-form-actions
    handleFormActions(req, res, next) {
        switch (req.body.action) {
            case 'delete':
                Course.delete({ _id: { $in: req.body.courseId } })
                    .then(() => res.redirect('back'))
                    .catch(next);
                break;
            default:
                res.json({ message: 'Action is invalid' });
        }
    }
}
//tạo ra một đối tượng và xuất ra ngoài class trên
//đồng thời khởi tạo luôn
module.exports = new CoursesController();