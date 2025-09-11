export const handleError = (res, error, status = 500) => {
  return res.status(status).json({
    message: error.message || "An unexpected error occurred",
    success: false,
  });
};
