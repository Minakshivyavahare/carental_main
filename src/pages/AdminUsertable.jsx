import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'




const AdminUsertable = () => {


const { adminrental, isLoading, isError}  = useSelector(state => state.admin)

const users = adminrental?.users

  return (
    <div className="bg-gray-100 p-6 min-h-screen flex justify-center">
    <div className="w-full max-w-6xl bg-white p-6 rounded-lg shadow-md overflow-x-auto">
      <div className="flex flex-col md:flex-row justify-between items-center bg-blue-500 p-4 rounded-t-lg">
        <h2 className="text-white text-lg font-bold">User <span className="font-extrabold">Management</span></h2>
        <div className="mt-2 md:mt-0">
          <button className="bg-white text-blue-500 px-4 py-2 rounded-md shadow-md w-full md:w-auto">Export to Excel</button>
          <button className="bg-white text-blue-500 px-4 py-2 rounded-md shadow-md w-full md:w-auto mt-2 md:mt-0 md:ml-2">+ Add New User</button>
        </div>
      </div>
      <div className="">
        <table className="w-full mt-4 border-collapse">
          <thead>
            <tr className="bg-gray-200">
              <th className="py-2">Name</th>
              <th className="py-2 px-4">Phone</th>
              <th className="py-2 px-4">License</th>
              <th className="py-2 px-4">Total Booked Car</th>
              <th className="py-2 px-4">View Booked Car</th>
            </tr>
          </thead>
          <tbody>
           {users?.map((user)=>
        <>
            <tr  className="border-b">
              {console.log("yser",user)}
                <td className="py-2 px-4">{user.name}</td>
                <td className="py-2 ">{user.phone} </td>
                <td className="py-2 px-4">{user.license || "No license"}</td>
                <td className={`py-2 px-4 `}> {user.rentals.length}</td>
                <td className="py-2 px-4">
                  <Link to={'/userrentaldetail'} state={{ user }} className="text-blue-500">View Booked Car</Link>

                </td>
              </tr>
        </>
        )}
          
          
          </tbody>
        </table>
      </div>
    </div>
  </div>
  )
}

export default AdminUsertable