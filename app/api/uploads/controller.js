const uploadImage = async (req, res, next) => {
  try {
    console.log(req.file.filename);
    if (!req.file) {
      return res.status(403).json({
        message: "NO file uploaded",
      });
    }

    res.status(201).json({
      message: "Success upload image",
      data: { src: `/uploads/${req.file.filename}` },
    });
  } catch (err) {
    next(err);
  }
};

module.exports = { uploadImage };
