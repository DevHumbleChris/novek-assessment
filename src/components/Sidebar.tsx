import { Icon } from '@iconify/react';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'sonner';

export default function Sidebar() {
    const navigate = useNavigate()

    const signOut = () => {
        try {
            localStorage.removeItem('authenticated')
            toast.info('Signout successful')

            return navigate("/")
        } catch (error) {
            if (error instanceof Error) {
                toast.error(error.message)
            }
        }
    }
    return (
        <header className="p-4 bg-white shadow-sm sticky w-full backdrop-blur-sm flex items-center justify-between">
            <p className="font-semibold">Dashboard</p>
            <div className='flex items-center gap-3'>
                <Link to="/user/new-freight" className="block text-sm rounded-md bg-indigo-600 px-4 py-2 text-white hover:bg-indigo-400">
                    New Freight
                </Link>
                <button onClick={() => signOut()} className="block text-sm rounded-md bg-rose-600 px-4 py-2 text-white hover:bg-rose-400">
                    <Icon icon="uit:signout" className='size-4' />
                </button>
            </div>
        </header>
    )
}
