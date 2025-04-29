exports.isAdmin = (req, res, next) => {
    const { role } = req.body;
    if (role !== 'admin') {
      return res.status(403).json({ message: 'Access denied. Admins only.' });
    }
    next();
  };
  