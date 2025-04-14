import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { CreateRentalcar, Updaterental } from '../features/admin/AdminSlice';

const AddNewrental = () => {
  const { AdminEdit } = useSelector(state => state.admin);
  const dispatch = useDispatch();

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

  // Pre-fill form if editing
  useEffect(() => {
    if (AdminEdit?.isedit && AdminEdit?.adimiEdit) {
      setFormData(AdminEdit.adimiEdit);
    }
  }, [AdminEdit]);

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  // Submit form
  const handleSubmit = (e) => {
    e.preventDefault();

    if (AdminEdit?.isedit) {
      dispatch(Updaterental(formData));
    } else {
      dispatch(CreateRentalcar(formData));
    }

    // Optionally, reset the form after submit
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
  };

  return (
    <div className="container mx-auto p-6 mt-20">
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded-xl shadow-lg grid gap-4">
        <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Car Name" className="w-full p-3 border border-gray-300 rounded-lg" required />
        <input type="text" name="company" value={formData.company} onChange={handleChange} placeholder="Company" className="w-full p-3 border border-gray-300 rounded-lg" required />
        <input type="number" name="rate" value={formData.rate} onChange={handleChange} placeholder="Rate" className="w-full p-3 border border-gray-300 rounded-lg" required />
        <input type="text" name="registration" value={formData.registration} onChange={handleChange} placeholder="Registration Number" className="w-full p-3 border border-gray-300 rounded-lg" required />
        <input type="text" name="image" value={formData.image} onChange={handleChange} placeholder="Car Image URL" className="w-full p-3 border border-gray-300 rounded-lg" required />

        <select name="fuelType" value={formData.fuelType} onChange={handleChange} className="w-full p-3 border border-gray-300 rounded-lg" required>
          <option value="">Select Fuel Type</option>
          <option value="petrol">Petrol</option>
          <option value="diesel">Diesel</option>
          <option value="cng">CNG</option>
          <option value="ev">EV</option>
        </select>

        <select name="category" value={formData.category} onChange={handleChange} className="w-full p-3 border border-gray-300 rounded-lg" required>
          <option value="">Select Category</option>
          <option value="hatchback">Hatchback</option>
          <option value="suv">SUV</option>
          <option value="sedan">Sedan</option>
          <option value="coupe">Coupe</option>
          <option value="jeep">Jeep</option>
        </select>

        <input type="number" name="mileage" value={formData.mileage} onChange={handleChange} placeholder="Mileage" className="w-full p-3 border border-gray-300 rounded-lg" required />
        <input type="number" name="seats" value={formData.seats} onChange={handleChange} placeholder="Seats" className="w-full p-3 border border-gray-300 rounded-lg" required />

        <select name="transmission" value={formData.transmission} onChange={handleChange} className="w-full p-3 border border-gray-300 rounded-lg" required>
          <option value="">Select Transmission</option>
          <option value="Automatic">Automatic</option>
          <option value="Manual">Manual</option>
        </select>

        <textarea name="description" value={formData.description} onChange={handleChange} placeholder="Description" className="w-full p-3 border border-gray-300 rounded-lg" required></textarea>

        <button type="submit" className="w-full bg-blue-600 text-white p-3 rounded-lg font-semibold hover:bg-blue-700 transition">
          {AdminEdit?.isedit ? "Update Car" : "Add Car"}
        </button>
      </form>
    </div>
  );
};

export default AddNewrental;


