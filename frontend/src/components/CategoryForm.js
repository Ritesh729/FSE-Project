import React, { useState } from 'react';

function CategoryForm({ onAdd }) {
  const [formData, setFormData] = useState({
    category_name: '',
    category_desc: '',
    created_by: '',
    category_image: null
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData({
      ...formData,
      [name]: files ? files[0] : value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData();
    for (let key in formData) {
      data.append(key, formData[key]);
    }

    const res = await fetch('http://localhost:5000/api/categories', {
      method: 'POST',
      body: data
    });
    const newCat = await res.json();
    onAdd(newCat);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="category_name" placeholder="Category Name" onChange={handleChange} required />
      <input name="category_desc" placeholder="Description" onChange={handleChange} required />
      <input name="created_by" placeholder="Created By" onChange={handleChange} required />
      <input type="file" name="category_image" onChange={handleChange} required />
      <button type="submit">Add Category</button>
    </form>
  );
}

export default CategoryForm;
