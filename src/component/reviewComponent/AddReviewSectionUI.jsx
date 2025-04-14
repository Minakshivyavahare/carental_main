import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addReview, getReview } from '../../features/reviews/ReviewSlice';
import { useParams } from 'react-router-dom';

const AddReviewSectionUI = () => {

  const dispatch = useDispatch()

  const {isLoading, isSuccess, isError} = useSelector(state => state.review)

  const {carid} = useParams()
  

  const [reviewform , setreviewForm] = useState({
    comment : '',
    rating : ''
  })

const {comment, rating} = reviewform

const handleReviewSubmit = (e) => {
  e.preventDefault()
dispatch(addReview({reviewform, carid}))
setreviewForm({comment : '', rating : ''})

}


const handleReviewChange = (e) => {
setreviewForm({
  ...reviewform,
  [e.target.name ] : e.target.value
}

)


}

if(isLoading ){
  return (
    <div>
      Data is Loading .........
    </div>
  )
}



  return (
    <div className="bg-[#191919] rounded-md shadow-sm p-6">
    <div className="flex items-center justify-between mb-4">
      <h2 className="text-lg font-semibold text-white">Add a review</h2>
    </div>
    <form className='flex flex-col' action="" onSubmit={handleReviewSubmit}>
      <input  className='border text-white m-2' type="text"  placeholder='Add review here'
      onChange={handleReviewChange}
      name = 'comment'
      value = {comment}
      />
      <input  className='border text-white m-2' type="text"  placeholder='Add rating here'
          onChange={handleReviewChange}
         name = 'rating'
         value = {rating}
      />
      <button className='bg-green-400 text-white font-bold p-2 rounded-md'>Add Review</button>
    </form>
  
  </div>
  )
}

export default AddReviewSectionUI