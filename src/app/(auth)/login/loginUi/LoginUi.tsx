"use client";
import {
    FaEnvelope,
    FaLock,
    FaEye,
    FaCheckCircle,
    FaTimesCircle,
} from 'react-icons/fa'

import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { loginPaylodType, loginSchema } from '@/schema/login.schema'
import { ErrorMessage } from '@/ServicesUi/ServicesUi';

import { signIn } from 'next-auth/react';
import { toast } from 'sonner';
import { useRouter } from 'next/navigation';
import ClipLoader from 'react-spinners/ClipLoader'
import Link from 'next/link';


const defaultValues = {
    email: '',
    password: '',
}






export default function LoginUi() {

    const router = useRouter();


    const { handleSubmit, register, formState: { errors, isSubmitting } } = useForm<loginPaylodType>({
        defaultValues,
        resolver: zodResolver(loginSchema),
        mode: 'all',
    })


    async function loginsubmit(formvalue: loginPaylodType) {
        // console.log("FORM VALUE:", formvalue);

        const res = await signIn("credentials", { ...formvalue, redirect: false, callbackUrl: '/' });

        // console.log(res);

        if (res?.ok) {
            toast(
                <div className="flex items-center gap-2">
                    <FaCheckCircle className="text-green-500 text-lg" />
                    <span>Login successful</span>
                </div>,
                { duration: 3000 }

            );

            router.push('/');
        } else {
            toast.error(
                <div className="flex items-center gap-3">
                    <FaTimesCircle className="text-red-500 text-xl" />
                    <span className="text-sm font-medium">
                        {res?.error || 'Something went wrong!'}
                    </span>
                </div>,
                {
                    icon: null,
                    style: {
                        background: '#FEF2F2',
                        color: '#991B1B',
                        border: '1px solid #FECACA',
                        borderRadius: '10px',
                        padding: '12px 16px'
                    }
                }
            );
        }
    }




    return (
        <>
            {/* form */}
            <form onSubmit={handleSubmit(loginsubmit, (errors) => console.log("validation errors:", errors))} className="space-y-6">
                {/* email */}
                <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Email Address
                    </label>

                    <div className="relative">
                        <input
                            {...register('email')}
                            type="email"
                            placeholder="Enter your email"
                            className="w-full px-4 py-3 pl-12 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-100"
                        />
                        <FaEnvelope className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                    </div>
                    {errors.email?.message && <ErrorMessage error={errors.email?.message} />}
                </div>

                {/* password */}
                <div>
                    <div className="flex items-center justify-between mb-2">
                        <label className="text-sm font-semibold text-gray-700">
                            Password
                        </label>

                        <Link href={'/'} className="text-sm text-primary-600 hover:text-primary-700">
                            Forgot Password?
                        </Link>
                    </div>

                    <div className="relative">
                        <input
                            {...register('password')}
                            type="password"
                            placeholder="Enter your password"
                            className="w-full px-4 py-3 pl-12 pr-12 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-100"
                        />
                        <FaLock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                        <button
                            type="button"
                            className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                        >
                            <FaEye />
                        </button>
                    </div>
                    {errors.password?.message && (<ErrorMessage error={errors.password?.message} />)}
                </div>

                {/* remember */}
                <div className="flex items-center">
                    <input type="checkbox" className="mr-2 accent-primary-600" />
                    <span className="text-sm text-gray-700">
                        Keep me signed in
                    </span>
                </div>

                {/* submit */}
                <button
                    type='submit'
                    className={`${isSubmitting ? "w-full bg-green-300  text-white py-3 rounded-xl font-semibold text-lg shadow-lg" : "w-full bg-green-600 cursor-pointer text-white py-3 rounded-xl hover:bg-green-700 transition font-semibold text-lg shadow-lg"}`}
                >
                    {isSubmitting ?
                        <>
                            <div className='flex justify-center items-center'>
                                <ClipLoader size={20} color='white' className='my-auto' />
                                <span className='ms-4'>Signing in...</span>
                            </div>
                        </>
                        : 'Sign In'}
                </button>

                {/* validation message */}
                {errors.root?.message && (
                    <div className="w-full bg-red-600 text-white py-3 px-4 rounded-xl transition font-semibold text-sm shadow-md">
                        {errors.root.message}
                    </div>
                )}
            </form>
        </>
    )
}

