import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'




const AdminUsertable = () => {


const { adminrental, isLoading, isError}  = useSelector(state => state.admin)

const users = adminrental?.users

  return (

    <div className="bg-[#171717] min-h-screen py-30 px-4 flex justify-center items-start">
    <div className="w-full max-w-6xl bg-[#1f1f1f] rounded-lg shadow-xl overflow-x-auto">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-center bg-[#2c2c2c] p-6 rounded-t-lg">
        <h2 className="text-white text-2xl font-semibold">
          User <span className="text-white font-bold">Management</span>
        </h2>
       
      </div>
  
      {/* Table */}
      <div className="p-4">
        <table className="w-full text-sm md:text-base text-left text-gray-300">
          <thead className="bg-[#2c2c2c] text-gray-400">
            <tr>
              <th className="py-3 px-4">Name</th>
              <th className="py-3 px-4">Phone</th>
              <th className="py-3 px-4">License</th>
              <th className="py-3 px-4">Total Booked Car</th>
              <th className="py-3 px-4">View Booked Car</th>
            </tr>
          </thead>
          <tbody>
            {users?.map((user, index) => (
              <tr
                key={index}
                className={`${
                  index % 2 === 0 ? "bg-[#262626]" : "bg-[#1f1f1f]"
                } border-b border-gray-700 hover:bg-[#333] transition`}
              >
                <td className="py-3 px-4">{user.name}</td>
                <td className="py-3 px-4">{user.phone}</td>
                <td className="py-3 px-4">{user.license || "No license"}</td>
                <td className="py-3 px-4">{user.rentals.length}</td>
                <td className="py-3 px-4">
                  <Link
                    to="/userrentaldetail"
                    state={{ user }}
                    className="text-blue-400 hover:underline"
                  >
                    View Booked Car
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
  
        {/* No user message */}
        {users?.length === 0 && (
          <div className="text-center py-6 text-gray-500">No users found.</div>
        )}
      </div>
    </div>
  </div>
  


 
  )
}

export default AdminUsertable