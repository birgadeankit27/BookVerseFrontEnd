import React from "react";
import BookList from "../components/books/BookList";
import BookDetailPage from "./BookDetailPage";

const BooksPage = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold text-center mb-6">All Books</h1>

      {/* ✅ Send current page to BookList so it fetches correct books */}
      <BookList currentPage={currentPage} />

      {/* ✅ Reusable Pagination Component */}
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
      />
    </div>
  );
};

export default BooksPage;

