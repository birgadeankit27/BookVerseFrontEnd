// import React, { useEffect, useState } from "react";

// const BookForm = ({ initialData, onSubmit, onCancel }) => {
//   const role = localStorage.getItem("role"); // "ROLE_ADMIN" or "ROLE_SELLER"
//   const userId = Number(localStorage.getItem("userId")); // logged-in user's ID
//   const isAdmin = role === "ROLE_ADMIN";

//   const [form, setForm] = useState({
//     title: "",
//     author: "",
//     price: "",
//     stock: "",
//     imageUrl: "",
//     isbn: "",
//     description: "",
//     condition: "NEW",
//     categoryId: "",
//     sellerId: isAdmin ? "" : userId, // Admin can edit, Seller fixed
//   });

//   useEffect(() => {
//     if (initialData) {
//       setForm({
//         title: initialData.title || "",
//         author: initialData.author || "",
//         price: initialData.price || "",
//         stock: initialData.stock || "",
//         imageUrl: initialData.imageUrl || "",
//         isbn: initialData.isbn || "",
//         description: initialData.description || "",
//         condition: initialData.condition || "NEW",
//         categoryId: initialData.category?.id || "",
//         sellerId: isAdmin ? initialData.seller?.id || "" : userId,
//       });
//     }
//   }, [initialData, isAdmin, userId]);

//   const handleChange = (e) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     const payload = {
//       title: form.title,
//       author: form.author,
//       isbn: form.isbn,
//       price: parseFloat(form.price),
//       stock: parseInt(form.stock),
//       description: form.description,
//       imageUrl: form.imageUrl,
//       condition: form.condition,
//       categoryId: parseInt(form.categoryId),
//     };

//     if (isAdmin) {
//       if (!form.sellerId) {
//         alert("Seller ID is required for admin.");
//         return;
//       }
//       payload.sellerId = Number(form.sellerId);
//     }

//     onSubmit(payload);
//   };

//   return (
//     <form
//       onSubmit={handleSubmit}
//       className="p-5 bg-white shadow-md rounded-xl grid grid-cols-1 md:grid-cols-2 gap-5"
//     >
//       {/* Title */}
//       <div>
//         <label className="font-medium">Title</label>
//         <input
//           name="title"
//           value={form.title}
//           onChange={handleChange}
//           className="w-full p-2 border rounded"
//           required
//         />
//       </div>

//       {/* Author */}
//       <div>
//         <label className="font-medium">Author</label>
//         <input
//           name="author"
//           value={form.author}
//           onChange={handleChange}
//           className="w-full p-2 border rounded"
//           required
//         />
//       </div>

//       {/* Price */}
//       <div>
//         <label className="font-medium">Price</label>
//         <input
//           type="number"
//           name="price"
//           value={form.price}
//           onChange={handleChange}
//           className="w-full p-2 border rounded"
//           required
//         />
//       </div>

//       {/* Stock */}
//       <div>
//         <label className="font-medium">Stock</label>
//         <input
//           type="number"
//           name="stock"
//           value={form.stock}
//           onChange={handleChange}
//           className="w-full p-2 border rounded"
//           required
//         />
//       </div>

//       {/* ISBN */}
//       <div>
//         <label className="font-medium">ISBN</label>
//         <input
//           name="isbn"
//           value={form.isbn}
//           onChange={handleChange}
//           className="w-full p-2 border rounded"
//         />
//       </div>

//       {/* Image URL */}
//       <div>
//         <label className="font-medium">Image URL</label>
//         <input
//           name="imageUrl"
//           value={form.imageUrl}
//           onChange={handleChange}
//           className="w-full p-2 border rounded"
//         />
//       </div>

//       {/* Condition */}
//       <div>
//         <label className="font-medium">Condition</label>
//         <select
//           name="condition"
//           value={form.condition}
//           onChange={handleChange}
//           className="w-full p-2 border rounded"
//         >
//           <option value="NEW">NEW</option>
//           <option value="GOOD">GOOD</option>
//           <option value="OLD">OLD</option>
//         </select>
//       </div>

//       {/* Category */}
//       <div>
//         <label className="font-medium">Category ID</label>
//         <input
//           type="number"
//           name="categoryId"
//           value={form.categoryId}
//           onChange={handleChange}
//           className="w-full p-2 border rounded"
//           required
//         />
//       </div>

//       {/* Seller ID – Admin Only */}
//       {isAdmin && (
//         <div>
//           <label className="font-medium">Seller ID (Admin Only)</label>
//           <input
//             type="number"
//             name="sellerId"
//             value={form.sellerId}
//             onChange={handleChange}
//             className="w-full p-2 border rounded"
//             required
//           />
//         </div>
//       )}

//       {/* Description */}
//       <div className="md:col-span-2">
//         <label className="font-medium">Description</label>
//         <textarea
//           name="description"
//           value={form.description}
//           onChange={handleChange}
//           className="w-full p-2 border rounded"
//           rows="3"
//         />
//       </div>

//       {/* Buttons */}
//       <div className="flex gap-3 md:col-span-2">
//         <button
//           type="submit"
//           className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
//         >
//           {initialData ? "Update Book" : "Add Book"}
//         </button>
//         <button
//           type="button"
//           onClick={onCancel}
//           className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
//         >
//           Cancel
//         </button>
//       </div>
//     </form>
//   );
// };

// export default BookForm;

import React, { useState, useEffect } from "react";

const BookForm = ({ initialData, onSubmit, onCancel, isAdmin }) => {
  const [form, setForm] = useState({
    title: "", author: "", price: "", stock: "",
    isbn: "", imageUrl: "", description: "",
    condition: "NEW", categoryId: "", sellerId: ""
  });

  useEffect(() => { if (initialData) setForm(initialData); }, [initialData]);

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  return (
    <form onSubmit={(e) => { e.preventDefault(); onSubmit(form); }}
      className="grid grid-cols-2 gap-4">

      {/** Inputs */}
      <input name="title" value={form.title} onChange={handleChange}
        className="border p-3 rounded-md shadow" placeholder="Book Title" required />

      <input name="author" value={form.author} onChange={handleChange}
        className="border p-3 rounded-md shadow" placeholder="Author" required />

      <input name="isbn" value={form.isbn} onChange={handleChange}
        className="border p-3 rounded-md shadow" placeholder="ISBN" required />

      <input name="price" type="number" value={form.price} onChange={handleChange}
        className="border p-3 rounded-md shadow" placeholder="Price" required />

      <input name="stock" type="number" value={form.stock} onChange={handleChange}
        className="border p-3 rounded-md shadow" placeholder="Stock" required />

      <input name="imageUrl" value={form.imageUrl} onChange={handleChange}
        className="border p-3 col-span-2 rounded-md shadow" placeholder="Image URL" />

      <textarea name="description" value={form.description} onChange={handleChange}
        className="border p-3 col-span-2 h-24 rounded-md shadow" placeholder="Description"></textarea>

      <select name="condition" value={form.condition} onChange={handleChange}
        className="border p-3 rounded-md shadow">
        <option>NEW</option>
        <option>USED</option>
      </select>

      <input name="categoryId" value={form.categoryId} onChange={handleChange}
        className="border p-3 rounded-md shadow" placeholder="Category ID" required />

      {isAdmin && (
        <input name="sellerId" value={form.sellerId} onChange={handleChange}
          className="border p-3 rounded-md shadow col-span-2" placeholder="Seller ID" />
      )}

      <div className="col-span-2 flex gap-4 justify-end mt-2">
        <button className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-md">Save</button>
        <button type="button" onClick={onCancel}
          className="bg-gray-500 hover:bg-gray-600 text-white px-5 py-2 rounded-md">
          Cancel
        </button>
      </div>

    </form>
  );
};

export default BookForm;

