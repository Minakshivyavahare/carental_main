import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { CreateRentalcar, reset, Updaterental } from '../features/admin/AdminSlice';
import Loader from '../component/Loader';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { getAllCar } from '../features/AllCar/carSlice';

const AddNewrental = () => {
  const { AdminEdit, isLoading, isSuccess, isError, message } = useSelector(state => state.admin);
  const dispatch = useDispatch();
  const navigate = useNavigate()


  const [formData, setFormData] = useState({
    name: "",
    company: "",
    rate: "",
    registration: "",
    image: "",
    fuelType: "",
    category: "",
    seats: "",
    mileage: "",
    transmission: "",
    description: "",
  });


  // useEffect(() => {
  //   if (AdminEdit?.isedit && AdminEdit?.edit) {
  //     // setFormData(AdminEdit.edit);
  //     const editData = { ...AdminEdit.edit };

  //    console.log("editdata",editData)

  //   setFormData({
  //     ...editData,
  //     image: editData.image || "",
  //   });
  //   }
  // }, [AdminEdit]);

  useEffect(() => {
    if (AdminEdit?.isedit && AdminEdit?.edit) {
      const editData = { ...AdminEdit.edit };
      setFormData({
        ...editData,
      });
    }
  }, [AdminEdit]);

  // Handle input change
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })

  };

  //image handle
  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      setFormData({
        ...formData,
        image: selectedFile,
      });
    }
  };


  //Submit form
  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   const newFormData = new FormData();
  //   newFormData.append("company", formData.company);
  //   newFormData.append("name", formData.name);
  //   newFormData.append("registration", formData.registration);
  //   newFormData.append("description", formData.description);
  //   newFormData.append("category", formData.category);
  //   newFormData.append("fuelType", formData.fuelType);
  //   newFormData.append("transmission", formData.transmission);
  //   newFormData.append("rate", formData.rate);
  //   newFormData.append("mileage", formData.mileage);
  //   newFormData.append("seats", formData.seats);

  //   if (formData.image) {
  //     newFormData.append("image", formData.image);
  //   }



  //   if (AdminEdit?.isedit) {
  //     dispatch(Updaterental({formData:newFormData, id:AdminEdit.edit._id}));
  //   } else {

  //     dispatch(CreateRentalcar({formData:newFormData}));

  //   }

  //   // Optionally, reset the form after submit
  //   setFormData({
  //     name: "",
  //     company: "",
  //     rate: "",
  //     registration: "",
  //     image: "",
  //     fuelType: "",
  //     category: "",
  //     seats: "",
  //     mileage: "",
  //     transmission: "",
  //     description: "",
  //   });
  // };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("initial formData sent to new formData", formData)

    const newFormData = new FormData();
    newFormData.append("company", formData.company);
    newFormData.append("name", formData.name);
    newFormData.append("registration", formData.registration);
    newFormData.append("description", formData.description);
    newFormData.append("category", formData.category);
    newFormData.append("fuelType", formData.fuelType);
    newFormData.append("transmission", formData.transmission);
    newFormData.append("rate", formData.rate);
    newFormData.append("mileage", formData.mileage);
    newFormData.append("seats", formData.seats);

    if (formData.image) {
      newFormData.append("image", formData.image);
    }
    console.log("FormData being sent:", Array.from(newFormData.entries()));

    if (AdminEdit?.isedit) {
    dispatch(Updaterental({ formData: newFormData, id: AdminEdit.edit._id }));
  } else {
    dispatch(CreateRentalcar({ formData: newFormData }));
  }

  //  Optionally, reset the form after submit
    setFormData({
      name: "",
      company: "",
      rate: "",
      registration: "",
      image: "",
      fuelType: "",
      category: "",
      seats: "",
      mileage: "",
      transmission: "",
      description: "",
    });
    dispatch(reset())
  if(isSuccess){
    navigate("/Adminallrental")
    dispatch(getAllCar())
  }

  };

  useEffect(() => {

    if (isError && message) {
      toast.error(message, {
        position: "top-right",
        theme: "dark",

      });

    }
    if (isSuccess) {
      toast.success(message, {
        position: "top-right",
        theme: "light",

      });
    }


  }, [isError, message, isSuccess])

  if (isLoading) {
    return (
      <div className="bg-gray-900 flex items-center justify-center min-h-screen py-35">
        <Loader />
      </div>
    )

  }

  return (
    <div className="px-4 bg-[#313131] py-8">
      <form
        onSubmit={handleSubmit}
        className="bg-[#1f1f1f] p-6 mt-20 rounded-xl shadow-lg grid gap-4 text-white"
      >
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Car Name"
          className="w-full p-3 border border-gray-700 bg-[#2a2a2a] rounded-lg placeholder-gray-400"
          required
        />

        <input
          type="text"
          name="company"
          value={formData.company}
          onChange={handleChange}
          placeholder="Company"
          className="w-full p-3 border border-gray-700 bg-[#2a2a2a] rounded-lg placeholder-gray-400"
          required
        />

        <input
          type="number"
          name="rate"
          value={formData.rate}
          onChange={handleChange}
          placeholder="Rate"
          className="w-full p-3 border border-gray-700 bg-[#2a2a2a] rounded-lg placeholder-gray-400"
          required
        />

        <input
          type="text"
          name="registration"
          value={formData.registration}
          onChange={handleChange}
          placeholder="Registration Number"
          className="w-full p-3 border border-gray-700 bg-[#2a2a2a] rounded-lg placeholder-gray-400"
          required
        />

        <input
          type="file"
          name="image"
          value={formData?.image?.url}
          onChange={handleFileChange}
          placeholder="Car Image URL"
          className="w-full p-3 border border-gray-700 bg-[#2a2a2a] rounded-lg placeholder-gray-400"
          required
        />

        <select
          name="fuelType"
          value={formData.fuelType}
          onChange={handleChange}
          className="w-full p-3 border border-gray-700 bg-[#2a2a2a] rounded-lg text-white"
          required
        >
          <option value="">Select Fuel Type</option>
          <option value="petrol">Petrol</option>
          <option value="diesel">Diesel</option>
          <option value="cng">CNG</option>
          <option value="ev">EV</option>
        </select>

        <select
          name="category"
          value={formData.category}
          onChange={handleChange}
          className="w-full p-3 border border-gray-700 bg-[#2a2a2a] rounded-lg text-white"
          required
        >
          <option value="">Select Category</option>
          <option value="hatchback">Hatchback</option>
          <option value="suv">SUV</option>
          <option value="sedan">Sedan</option>
          <option value="coupe">Coupe</option>
          <option value="jeep">Jeep</option>
        </select>

        <input
          type="number"
          name="mileage"
          value={formData.mileage}
          onChange={handleChange}
          placeholder="Mileage"
          className="w-full p-3 border border-gray-700 bg-[#2a2a2a] rounded-lg placeholder-gray-400"
          required
        />

        <input
          type="number"
          name="seats"
          value={formData.seats}
          onChange={handleChange}
          placeholder="Seats"
          className="w-full p-3 border border-gray-700 bg-[#2a2a2a] rounded-lg placeholder-gray-400"
          required
        />

        <select
          name="transmission"
          value={formData.transmission}
          onChange={handleChange}
          className="w-full p-3 border border-gray-700 bg-[#2a2a2a] rounded-lg text-white"
          required
        >
          <option value="">Select Transmission</option>
          <option value="Automatic">Automatic</option>
          <option value="Manual">Manual</option>
        </select>

        <textarea
          name="description"
          value={formData.description}
          onChange={handleChange}
          placeholder="Description"
          className="w-full p-3 border border-gray-700 bg-[#2a2a2a] rounded-lg placeholder-gray-400"
          required
        ></textarea>

        <button
          type="submit"
          className="w-full bg-[#82B440] text-white p-3 rounded-lg font-semibold transition"
        >
          {AdminEdit?.isedit ? "Update Car" : "Add Car"}
        </button>
      </form>


    </div>

  );
};

export default AddNewrental;


