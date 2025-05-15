import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addReview, getReview } from '../../features/reviews/ReviewSlice';
import { Star, StarHalf, MessageSquare, Users } from "lucide-react";

const AddReviewSectionUI = ({ carid }) => {

  const dispatch = useDispatch()

  const { isLoading, allReviews } = useSelector(state => state.review)

  useEffect(() => {
    dispatch(getReview(carid))
  }, [])

  const [reviewform, setreviewForm] = useState({
    comment: '',
    rating: ''
  })

  const { comment, rating } = reviewform

  const handleReviewSubmit = (e) => {
    e.preventDefault()
    console.log("reviewform", reviewform)
    dispatch(addReview({ reviewform, carid }))
    setreviewForm({ comment: '', rating: '' })
    dispatch(getReview(carid))
  }


  const handleReviewChange = (e) => {
    setreviewForm({
      ...reviewform,
      [e.target.name]: e.target.value
    })


  }

  if (isLoading) {
    return (
      <div>
        Data is Loading .........
      </div>
    )
  }
  const renderRating = (rating) => {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating - fullStars >= 0.5;

    return (
      <div className="flex items-center">
        {[...Array(fullStars)].map((_, i) => (
          <Star key={`star-${i}`} className="w-5 h-5 fill-amber-400 text-amber-400" />
        ))}
        {hasHalfStar && <StarHalf className="w-5 h-5 fill-amber-400 text-amber-400" />}
        {[...Array(5 - fullStars - (hasHalfStar ? 1 : 0))].map((_, i) => (
          <Star key={`empty-star-${i}`} className="w-5 h-5 text-gray-400" />
        ))}
        <span className="ml-2 text-white font-medium">{rating.toFixed(1)}</span>
      </div>
    );
  };



  return (
    <>
      <div className="bg-[#191919] rounded-xl shadow-lg p-6 sm:p-8  mx-auto w-full">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-white">Add a Review</h2>
        </div>
        <form className="flex flex-col gap-4" onSubmit={handleReviewSubmit}>
          <input
            type="text"
            name="comment"
            value={comment}
            onChange={handleReviewChange}
            placeholder="Write your review..."
            className="bg-[#2a2a2a] text-white border border-gray-600 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-400 placeholder-gray-400"
          />
          <input
            type="text"
            name="rating"
            value={rating}
            onChange={handleReviewChange}
            placeholder="Rating (e.g., 4.5)"
            className="bg-[#2a2a2a] text-white border border-gray-600 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-400 placeholder-gray-400"
          />
          <button
            type="submit"
            className="bg-green-500 hover:bg-green-600 transition-colors text-white font-semibold py-3 rounded-lg shadow-md"
          >
            Submit Review
          </button>
        </form>
      </div>
      <div className="mt-12 bg-gray-800 border border-gray-700 rounded-lg shadow-lg">
        <div className="p-6 border-b border-gray-700">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold text-white">Customer Reviews</h2>
            <div className="flex items-center space-x-2 text-gray-300">
              <MessageSquare className="w-5 h-5" />
              <span>{allReviews.length} reviews</span>
            </div>
          </div>

          <div className="mt-4 flex items-center">
            <div className="flex items-center">
              <Star className="w-8 h-8 fill-amber-400 text-amber-400" />
              <span className="ml-2 text-3xl font-bold text-white">4.5</span>
            </div>
            <div className="ml-4 text-gray-400">
              <span>Average rating</span>
            </div>
          </div>
        </div>

        <div className="divide-y divide-gray-700">
          {allReviews.map(review => (
            <div key={review.id} className="p-6">
              <div className="flex items-start">
                {/* <img
                src={review?.userAvatar}
                alt={review.userName}
                className="w-12 h-12 rounded-full object-cover mr-4"
              /> */}
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-semibold text-white">{review.userName}</h3>
                    <span className="text-gray-400 text-sm">{review.createdAt}</span>
                  </div>
                  {renderRating(review.rating)}
                  <p className="mt-3 text-gray-300">{review.comment}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="p-6 bg-gray-800 rounded-b-lg border-t border-gray-700">
          <div className="flex items-center justify-between">
            <div className="flex items-center text-gray-300">
              <Users className="w-5 h-5 mr-2" />
              <span>{allReviews.length} customers shared their experience</span>
            </div>
          </div>
        </div>
      </div>
    </>

  )
}

export default AddReviewSectionUI



