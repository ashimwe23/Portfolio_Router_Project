
import { useNavigate } from 'react-router'

function Home() {

  const navigate = useNavigate()

  function goToAbout() {
    navigate('/about')
  }

  function goToContact() {
    navigate('/contact')
  }

  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center gap-6">

      <h1 className="text-4xl font-bold">
        Welcome to My Portfolio
      </h1>

      <p className="text-gray-300">
        Hello! I am learning React and React Router.
      </p>

      <div className="flex gap-4">

        <button
          onClick={goToAbout}
          className="bg-blue-600 px-6 py-3 rounded-lg hover:bg-blue-800 transition"
        >
          Go to About
        </button>

        <button
          onClick={goToContact}
          className="bg-green-600 px-6 py-3 rounded-lg hover:bg-green-800 transition"
        >
          Go to Contact
        </button>

      </div>

    </div>
  )
}

export default Home
