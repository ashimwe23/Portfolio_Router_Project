import { useParams } from "react-router-dom";

function ProjectDetails() {
  const { id } = useParams();

  return (
    <div className="min-h-screen bg-black text-white p-10">
      <h1 className="text-3xl font-bold">
        Project Details
      </h1>

      <p className="mt-4">
        Project ID: {id}
      </p>
    </div>
  );
}

export default ProjectDetails;