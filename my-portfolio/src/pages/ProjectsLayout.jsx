


import { Outlet } from "react-router-dom";

function ProjectsLayout() {
  return (
    <div className="min-h-screen bg-black text-white p-8">
      <h1 className="text-3xl font-bold mb-6">
        My Projects
      </h1>

      <Outlet />
    </div>
  );
}

export default ProjectsLayout;

