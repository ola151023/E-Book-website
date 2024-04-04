import React, { useState } from 'react';
import { TextField, Button } from '@mui/material';
import CategorySelectionDropdown from './CategorySelectionDropdown'
import axios from 'axios';
import {  json, useNavigate } from 'react-router-dom';

const BookForm = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [category, setCategory] = useState('');
  const [description, setDescription] = useState('');
  const [coverImage, setCoverImage] = useState(null);
  const [pdfFile, setPdfFile] = useState(null);
  const [loading, setLoading] = useState(false); // Define setLoading state
  const [error, setError] = useState(null); // Define error state
  // const navigation = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true); // Set loading to true before API call


    // Make API call to store book data
    const formData = new FormData();
    formData.append('title', title);
    formData.append('author', author);
    formData.append('category_id', category); // Include the selected category ID
    formData.append('description', description);
    formData.append('cover_image', coverImage);
    formData.append('pdf_file', pdfFile);
// Convert FormData to a plain object for logging
const formDataObject = {};
for (const [key, value] of formData.entries()) {
    formDataObject[key] = value;
}

console.log(formDataObject);

 
  try {
    const access_token = JSON.parse(localStorage.getItem('access_token'))
    const response = await axios.post(
      'http://localhost:8000/api/books',
      formData,
      {
        headers: {
          Authorization: `Bearer ${access_token}`
        }
      }
      );
    
// Redirect to books  page upon successful login
    navigation.navigate('/show-books')
  
  } catch (err) {
    console.log(err)
    setError('Invalid entries. Please try again.');
  } finally {
    setLoading(false);
  }
};
const handleCategoryChange = (selectedCategoryId) => {
  setCategory(selectedCategoryId);
};
  

  return (
    <form onSubmit={handleSubmit}>
      <TextField
        label="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        fullWidth
        required
      />
      <TextField
        label="Author"
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
        fullWidth
        required
      />
        <TextField
        label="description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        fullWidth
        required
      />
       <CategorySelectionDropdown onSelectCategory={setCategory} /> {/* Integrate CategorySelectionDropdown */}
   
  
      <label>set Cover Image</label>
      <input type="file" onChange={(e) => setCoverImage(e.target.files[0])} />
      <label>set PDF FILE</label>
      <input type="file" onChange={(e) => setPdfFile(e.target.files[0])} />
      <Button type="submit">Submit</Button>{/* Disable button while loading */}
      {error && <p>{error}</p>} {/* Display error message if exists */}
    </form>
  );
};

export default BookForm;
