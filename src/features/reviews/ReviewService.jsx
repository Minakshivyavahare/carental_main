import axios from "axios";

const fetchReview = async (id, token) => {


  const options = {
    headers: {
      authorization: `Bearer ${token}`
    },
  };


  const response = await axios.get(
    `/api/car/${id}/reviews`,
    options
  );
  return response.data
};



const getaddReview = async ({reviewform, carid}, token) => {



  const options = {
    headers: {
      Authorization: `Bearer ${token}`
    },
  };


  const response = await axios.post(`/api/car/${carid}/reviews/add`, reviewform, options);

  return response.data

};

const reviewService = { fetchReview, getaddReview };

export default reviewService;


