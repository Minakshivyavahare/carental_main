import React from 'react';
import { useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faUserCircle } from '@fortawesome/free-solid-svg-icons';

const ReviewItemUI = () => {
  const { allReviews } = useSelector((state) => state.review);

  const renderStars = (rating) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <FontAwesomeIcon
          key={i}
          icon={faStar}
          className={i <= rating ? 'text-yellow-500' : 'text-gray-300'}
        />
      );
    }
    return stars;
  };

  return (
    <div className="bg-[#191919] rounded-lg shadow-lg p-6 mb-4">
      <h2 className="text-xl font-semibold text-white mb-4">User Reviews</h2>
      {allReviews && allReviews.length > 0 ? (
        <ul className="space-y-4">
          {allReviews.map((review, index) => (
            <li key={index} className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <FontAwesomeIcon icon={faUserCircle} size="2x" className="text-gray-400" />
              </div>
              <div className="flex-grow">
                <div className="flex items-center justify-between mb-1">
                  <p className="text-white text-sm">{review.comment || review}</p>
                  {review.rating && (
                    <div className="flex items-center space-x-1">
                      {renderStars(review.rating)}
                      <span className="text-sm text-gray-600">({review.rating}/5)</span>
                    </div>
                  )}
                </div>
                {/* {review.user && (
                  <p className="text-gray-500 text-xs">By: {review.user}</p>
                )} */}
                {/* {review.date && (
                  <p className="text-gray-500 text-xs">{new Date(review.date).toLocaleDateString()}</p>
                )} */}
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-white">No reviews yet.</p>
      )}
    </div>
  );
};

export default ReviewItemUI;















// import React from 'react'
// import { useSelector } from 'react-redux';

// const ReviewItemUI = () => {


//   const { allReviews } = useSelector(state => state.review);
   

//   return (
//     <div className="bg-white rounded-md shadow-sm p-6 mb-4">
//     <div className='text-xl'>Reviews</div>
//     <div className="flex items-center mb-2">
//       <ul className="ml-4 w-full"> {/* Added some margin for spacing */}
//         {allReviews?.map((review, index) => (
//           <>
//           <div className='flex flex-row item-between justify-between'>
//           <li key={index} className="text-sm text-gray-700 mb-2">{review.comment || review}</li> 
//           <li key={index} className="text-sm text-gray-700 mb-2">{review.rating}</li> 
//           </div>
//           </>
          
//         ))}
//       </ul>
//     </div>
//   </div>
//   )
// }

// export default ReviewItemUI