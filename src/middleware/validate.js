const validateRegister = (req, res, next) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    return res.status(400).json({
      success: false,
      message: 'Name, email, and password are required',
    });
  }

  if (password.length < 6) {
    return res.status(400).json({
      success: false,
      message: 'Password must be at least 6 characters',
    });
  }

  next();
};

const validateLogin = (req, res, next) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({
      success: false,
      message: 'Email and password are required',
    });
  }

  next();
};

const validateProduct = (req, res, next) => {
  const { name, description, price, category, stock } = req.body;

  const isCreating = req.method === 'POST';

  if (isCreating) {
    if (!name || !description || price === undefined || !category || stock === undefined) {
      return res.status(400).json({
        success: false,
        message: 'Name, description, price, category, and stock are required',
      });
    }
  }

  if (name !== undefined && String(name).trim().length < 2) {
    return res.status(400).json({
      success: false,
      message: 'Product name must be at least 2 characters',
    });
  }

  if (description !== undefined && String(description).trim().length < 10) {
    return res.status(400).json({
      success: false,
      message: 'Description must be at least 10 characters',
    });
  }

  if (price !== undefined && Number(price) < 0) {
    return res.status(400).json({
      success: false,
      message: 'Price cannot be negative',
    });
  }

  if (stock !== undefined && Number(stock) < 0) {
    return res.status(400).json({
      success: false,
      message: 'Stock cannot be negative',
    });
  }

  next();
};

module.exports = {
  validateRegister,
  validateLogin,
  validateProduct,
};