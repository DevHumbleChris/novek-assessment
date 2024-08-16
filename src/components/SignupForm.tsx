import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod";
import { formSchema, User } from "../types";
import { Icon } from '@iconify/react';
import { useState } from "react";
import { toast } from "sonner";
import { Link, useNavigate } from "react-router-dom";

export default function SignupForm() {
    const navigate = useNavigate()

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: zodResolver(formSchema),
    })

    const [isSigninup, setisSigninup] = useState(false)

    const onSubmit = async (values: unknown) => {
        const data = values as { email: string, password: string }
        try {
            setisSigninup(true)
            const res = (localStorage.getItem('user'))

            const user = res ? JSON.parse(res) as User : null

            if (user?.email === data.email) {
                return toast.error('Email already exists')
            }

            localStorage.setItem('user', JSON.stringify({
                email: data.email,
                password: data.password
            }))

            localStorage.setItem('authenticated', JSON.stringify(true))

            toast.info('Signup successfull')
            navigate('/user/dashboard')
        } catch (error) {
            if (error instanceof Error) {
                toast.error(error.message)
            }
        } finally {
            setisSigninup(false)
        }
    }
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="space-y-3">
                <div>
                    <label htmlFor="name" className="block mb-3 text-sm font-medium text-black">
                        Email
                    </label>
                    <input type="email" {...register("email")} className="block w-full h-12 px-4 py-2 text-blue-500 duration-200 border rounded-lg appearance-none bg-chalk border-zinc-300 placeholder-zinc-300 focus:border-zinc-300 focus:outline-none focus:ring-zinc-300 sm:text-sm" />
                    {
                        errors?.email?.message && (
                            <p className="text-xs text-rose-600 mt-1">{errors?.email?.message as string}</p>
                        )
                    }
                </div>
                <div className="col-span-full">
                    <label htmlFor="password" className="block mb-3 text-sm font-medium text-black">
                        Password
                    </label>
                    <input {...register("password")} className="block w-full h-12 px-4 py-2 text-blue-500 duration-200 border rounded-lg appearance-none bg-chalk border-zinc-300 placeholder-zinc-300 focus:border-zinc-300 focus:outline-none focus:ring-zinc-300 sm:text-sm" placeholder="Type password here..." type="password" />
                    {
                        errors?.password?.message && (
                            <p className="text-xs text-rose-600 mt-1">{errors?.password?.message as string}</p>
                        )
                    }
                </div>
                <div className="col-span-full">
                    <button type="submit" className="inline-flex items-center justify-center w-full h-12 gap-3 px-5 py-3 font-medium text-white duration-200 bg-indigo-700 rounded-xl hover:bg-indigo-700 focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600">
                        {
                            isSigninup ? (
                                <Icon icon="lucide:loader-circle" className="size-5 animate-spin" />
                            ) : (
                                <span>Create Account</span>
                            )
                        }
                    </button>
                </div>
            </div>
            <div className="mt-6">
                <p className="flex mx-auto text-sm font-medium leading-tight text-center text-black">
                    Already have an account?
                    <Link className="ml-auto text-blue-500 hover:text-black" to="/">
                        Sign in
                    </Link>
                </p>
            </div>
        </form>
    )
}
