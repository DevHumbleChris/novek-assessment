import { useEffect } from "react"
import SigninForm from "./components/SigninForm"
import { useNavigate } from "react-router-dom"

function App() {
  const isAuthenticated = localStorage.getItem('authenticated')
  const navigate = useNavigate()

  useEffect(() => {
    if (isAuthenticated) {
      navigate('/user/dashboard')
    }
  }, [isAuthenticated, navigate])
  return (
    <section className="grid min-h-screen place-items-center">
      <div className="p-2 w-[30rem] border bg-gray-50 rounded-3xl">
        <div className="p-10 bg-white border shadow-lg rounded-2xl">
          <SigninForm />
        </div>
      </div>
    </section>

  )
}

export default App
