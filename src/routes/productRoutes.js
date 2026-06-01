const express = require('express');
const {
  getProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
} = require('../controllers/productController');
const { protect } = require('../middleware/auth');
const { validateProduct } = require('../middleware/validate');

const router = express.Router();

router.get('/', getProducts);
router.get('/:id', getProductById);
router.post('/', protect, validateProduct, createProduct);
router.patch('/:id', protect, validateProduct, updateProduct);
router.delete('/:id', protect, deleteProduct);

module.exports = router;
