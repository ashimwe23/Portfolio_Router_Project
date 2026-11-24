import { Link } from "react-router-dom";

function Projects() {
  const projects = [
    { id: 1, name: "Portfolio Website" },
    { id: 2, name: "Student Management System" },
    { id: 3, name: "Tourism Demand Predictor" }
  ];

  return (
    <div className="min-h-screen bg-black text-white p-10">
      <h1 className="text-4xl font-bold mb-8">
        My Projects
      </h1>

      {projects.map((project) => (
        <div key={project.id} className="mb-5">
          <h2 className="text-xl mb-2">
            {project.name}
          </h2>

          <Link
            to={`/projects/${project.id}`}
            className="text-blue-400 hover:underline"
          >
            View Project
          </Link>
        </div>
      ))}
    </div>
  );
}

export default Projects;