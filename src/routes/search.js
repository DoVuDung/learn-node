const express = require('express');
const router = express.Router();

const newsControllers = require('../app/controllers/SearchController');
//newscontroller.index

router.use('/:slug', newsControllers.show); //đảm bảo thằng này phải match trước khi xuống dưới
router.use('/', newsControllers.index);

module.exports = router;
