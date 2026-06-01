const notFound = (req, res, next) => {
  res.status(404).json({
    success: false,
    message: `Route not found: ${req.originalUrl}`,
  });
};

const errorHandler = (err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || 'Internal server error';

  if (err.name === 'CastError') {
    return res.status(400).json({
      success: false,
      message: 'Invalid resource id',
    });
  }

  if (err.code === 11000) {
    return res.status(400).json({
      success: false,
      message: 'Duplicate field value provided',
    });
  }

  if (err.name === 'ValidationError') {
    return res.status(400).json({
      success: false,
      message,
    });
  }

  return res.status(statusCode).json({
    success: false,
    message,
  });
};

module.exports = { notFound, errorHandler };
