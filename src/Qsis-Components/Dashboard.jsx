// import React from 'react'
import {Link} from "react-router-dom"

const Dashboard = () => {
  return (
    <div className="w-full mb-0 h-1/2 bg-cyan-300 py-10 px-6">
    <h2 className="text-3xl px-2 py-4 font-bold text-center">Welcome, <span className="text-green-800">Quantum Sharq Innovative Solutions</span> </h2>
  <nav>
      <ul className=" items-center flex justify-center  gap-4 font-bold text-xl px-6 py-10 capitalize">
        
          <Link to={"/signup"} className="">
              <li className="bg-[#17C6D4] px-3 py-1 rounded-md cursor-pointer">Give Access</li>
          </Link>

          {/* <Link to={'/viewAccess'} className="">
              <li className="bg-[#17C6D4] px-3 py-1 rounded-md cursor-pointer">View Access</li>
          </Link> */}

          <Link to={"/viewEnquiries"} className="">
              <li className="bg-[#17C6D4] px-3 py-1 rounded-md cursor-pointer">Edit Careers</li>
          </Link>

          <Link to={"/viewEnquiries"} className="">
              <li className="bg-[#17C6D4] px-3 py-1 rounded-md cursor-pointer">Edit Products</li>
          </Link>

          {/* <Link to={'/signup'} className="">
              <li className="bg-[#17C6D4] px-3 py-1 rounded-md cursor-pointer">Post Jobs</li>
          </Link> */}

         


      </ul>
  </nav>
</div>
  )
}

export default Dashboard