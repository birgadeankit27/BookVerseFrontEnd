// import React, { useEffect, useState } from "react";
// import {
//   getAllBooks,
//   addBook,
//   updateBook,
//   deleteBook,
// } from "../../api/bookApi";
// import BookForm from "../../components/books/BookForm";

// const AdminBooksPage = () => {
//   const [books, setBooks] = useState([]);
//   const [isFormOpen, setIsFormOpen] = useState(false);
//   const [editData, setEditData] = useState(null);

//   const fetchBooks = async () => {
//     const res = await getAllBooks();
//     setBooks(res.data);
//   };

//   useEffect(() => {
//     fetchBooks();
//   }, []);

//   const handleAdd = () => {
//     setEditData(null);
//     setIsFormOpen(true);
//   };

//   const handleEdit = (book) => {
//     setEditData(book);
//     setIsFormOpen(true);
//   };

//   const handleDelete = async (id) => {
//     await deleteBook(id);
//     fetchBooks();
//   };

//   const handleSubmit = async (data) => {
//     if (editData) {
//       await updateBook(editData.id, data);
//     } else {
//       await addBook(data);
//     }
//     setIsFormOpen(false);
//     fetchBooks();
//   };

//   return (
//     <div className="p-6">

//       <div className="flex justify-between items-center mb-6">
//         <h1 className="text-2xl font-bold text-indigo-700">Manage Books</h1>
//         <button
//           onClick={handleAdd}
//           className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700"
//         >
//           + Add Book
//         </button>
//       </div>

//       {isFormOpen && (
//         <div className="mb-6">
//           <BookForm
//             initialData={editData}
//             onSubmit={handleSubmit}
//             onCancel={() => setIsFormOpen(false)}
//           />
//         </div>
//       )}

//       <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
//         {books.map((book) => (
//           <div key={book.id} className="bg-white shadow-md p-4 rounded-xl">
//             <img
//               src={book.imageUrl}
//               alt={book.title}
//               className="w-full h-48 object-cover rounded-md"
//             />
//             <h3 className="text-lg font-semibold mt-3">{book.title}</h3>
//             <p className="text-gray-600">{book.author}</p>
//             <p className="font-bold mt-1">₹{book.price}</p>

//             <div className="flex justify-between mt-4">
//               <button
//                 onClick={() => handleEdit(book)}
//                 className="px-3 py-1 bg-yellow-500 text-white rounded hover:bg-yellow-600"
//               >
//                 Edit
//               </button>

//               <button
//                 onClick={() => handleDelete(book.id)}
//                 className="px-3 py-1 bg-red-600 text-white rounded hover:bg-red-700"
//               >
//                 Delete
//               </button>
//             </div>
//           </div>
//         ))}
//       </div>

//       {books.length === 0 && (
//         <p className="text-center text-gray-600 mt-10">
//           No books found. Add a new book.
//         </p>
//       )}
//     </div>
//   );
// };

// // export default AdminBooksPage;
// import React, { useEffect, useState } from "react";
// import bookApi from "../../api/bookApi";
// import BookForm from "../../components/books/BookForm";

// const AdminBooksPage = () => {
//   const role = localStorage.getItem("role");
//   const userId = Number(localStorage.getItem("userId"));
//   const [books, setBooks] = useState([]);
//   const [isFormOpen, setIsFormOpen] = useState(false);
//   const [editData, setEditData] = useState(null);

//   const fetchBooks = async () => {
//     try {
//       const res = await bookApi.getAllBooks();
//       let data = res.content || [];
//       // Filter books for seller
//       if (role === "ROLE_SELLER") {
//         data = data.filter((b) => b.seller?.id === userId);
//       }
//       setBooks(data);
//     } catch (err) {
//       console.error(err);
//     }
//   };

//   useEffect(() => {
//     fetchBooks();
//   }, []);

//   const handleAdd = () => {
//     setEditData(null);
//     setIsFormOpen(true);
//   };

//   const handleEdit = (book) => {
//     setEditData(book);
//     setIsFormOpen(true);
//   };

//   const handleDelete = async (bookId) => {
//     try {
//       await bookApi.deleteBook(bookId);
//       fetchBooks();
//       alert("Book deleted successfully");
//     } catch (err) {
//       alert(err?.response?.data || "Delete failed");
//     }
//   };

//   const handleSubmit = async (data) => {
//     try {
//       if (editData) {
//         await bookApi.updateBook(editData.id, data);
//       } else {
//         await bookApi.addBook(data);
//       }
//       setIsFormOpen(false);
//       fetchBooks();
//     } catch (err) {
//       alert(err?.response?.data || "Submit failed");
//     }
//   };

//   return (
//     <div className="p-6">
//       <div className="flex justify-between items-center mb-6">
//         <h1 className="text-2xl font-bold text-indigo-700">Manage Books</h1>
//         <button
//           onClick={handleAdd}
//           className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700"
//         >
//           + Add Book
//         </button>
//       </div>

//       {isFormOpen && (
//         <BookForm
//           initialData={editData}
//           onSubmit={handleSubmit}
//           onCancel={() => setIsFormOpen(false)}
//         />
//       )}

//       <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
//         {books.map((book) => (
//           <div key={book.id} className="bg-white shadow-md p-4 rounded-xl">
//             <img
//               src={book.imageUrl}
//               alt={book.title}
//               className="w-full h-48 object-cover rounded-md"
//             />
//             <h3 className="text-lg font-semibold mt-3">{book.title}</h3>
//             <p className="text-gray-600">{book.author}</p>
//             <p className="font-bold mt-1">₹{book.price}</p>

//             <div className="flex justify-between mt-4">
//               <button
//                 onClick={() => handleEdit(book)}
//                 className="px-3 py-1 bg-yellow-500 text-white rounded hover:bg-yellow-600"
//               >
//                 Edit
//               </button>

//               <button
//                 onClick={() => handleDelete(book.id)}
//                 className="px-3 py-1 bg-red-600 text-white rounded hover:bg-red-700"
//               >
//                 Delete
//               </button>
//             </div>
//           </div>
//         ))}
//       </div>

//       {books.length === 0 && (
//         <p className="text-center text-gray-600 mt-10">
//           No books found. Add a new book.
//         </p>
//       )}
//     </div>
//   );
// };

// export default AdminBooksPage;



import React, { useEffect, useState } from "react";
import bookApi from "../../api/bookApi";
import BookForm from "../../components/books/BookForm";

const AdminBooksPage = () => {
  const role = localStorage.getItem("role");
  const userId = Number(localStorage.getItem("userId"));
  const [books, setBooks] = useState([]);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [editData, setEditData] = useState(null);

  const fetchBooks = async () => {
    try {
      const res = await bookApi.getAllBooks();
      let data = res.content || [];
      // Filter books for seller
      if (role === "ROLE_SELLER") {
        data = data.filter((b) => b.seller?.id === userId);
      }
      setBooks(data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchBooks();
  }, []);

  const handleAdd = () => {
    setEditData(null);
    setIsFormOpen(true);
  };

  const handleEdit = (book) => {
    setEditData(book);
    setIsFormOpen(true);
  };

  const handleDelete = async (bookId) => {
    try {
      await bookApi.deleteBook(bookId);
      fetchBooks();
      alert("Book deleted successfully");
    } catch (err) {
      alert(err?.response?.data || "Delete failed");
    }
  };

  const handleSubmit = async (data) => {
    try {
      if (editData) {
        await bookApi.updateBook(editData.id, data);
      } else {
        await bookApi.addBook(data);
      }
      setIsFormOpen(false);
      fetchBooks();
    } catch (err) {
      alert(err?.response?.data || "Submit failed");
    }
  };

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-indigo-700">Manage Books</h1>
        <button
          onClick={handleAdd}
          className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700"
        >
          + Add Book
        </button>
      </div>

      {isFormOpen && (
        <BookForm
          initialData={editData}
          onSubmit={handleSubmit}
          onCancel={() => setIsFormOpen(false)}
        />
      )}

      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {books.map((book) => (
          <div key={book.id} className="bg-white shadow-md p-4 rounded-xl">
            <img
              src={book.imageUrl}
              alt={book.title}
              className="w-full h-48 object-cover rounded-md"
            />
            <h3 className="text-lg font-semibold mt-3">{book.title}</h3>
            <p className="text-gray-600">{book.author}</p>
            <p className="font-bold mt-1">₹{book.price}</p>

            <div className="flex justify-between mt-4">
              <button
                onClick={() => handleEdit(book)}
                className="px-3 py-1 bg-yellow-500 text-white rounded hover:bg-yellow-600"
              >
                Edit
              </button>

              <button
                onClick={() => handleDelete(book.id)}
                className="px-3 py-1 bg-red-600 text-white rounded hover:bg-red-700"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>

      {books.length === 0 && (
        <p className="text-center text-gray-600 mt-10">
          No books found. Add a new book.
        </p>
      )}
    </div>
  );
};

export default AdminBooksPage;
