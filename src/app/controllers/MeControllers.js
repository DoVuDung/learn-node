//import Course
const Course = require('../models/Course')
    //import mongoose
const { multipleMongooseToObject } = require('../../util/mongoose') //lấy tất cả nhưng gì có trong multi đó
    //class đặt trùng tên
class MeController {
    //[get] /me/stored/courses
    storedCourses(req, res, next) {

            let courseQuery = Course.find({});
            // res.json(
            //     res.locals._sort //http://127.0.0.1:3000/me/stored/courses?_sort&column=name&type=asc check
            // )


            if (req.query.hasOwnProperty('_sort')) { //kiem tra key co ton tai trong object nao do hay khong
                // res.json({ message: "successfully" })
                // return
                courseQuery = courseQuery.sort({
                    [req.query.colum]: req.query.type
                        // name: "desc"

                });
            }
            Promise.all([courseQuery, Course.countDocumentsDeleted()]) //choc vao database lay data
                .then(([courses, deletedCount]) =>
                    res.render('./me/stored-course', {
                        deletedCount,
                        courses: multipleMongooseToObject(courses),
                    })
                )
                .catch(next)
        }
        //[get] /me/trash/courses  
    trashCourses(req, res, next) {
        Course.findDeleted({})
            .then(courses => res.render('./me/trash-course', { courses: multipleMongooseToObject(courses) }))
            .catch(next)
    }
}
//tạo ra một đối tượng và xuất ra ngoài class trên
//đồng thời khởi tạo luôn
module.exports = new MeController();