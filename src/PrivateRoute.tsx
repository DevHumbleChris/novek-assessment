import { Navigate, Outlet } from "react-router-dom";

export default function PrivateRoute() {
    const isAuthenticated = localStorage.getItem('authenticated')

    return isAuthenticated ? (
        <main className="flex flex-col">
            <Outlet />
        </main>
    ) : <Navigate to="/" />;
}
