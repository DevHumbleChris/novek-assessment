import { useEffect } from "react"
import SignupForm from "../components/SignupForm"
import { useNavigate } from "react-router-dom"

export default function Signup() {
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
                    <SignupForm />
                </div>
            </div>
        </section>
    )
}
