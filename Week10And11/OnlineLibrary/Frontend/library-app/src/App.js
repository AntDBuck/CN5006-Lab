// Import libraries
import React, {Component} from 'react';
import { BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import DeleteBook from './Component/Delete_Book';
import Book_Form from './Component/AddBook';
import Book_UpDateForm from './Component/BookUpdate';
import FncDisplayBooks from './Component/DsplyBk_fncCompt';

// Define and export functional App component
export default function App() {
  // Return Routes and links to imported componenets via matching urls
  return(
    <Router>
    <div className='container'>
      <center><h2>Online Book Library Using React</h2></center><br/>
      <nav className='navbar navbar-expand-lg navbar-light bg-success'>
        <Link to='/' className='navbar-brand'><h4>Add a Book</h4></Link>
        <Link to='/DisplayBooksF1' className='navbar-brand'><h4>Display All Books</h4></Link>
      </nav>
      <br/>
      <Routes>
        <Route path='/' element={<Book_Form/>}/>
        <Route path='/edit/:id' element={<Book_UpDateForm/>}/>
        <Route path='/Delete/:id' element={<DeleteBook/>}/>
        <Route path='/DisplayBooksF1' element={<FncDisplayBooks/>}/>
      </Routes>
    </div>
  </Router>
  );
};