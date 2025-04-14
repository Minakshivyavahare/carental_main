import React from 'react';
import ReviewItemUI from './reviewComponent/ReviewItemUI';
import AddReviewSectionUI from './reviewComponent/AddReviewSectionUI';


const ReviewSectionUI = () => {

 
  
return (
  <div className="bg-[#171717] p-6">
  <ReviewItemUI />
  <AddReviewSectionUI />
</div>
)

};

export default ReviewSectionUI;