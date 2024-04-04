// AppRouter.jsx
import React from 'react';
import { Routes, Route } from 'react-router-dom'; // Import Routes and Route from react-router-dom
import { useAuth0 } from '@auth0/auth0-react';

import LogIn from '/src/Components/LogIn';
import SignUp from '/src/Components/SignUp';

import BooksPage from './Pages/BooksPage';

import AddBookPage  from './Pages/AddBookPage';
import RemoveBookPage from './Pages/RemoveBookPage'
import ShowBooksPage  from './Pages/ShowBooksPage';
import UpdateBookPage from './Pages/UpdateBookPage'
const AppRouter = () => {
  const { isAuthenticated } = useAuth0();

  return (
    <Routes>
      <Route path="/login" element={<LogIn />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/books" element={<BooksPage />} />
  
    
  
        <Route path="/add-book" element={<AddBookPage/>} />
        <Route path="/remove-book" element={<RemoveBookPage/>} />
        <Route path="/show-books" element={<ShowBooksPage/>} />
        <Route path="/update-book" element={<UpdateBookPage/>} />
    </Routes>
  );
};

export default AppRouter;
