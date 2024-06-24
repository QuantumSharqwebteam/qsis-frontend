import {useEffect, useState} from "react";
import axios from "axios";
// import {useParams} from "react-router-dom"

const EditProducts = () => {

  // const {id} = useParams();

const [projects, setProjects] = useState([])

const [showCreate, setShowCreate] = useState(false)

const [showEdit, setShowEdit] = useState(false)


  const [projectName, setProjectName] = useState("") 
  const [projectOverview, setProjectOverview] = useState("")
  const [projectFeatures, setProjectFeatures] = useState("")
  const [projectImpact, setProjectImpact] = useState("")

  useEffect(() => {
    FetchProjects();
}, []);

const FetchProjects = () => {
  fetch(`http://localhost:5000/projects`)
    .then((res) => res.json())
    .then(data => {
        console.log(data);
        setProjects(data)})
    .catch((err) => console.error(err))
}
const handleSubmit = (e) => {
  e.preventDefault();
  axios
    .post("http://localhost:5000/projects", { projectName, projectOverview, projectFeatures, projectImpact })
    .then((result) => {console.log(result);
                      setShowCreate(!showCreate);
    })
    .catch((err) => console.log(err));
};

const deleteCareer = (id) => {
  console.log(id)
  axios
  .delete(`http://localhost:5000/projects/${id}`)
  .then((result) => console.log("result", result))
  .catch((err) => console.log("error : ", err));
}

// const handleProjectEdit = (id) => {
//   console.log(id);
//   return id;
// };

// const id = handleProjectEdit();

// console.log(id);




  return (
  <div className="w-full flex justify-center items-center flex-col mb-6">
    <button className="bg-green-500 px-4 py-2 rounded-md text-white cursor-pointer text-center mb-10"
    onClick={() => {setShowCreate(!showCreate)}}
    >Create new Project</button>

    {
      showCreate && <div className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center">
        <div className="bg-white p-4 rounded-md w-full md:w-1/2 z-10">
        <form
          className="w-1/2 md:w-9/12 mx-auto mb-4 md:mb-0"
          onSubmit={handleSubmit}
        >
          <div className="text-center">
            <h1 className="text-3xl font-semibold">Create a Job</h1>
          </div>

          <div className="flex flex-col py-3">
            <label htmlFor="projectName" className="py-2 font-medium">
              Project Name
            </label>
            <input
              className="border border-slate-400 rounded-md px-2 py-1"
              type="text"
              id="projectName"
              name="projectName"
              placeholder="Type the projectName"
              required
              onChange={(e) => setProjectName(e.target.value)}
              value={projectName}
            />
          </div>

          <div className="flex flex-col py-3">
            <label htmlFor="projectOverview" className="py-2 font-medium">
              Project Overview
            </label>
            <textarea
            className="border border-slate-400 rounded-md px-2 py-1"
            value={projectOverview} name="" id="projectOverview" cols="12" rows="2" placeholder="Enter the overview of the project"
            onChange={(e) => setProjectOverview(e.target.value)}
            ></textarea>
          </div>

          <div className="flex flex-col py-3">
            <label htmlFor="projectFeatures" className="py-2 font-medium">
            Project Features
            </label>
            <input
              className="border border-slate-400 rounded-md px-2 py-1"
              type="projectFeatures"
              id="projectFeatures"
              name="projectFeatures"
              placeholder="Enter all projectFeatures"
              required
              onChange={(e) => setProjectFeatures(e.target.value)}
              value={projectFeatures}
            />
          </div>

          <div className="flex flex-col py-3">
            <label htmlFor="projectImpact" className="py-2 font-medium">
            Project Impact
            </label>
            <input
              className="border border-slate-400 rounded-md px-2 py-1"
              type="text"
              id="projectImpact"
              name="projectImpact"
              placeholder="Enter Impact of the project"
              required
              onChange={(e) => setProjectImpact(e.target.value)}
              value={projectImpact}
            />
          </div>

          <div className="flex gap-4">
          <button
            type="submit"
            className="bg-emerald-500 hover:bg-emerald-600 transition duration-300 w-1/2  py-2 my-2 text-black rounded-md uppercase font-medium"
          >
            Create new Project
          </button>

          <button className="bg-red-500 hover:bg-red-600 transition duration-300 w-1/2  py-2 my-2 text-black rounded-md uppercase font-medium"
          onClick={() => setShowCreate(!showCreate)}
          >Cancel</button>

          </div>
        </form>
        </div>
      </div>
    }

    {
      showEdit && <div className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center">
      <div className="bg-white p-4 rounded-md w-1/2 z-10">
      <form
        className="w-1/2 md:w-9/12 mx-auto mb-4 md:mb-0"
        onSubmit={handleSubmit}
      >
        <div className="text-center">
          <h1 className="text-3xl font-semibold">Edit this Project</h1>
        </div>

        <div className="flex flex-col py-3">
          <label htmlFor="projectName" className="py-2 font-medium">
            Project Name
          </label>
          <input
            className="border border-slate-400 rounded-md px-2 py-1"
            type="text"
            id="projectName"
            name="projectName"
            placeholder="Type the projectName"
            required
            onChange={(e) => setProjectName(e.target.value)}
            value={projectName}
          />
        </div>

        <div className="flex flex-col py-3">
          <label htmlFor="projectOverview" className="py-2 font-medium">
            Project Overview
          </label>
          <textarea
          className="border border-slate-400 rounded-md px-2 py-1"
          value={projectOverview} name="" id="projectOverview" cols="12" rows="2" placeholder="Enter the overview of the project"
          onChange={(e) => setProjectOverview(e.target.value)}
          ></textarea>
        </div>

        <div className="flex flex-col py-3">
          <label htmlFor="projectFeatures" className="py-2 font-medium">
          Project Features
          </label>
          <input
            className="border border-slate-400 rounded-md px-2 py-1"
            type="projectFeatures"
            id="projectFeatures"
            name="projectFeatures"
            placeholder="Enter all projectFeatures"
            required
            onChange={(e) => setProjectFeatures(e.target.value)}
            value={projectFeatures}
          />
        </div>

        <div className="flex flex-col py-3">
          <label htmlFor="projectImpact" className="py-2 font-medium">
          Project Impact
          </label>
          <input
            className="border border-slate-400 rounded-md px-2 py-1"
            type="text"
            id="projectImpact"
            name="projectImpact"
            placeholder="Enter Impact of the project"
            required
            onChange={(e) => setProjectImpact(e.target.value)}
            value={projectImpact}
          />
        </div>

        <div className="flex gap-4">
        <button
          type="submit"
          className="bg-emerald-500 hover:bg-emerald-600 transition duration-300 w-1/2  py-2 my-2 text-black rounded-md uppercase font-medium"
        >
          Update Project
        </button>

        <button className="bg-red-500 hover:bg-red-600 transition duration-300 w-1/2  py-2 my-2 text-black rounded-md uppercase font-medium"
        onClick={() => setShowEdit(!showEdit)}
        >Cancel</button>

        </div>
      </form>
      </div>
    </div>
    }

  <div className="flex justify-center items-center">
    
  <table>
    <thead>
      <tr>
        <th className="border border-1 border-black px-3 py-2">Project Name</th>
        <th className="border border-1 border-black px-3 py-2">Action</th>
      </tr>
    </thead>

    <tbody>
      {
        projects.map((project) => {
          return (
          <tr key={project._id}>
            <td className="border border-1 border-black px-3 py-2">{project.projectName}</td>
            <td className="border border-1 border-black px-3 py-2 flex gap-3">
              <button className="bg-red-500 px-3 rounded-md py-2 cursor-pointer"
              onClick={() =>deleteCareer(project._id)}
              >Delete</button>
            </td>
          </tr>
          )
        })
      }
    </tbody>
  </table>
  </div>
  </div>
  );
};

export default EditProducts;
