import React from "react";
import { useLocation } from "react-router-dom";

const BookDetailPage = () => {
  const { state } = useLocation();
  const book = state?.book;

  if (!book) return <p className="text-center mt-10">No book data provided</p>;

  return (
    <div className="max-w-3xl mx-auto p-4">
      {/* Image container */}
      <div className="w-full rounded-md mb-6 flex items-center justify-center bg-gray-100 overflow-hidden">
        <img
          src={book.imageUrl}
          alt={book.title}
          className="w-auto h-96 object-contain"
        />
      </div>

      {/* Book details */}
      <h2 className="text-3xl font-bold mb-2">{book.title}</h2>
      <p className="text-gray-600 text-lg mb-4">Author: {book.author}</p>

      <p className="mb-4">{book.description}</p>

      <p className="text-indigo-600 font-bold text-xl mb-4">
        Price: ₹ {book.price}
      </p>

      <div className="text-gray-700 space-y-1">
        <p><strong>Stock:</strong> {book.stock}</p>
        <p><strong>Condition:</strong> {book.condition}</p>
        <p><strong>Category:</strong> {book.categoryId}</p>
        <p><strong>Seller:</strong> {book.sellerId}</p>
        <p><strong>ISBN:</strong> {book.isbn}</p>
      </div>
    </div>
  );
};

export default BookDetailPage;
