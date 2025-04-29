 import React, { useEffect, useState } from 'react';
import './styles/Category.css';

const Category = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/api/categories')
      .then((res) => res.json())
      .then((data) => setCategories(data))
      .catch((err) => console.error('Error fetching categories:', err));
  }, []);

  return (
    <div className="category-wrapper">
      <h2 className="category-heading">Shop by Category</h2>
      <div className="category-grid">
        {categories.map((cat) => (
          <div className="category-card" key={cat.id}>
            <img
              src={`http://localhost:5000/${cat.category_image}`}
              alt={cat.category_name}
              className="category-image"
            />
            
          </div>
        ))}
      </div>
    </div>
  );
};

export default Category;
