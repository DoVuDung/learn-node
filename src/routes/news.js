const express = require('express');
const router = express.Router();

const newsControllers = require('../app/controllers/NewsController');
//newscontroller.index

router.get('/:slug', newsControllers.show); //đảm bảo thằng này phải match trước khi xuống dưới
router.get('/', newsControllers.index);

module.exports = router;
