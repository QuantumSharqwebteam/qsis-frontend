import {useState, useEffect} from "react";
import axios from "axios";
// import {useParams} from "react-router-dom"


const EditCareer = () => {
  const [role, setRole] = useState("");
  const [experience, setExperience] = useState("");
  const [requirements, setRequirements] = useState("");
  const [salary, setSalary] = useState("")

  const [careers, setCareers] = useState([])

  // const [createCareer, setCreateCareer] = useState()
  console.log(careers)

  const [showCreate, setShowCreate] = useState(false)

  // const [showEdit, setShowEdit] = useState(true)

  // const {id} = useParams()

 

  useEffect(() => {
    fetch(`http://localhost:5000/career`)
    .then((res) => res.json())
    .then(data => {
        console.log(data);
        setCareers(data)})
    .catch((err) => console.error(err))
}, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:5000/career", { role, experience, salary, requirements })
      .then((result) => console.log(result))
      .catch((err) => console.log(err));
  };

  const deleteCareer = (id) => {
    console.log(id)
    axios
    .delete(`http://localhost:5000/career/${id}`)
    .then((result) => console.log("result", result))
    .catch((err) => console.log("error : ", err));
  }
  console.log(role, requirements, experience, salary);
  return (
<>
<div className="flex justify-center items-center flex-col mb-6">    
 <button className="bg-green-500 px-4 py-2 rounded-md text-white cursor-pointer text-center" onClick={() => setShowCreate(!showCreate)}>Create Job</button>
        { showCreate &&
          <form
          className="w-1/2 md:w-9/12 mx-auto mb-4 md:mb-0"
          onSubmit={handleSubmit}
        >
          <div className="text-center">
            <h1 className="text-3xl font-semibold">Create a Job</h1>
          </div>

          <div className="flex flex-col py-3">
            <label htmlFor="role" className="py-2 font-medium">
              Role
            </label>
            <input
              className="border border-slate-400 rounded-md px-2 py-1"
              type="text"
              id="role"
              name="role"
              placeholder="Type the role"
              required
              onChange={(e) => setRole(e.target.value)}
              value={role}
            />
          </div>

          <div className="flex flex-col py-3">
            <label htmlFor="experience" className="py-2 font-medium">
              Experience
            </label>
            <input
              className="border border-slate-400 rounded-md px-2 py-1"
              type="text"
              id="experience"
              name="experience"
              placeholder="Experience you're expecting (Symbols like + must not be used) Eg: 6 or more years"
              required
              onChange={(e) => setExperience(e.target.value)}
              value={experience}
            />
          </div>

          <div className="flex flex-col py-3">
            <label htmlFor="requirements" className="py-2 font-medium">
            Requirements
            </label>
            <input
              className="border border-slate-400 rounded-md px-2 py-1"
              type="requirements"
              id="requirements"
              name="requirements"
              placeholder="Enter all requirements"
              required
              onChange={(e) => setRequirements(e.target.value)}
              value={requirements}
            />
          </div>

          <div className="flex flex-col py-3">
            <label htmlFor="salary" className="py-2 font-medium">
              Salary
            </label>
            <input
              className="border border-slate-400 rounded-md px-2 py-1"
              type="text"
              id="salary"
              name="salary"
              placeholder="Enter Salary range Eg: 4LPA - 6LPA"
              required
              onChange={(e) => setSalary(e.target.value)}
              value={salary}
            />
          </div>

          <button
            type="submit"
            className="bg-emerald-500 hover:bg-emerald-600 transition duration-300 w-full py-2 my-2 text-black rounded-md uppercase font-medium"
          >
            Create Job Post
          </button>
        </form>}
        </div>


        <div className="w-full flex justify-center items-center">
        <table className="px-5 py-5 bg-[#E8E7E7] my-10">

          <thead  className="px-3 py-2">
            <tr>
            <th className="px-5 py-2 border border-1 border-black">Role</th>
            <th className="px-5 py-2 border border-1 border-black">Requirements</th>
            <th className="px-5 py-2 border border-1 border-black">Experience</th>
            <th className="px-5 py-2 border border-1 border-black">Salary</th>
            {/* <th className="px-5 py-2 border border-1 border-black">Edit</th> */}
            <th className="px-5 py-2 border border-1 border-black">Delete</th>
            </tr>
          </thead>

          <tbody className="px-3 py-2">
            {
              careers && careers.map((item) => {
                return(<tr key={item._id}>
                  <td className="px-5 py-2 border border-1 border-black">{item.role}</td>
                  <td className="px-5 py-2 border border-1 border-black">{item.requirements}</td>
                  <td className="px-5 py-2 border border-1 border-black">{item.experience}</td>
                  <td className="px-5 py-2 border border-1 border-black">{item.salary}</td>
                  {/* <td className="px-5 py-2 border border-1 border-black">
                  <button className="bg-green-500 px-4 py-2 rounded-md text-white cursor-pointer" onClick={() => setShowEdit(!showEdit)}>Edit</button>
                  </td> */}
                  <td className="px-5 py-2 border border-1 border-black">
                  <button className="bg-red-500 px-4 py-2 rounded-md text-white cursor-pointer" onClick={() => deleteCareer(item._id)}>Delete</button>
                  </td>
                </tr>)
              })
            }
          </tbody>
        </table>
        </div>
 </>
  );
};

export default EditCareer;
