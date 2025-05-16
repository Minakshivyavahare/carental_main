import axios from "axios";

const base_url = "https://car-rental-app-5d25.onrender.com"

const fetchReview = async (id, token) => {


  const options = {
    headers: {
      authorization: `Bearer ${token}`
    },
  };


  const response = await axios.get(
    base_url + `/api/car/${id}/reviews`,
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


  const response = await axios.post(base_url + `/api/car/${carid}/reviews/add`, reviewform, options);

  return response.data

};

const reviewService = { fetchReview, getaddReview };

export default reviewService;


