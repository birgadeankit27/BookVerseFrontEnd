import React from "react";
import BookList from "../components/books/BookList";
import BookDetailPage from "./BookDetailPage";

const BooksPage = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold text-center mb-6">All Books</h1>
      <BookList />
     
    </div>
  );
};

export default BooksPage;
