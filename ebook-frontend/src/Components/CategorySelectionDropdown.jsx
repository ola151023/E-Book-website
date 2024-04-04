import React, { useState } from 'react';
import { FormControl, InputLabel, Select, MenuItem } from '@mui/material';

const CategorySelectionDropdown = ({ onSelectCategory }) => {
  const [selectedCategory, setSelectedCategory] = useState('');

  // Dummy categories
  const dummyCategories = [
    { id: 1, name: 'Historical fiction' },
    { id: 2, name: 'Horror' },
    { id: 3, name: 'Adventure' },
    { id: 4, name: 'Fantasy' },
    { id: 5, name: 'Thriller' },
 
  ];

  const handleChange = (event) => {
    const categoryId = event.target.value;
    setSelectedCategory(categoryId);
    onSelectCategory(categoryId);
  };

  return (
    <FormControl fullWidth>
      <InputLabel>Select Category</InputLabel>
      <Select value={selectedCategory} onChange={handleChange} fullWidth>
        {dummyCategories.map(category => (
          <MenuItem key={category.id} value={category.id}>{category.name}</MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default CategorySelectionDropdown;
