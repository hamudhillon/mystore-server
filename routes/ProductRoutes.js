const express = require('express');
const path = require('path');
const fs = require('fs');
const multer = require('multer');
const { allProducts, CreateProduct, DeleteProduct } = require('../controllers/productController');

const router = express.Router();

// Ensure upload folder exists
const uploadDir = './public/uploads';
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir, { recursive: true });
}

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, uploadDir);
  },
  filename: function (req, file, cb) {
    cb(null, req.body.name + '-' + Date.now() + path.extname(file.originalname));
  },
});

const upload = multer({ storage: storage });

router.get('/', allProducts);
router.post('/', upload.single('images'), CreateProduct);
router.delete('/:id', DeleteProduct);

module.exports = router;
