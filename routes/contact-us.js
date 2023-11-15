const express =require('express');
const router = express.Router();
const path = require('path');
const rootDir = require('../util/path');
const productsController = require('../controllers/products');

router.get('/contact-us',productsController.getContact);
router.post('/contact-us',productsController.postContact );
module.exports = router;