import React from "react";
import { Link } from "react-router-dom";

const BookCard = ({ book, onAddToCart }) => {
  return (
    <Link
      to={`/books/${book.id}`}
      state={{ book }}
      className="block"
    >
      <div
        className="
          bg-white shadow-md rounded-lg p-4 
          hover:shadow-2xl hover:scale-105 
          transition-transform duration-300 
          cursor-pointer
        "
      >
       <div className="w-full h-64 overflow-hidden rounded-md mb-3 flex items-center justify-center bg-gray-100">
  <img
    src={book.imageUrl}
    alt={book.title}
    className="max-w-full max-h-full object-contain"
  />
</div>


        <h3 className="text-lg font-semibold">{book.title}</h3>
        <p className="text-gray-600 text-sm">Author: {book.author}</p>

        <p className="text-indigo-600 font-bold mt-2">₹ {book.price}</p>

        <button
          onClick={(e) => {
            e.preventDefault(); // prevent triggering navigation
            onAddToCart(book);
          }}
          className="
            bg-indigo-600 text-white w-full py-2 mt-3 rounded-md 
            hover:bg-indigo-700 hover:shadow-md 
            transition duration-300 ease-in-out
          "
        >
          Add to Cart
        </button>
      </div>
    </Link>
  );
};

export default BookCard;
