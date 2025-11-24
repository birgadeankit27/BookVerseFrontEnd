import React, { useEffect, useState } from "react";
import BookCard from "./BookCard";
import bookApi from "../../api/bookApi";

const BookList = ({ currentPage, pageSize }) => {
  const [books, setBooks] = useState([]);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetchBooks();
  }, [currentPage]); // ✅ Fetch again when page changes

  const fetchBooks = async () => {
    try {
      setLoading(true);

      // ✅ Backend pagination request
      const data = await bookApi.getAllBooks(currentPage - 1, pageSize);

      setBooks(data.content);  
      setTotalPages(data.totalPages); 
      setError("");
    } catch (err) {
      console.error(err);
      setError("Failed to load books. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleAddToCart = (book) => {
    alert(`${book.title} added to cart!`);
  };

  if (loading) return <p className="text-center mt-10 text-lg">Loading books...</p>;
  if (error) return <p className="text-center mt-10 text-red-500">{error}</p>;

  return (
    <div>
     
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-4">
        {books.map((book) => (
          <BookCard key={book.id} book={book} onAddToCart={handleAddToCart} />
        ))}
      </div>

    </div>
  );
};

export default BookList;
