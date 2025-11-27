// import React from "react";
// import BookList from "../components/books/BookList";
// import BookDetailPage from "./BookDetailPage";

// const BooksPage = () => {
//   return (
//     <div className="min-h-screen bg-gray-100 p-6">
//       <h1 className="text-3xl font-bold text-center mb-6">All Books</h1>

//       {/* ✅ Send current page to BookList so it fetches correct books */}
//       <BookList currentPage={currentPage} />

//       {/* ✅ Reusable Pagination Component */}
//       <Pagination
//         currentPage={currentPage}
//         totalPages={totalPages}
//         onPageChange={setCurrentPage}
//       />
//     </div>
//   );
// };

// export default BooksPage;

import React, { useState } from "react";
import BookList from "../components/books/BookList";

const BooksPage = () => {
  const [currentPage, setCurrentPage] = useState(1); // FIXED
  const pageSize = 12; // FIXED (any number)

  return (
    <div className="p-6">
      <BookList currentPage={currentPage} pageSize={pageSize} />

      {/* Simple Pagination */}
      <div className="flex justify-center gap-4 mt-6">
        <button
          disabled={currentPage === 1}
          onClick={() => setCurrentPage(currentPage - 1)}
          className="px-4 py-2 bg-gray-300 rounded disabled:opacity-50"
        >
          Prev
        </button>

        <button
          onClick={() => setCurrentPage(currentPage + 1)}
          className="px-4 py-2 bg-blue-500 text-white rounded"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default BooksPage;
