
import { useNavigate } from 'react-router'

function Home() {

  const navigate = useNavigate()

  function goToAbout() {
    navigate('/about')
  }

  return (
    <div>
      <h1>Welcome to My Portfolio</h1>

      <p>Hello! I am learning React and React Router.</p>

      <button onClick={goToAbout}>
        Go to About
      </button>
    </div>
  )
}

export default Home
