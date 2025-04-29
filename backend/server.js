const express = require('express');
const cors = require('cors');
const path = require('path');
const authRoutes = require('./routes/authRoutes');
const dashboardRoutes = require('./routes/dashboard');
const adminLoginRoutes = require('./routes/admin');             
const adminFeatureRoutes = require('./routes/adminRoutes');     
const categoryRoutes = require('./routes/category');
const productRoutes = require('./routes/productRoutes');


const app = express();

app.use(cors());
app.use(express.json());
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// Routes
app.use('/api', authRoutes);                        // /api/login, /api/signup
app.use('/api', dashboardRoutes);                   // /api/dashboard
app.use('/api/admin', adminLoginRoutes);      // /api/admin-login (for admin login only)
app.use('/api/admin-features', adminFeatureRoutes);          // /api/admin/add-admin, /api/admin/reviews
app.use('/api/categories', categoryRoutes);         // /api/categories/...
app.use('/api/products', productRoutes);            // /api/products/...
//app.use("/api/categories", );


const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
