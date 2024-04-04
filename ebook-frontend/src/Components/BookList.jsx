import React, { useEffect, useState } from 'react';
import { Card, CardMedia, CardContent, Typography, Button } from '@mui/material';
import axios from 'axios';

const BookList = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const access_token = JSON.parse(localStorage.getItem('access_token'));
        const response = await axios.get(
          'http://localhost:8000/api/books-show',
          {
            headers: {
              Authorization: `Bearer ${access_token}` // Assuming access_token is defined somewhere in your component
            }
          }
        );
        const Books = response.data.data;
        console.log(Books);
        setBooks(Books);
      } catch (error) {
        console.error('Error fetching books:', error);
      }
    };

    fetchData(); // Call fetchData immediately

  }, []); // Empty dependency array to run once on component mount

  return (
    <div>
      {books.map((book) => (
        <Card key={book.id}>
          <CardMedia
            component="img"
            height="140"
            image={'http://localhost:8000/' + book.cover_image}
            alt={book.title}
          />
          <CardContent>
            <Typography variant="h5" component="div">
              {book.title}
            </Typography>
            <Typography color="text.secondary">
              Author: {book.author}
            </Typography>
            <Typography color="text.secondary">
              Description: {book.description}
            </Typography>
            <Typography color="text.secondary">
              Category: {book.category.name}
            </Typography>
            {book.pdf_file && (
              <Button
                variant="contained"
                color="primary"
                href={'http://localhost:8000/' +book.pdf_file}
                target="_blank"
                rel="noopener noreferrer"
                download
              >
                Download PDF
              </Button>
            )}
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default BookList;
