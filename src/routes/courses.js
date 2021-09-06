//làm trang chi tiết khóa học
const express = require('express');
const router = express.Router();

//mongoose slug generator
const slug = require('mongoose-slug-generator');
const mongoose = require('mongoose');
mongoose.plugin(slug);


const courseControllers = require('../app/controllers/CoursesController');
//coursecontroller.index
router.get('/create', courseControllers.create);
router.post('/store', courseControllers.store);
router.post('/handle-form-actions', courseControllers.handleFormActions);
router.get('/:id/edit', courseControllers.edit);
router.put('/:id', courseControllers.update);
router.patch('/:id/restore', courseControllers.restore);
router.delete('/:id', courseControllers.delete);
router.delete('/:id/force', courseControllers.forceDelete);
router.get('/:slug', courseControllers.show); //đảm bảo thằng này phải match trước khi xuống dưới
//router.get('/', courseControllers.index);

module.exports = router;