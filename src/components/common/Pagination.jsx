// Pagination component
// ✅ Reusable + Scalable Pagination Component
// Props:
// currentPage → active page number
// totalPages → total number of pages
// onPageChange(page) → callback for page switch

export default function Pagination({
  currentPage,
  totalPages,
  onPageChange,
}) {
  // ✅ Generate page numbers with ellipsis → cleaner UI
  const getPageNumbers = () => {
    const pages = [];

    if (totalPages <= 5) {
      // Few pages — show all
      for (let i = 1; i <= totalPages; i++) pages.push(i);
    } else {
      // Many pages — smart display
      if (currentPage <= 3) {
        pages.push(1, 2, 3, 4, "...", totalPages);
      } else if (currentPage >= totalPages - 2) {
        pages.push(1, "...", totalPages - 3, totalPages - 2, totalPages - 1, totalPages);
      } else {
        pages.push(1, "...", currentPage - 1, currentPage, currentPage + 1, "...", totalPages);
      }
    }

    return pages;
  };

  return (
    <div className="pagination-container">
      {/* ✅ Prev Button */}
      <button
        disabled={currentPage === 1}
        onClick={() => onPageChange(currentPage - 1)}
        aria-label="Go to previous page"
      >
        Prev
      </button>

      {getPageNumbers().map((page, index) =>
        page === "..." ? (
          <span key={index} className="pagination-dots">...</span>
        ) : (
          <button
            key={page}
            className={currentPage === page ? "active" : ""}
            onClick={() => onPageChange(page)}
          >
            {page}
          </button>
        )
      )}

      {/* ✅ Next Button */}
      <button
        disabled={currentPage === totalPages}
        onClick={() => onPageChange(currentPage + 1)}
        aria-label="Go to next page"
      >
        Next
      </button>
    </div>
  );
}
