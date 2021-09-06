//làm trang chi tiết khóa học
const express = require('express');
const router = express.Router();

//mongoose slug generator
const slug = require('mongoose-slug-generator');
const mongoose = require('mongoose');
mongoose.plugin(slug);


const meControllers = require('../app/controllers/MeControllers');
//coursecontroller.index
// router.get('/create', courseControllers.create)
router.get('/stored/courses', meControllers.storedCourses)
// router.get('/:slug', courseControllers.show); //đảm bảo thằng này phải match trước khi xuống dưới
//router.get('/', courseControllers.index);
router.get('/trash/courses', meControllers.trashCourses)


module.exports = router;
