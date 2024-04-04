import React from 'react';
import { Link } from 'react-router-dom';
import { List, ListItem, ListItemText } from '@mui/material';

const BookPage = () => {
  return (
    <div>
      <h1>Book Management</h1>
      <List>
        <ListItem button component={Link} to="/add-book">
          <ListItemText primary="Add Book" />
        </ListItem>
        <ListItem button component={Link} to="/remove-book">
          <ListItemText primary="Remove Book" />
        </ListItem>
        <ListItem button component={Link} to="/show-books">
          <ListItemText primary="Show Books" />
        </ListItem>
        <ListItem button component={Link} to="/update-book">
          <ListItemText primary="Update Book" />
        </ListItem>
      </List>
    </div>
  );
};

export default BookPage;
