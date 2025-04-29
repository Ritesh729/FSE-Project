

// export default AddCategory;
import React, { useState } from "react";
import { useNavigate } from 'react-router-dom'; 
import './styles/AddCategory.css';
import './styles/Sidebar.css';

const AddCategory = () => {
  const [name, setName] = useState("");
  const [desc, setDesc] = useState(""); 
  const [image, setImage] = useState(null); 

  
  const createdBy = "admin"; 
  const navigate = useNavigate(); 

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("category_name", name);
    formData.append("category_desc", desc); 
    formData.append("created_by", createdBy); 
    formData.append("category_image", image); 

    try {
      const response = await fetch("http://localhost:5000/api/categories", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        alert("Category added successfully");

        
        setName("");
        setDesc(""); 
        setImage(null); 

        
        document.getElementById("categoryImage").value = null;

        
        navigate('/admin-dashboard'); 
      } else {
        alert("Failed to add category");
      }
    } catch (error) {
      alert("An error occurred while adding the category");
      console.error(error);
    }
  };

  return (
    <div className="add-category-container">
      <h2>Add New Category</h2>
      <form onSubmit={handleSubmit} encType="multipart/form-data">
        <input
          type="text"
          placeholder="Category Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Category Description"
          value={desc}
          onChange={(e) => setDesc(e.target.value)} 
          required
        />
        <input
          type="text"
          value="Admin" 
          placeholder="Created By (Cannot be edited)"
          disabled 
        />
        <input
          id="categoryImage"
          type="file"
          accept="image/*"
          onChange={(e) => setImage(e.target.files[0])}
          required
        />
        <button type="submit">Add Category</button>
      </form>
    </div>
  );
};

export default AddCategory;
