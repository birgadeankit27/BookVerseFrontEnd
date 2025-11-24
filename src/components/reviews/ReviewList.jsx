// ReviewList component
import { useEffect, useState } from "react";
import reviewApi from "../../api/reviewApi";

function ReviewList({ bookId, refreshTrigger }) {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchReviews();
  }, [bookId, refreshTrigger]);

  const fetchReviews = async () => {
    try {
      setLoading(true);
      const data = await reviewApi.getReviewsByBook(bookId);
      setReviews(data || []);
    } catch (error) {
      console.error("Error fetching reviews:", error);
      setReviews([]);
    } finally {
      setLoading(false);
    }
  };

  // ⭐ Star Renderer
  const renderStars = (rating) => {
    return [...Array(5)].map((_, index) => (
      <span
        key={index}
        className={index < rating ? "text-yellow-400" : "text-gray-300"}
      >
        ★
      </span>
    ));
  };

  if (loading) {
    return (
      <p className="text-center text-gray-500 mt-4">
        Loading reviews...
      </p>
    );
  }

  if (reviews.length === 0) {
    return (
      <p className="text-center text-gray-500 mt-4">
        No reviews yet
      </p>
    );
  }

  return (
    <div className="mt-6 space-y-4">
      <h3 className="text-xl font-semibold text-gray-800">
        Customer Reviews
      </h3>

      {reviews.map((review) => (
        <div
          key={review.id}
          className="bg-white p-4 rounded-xl shadow-sm border"
        >
          <div className="flex justify-between items-center mb-2">
            <h4 className="font-semibold text-gray-700">
              {review.user?.name || "Anonymous"}
            </h4>
            <div className="text-lg">
              {renderStars(review.rating)}
            </div>
          </div>

          <p className="text-gray-600 text-sm">
            {review.comment}
          </p>
        </div>
      ))}
    </div>
  );
}

export default ReviewList;
