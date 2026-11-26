
import { Link } from "react-router-dom";

function Projects() {
  const projects = [
    { id: 1, name: "Portfolio Website" },
    { id: 2, name: "Student Management System" },
    { id: 3, name: "Tourism Demand Predictor" }
  ];

  return (
    <div>
      <h2 className="text-xl font-semibold mb-6">
        Here are my projects
      </h2>

      {projects.map((project) => (
        <div key={project.id} className="mb-5">
          <h3 className="text-xl mb-2">
            {project.name}
          </h3>

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
