
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  function goToAbout() {
    navigate("/about");
  }

  function goToContact() {
    navigate("/contact");
  }

  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center px-6">

      {/* Welcome section */}
      <div className="text-center max-w-3xl">

        <p className="text-blue-400 text-lg font-semibold mb-4">
          WELCOME TO MY PORTFOLIO
        </p>

        

        <h2 className="text-2xl text-gray-300 mb-6">
          Aspiring Full Stack Developer
        </h2>

        <p className="text-gray-400 text-lg leading-8 mb-10">
          I am passionate about technology and web development.
          I enjoy learning new skills, building websites, and
          creating applications that solve real-world problems.
        </p>

        {/* Navigation buttons */}
        <div className="flex flex-wrap justify-center gap-5">

          <button
            onClick={goToAbout}
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition duration-300"
          >
            About Me
          </button>

          <button
            onClick={goToContact}
            className="border border-blue-500 text-blue-400 hover:bg-blue-600 hover:text-white px-8 py-3 rounded-lg font-semibold transition duration-300"
          >
            Contact Me
          </button>

        </div>

      </div>

    </div>
  );
}

export default Home;
