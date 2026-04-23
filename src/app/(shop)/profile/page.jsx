"use client";

import { X } from "lucide-react";
import Link from "next/link";
import { FaUser } from "react-icons/fa6";
import {
    ChevronRight,
    Plus,
    User,
    Save,
    Lock,
    Eye,
} from "lucide-react";
import { FaMapMarkerAlt } from "react-icons/fa";
import { IoSettingsSharp } from "react-icons/io5";
import { useState } from "react";
import {ErrorMessage, FeaturesSection} from '../../../ServicesUi/ServicesUi'
import { useForm } from "react-hook-form";
// import {changePasswordSchema,changePasswordPaylodType} from '../../../schema/changePassowrd.schema'


export default function page() {

    const [open, setOpen] = useState(false);
    const [setting, setSetting] = useState(false);
    const [actev,setActev] = useState(1);

    // const {handleSubmit, register, formState: { errors, isSubmitting }}  = useForm<changePasswordPaylodType>({
    //     // defaultValues,
    //     // resolver:zodResolver(changePasswordSchema)
    //     resolver:zodResolver(changePasswordPaylodType),
    //     mode:'onSubmit',
    // })

    async function submitChangePass(formValue) {
        console.log(formValue);
        
    }


    return (
        <>
            {/* 1 */}
            <div className="bg-linear-to-br from-green-600 via-green-500 to-green-400 text-white">
                <div className="container mx-auto px-4 py-10 sm:py-12">

                    <nav className="flex items-center gap-2 text-sm text-white/70 mb-6">
                        <Link href="/" className="hover:text-white transition-colors duration-200">
                            Home
                        </Link>
                        <span className="text-white/40">/</span>
                        <span className="text-white font-medium">My Account</span>
                    </nav>

                    <div className="flex items-center gap-5">

                        <div className="w-16 h-16 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center shadow-xl ring-1 ring-white/30">
                            <FaUser className="w-8 h-8 text-white" />
                        </div>

                        <div>
                            <h1 className="text-2xl sm:text-3xl font-bold tracking-tight">
                                My Account
                            </h1>
                            <p className="text-white/80 mt-1">
                                Manage your addresses and account settings
                            </p>
                        </div>

                    </div>

                </div>
            </div>

            {/* 2 */}
            <div className="container mx-auto px-4 py-8">
                <div className="flex flex-col lg:flex-row gap-6 lg:gap-8">

                    {/* Sidebar */}
                    <aside className="w-full lg:w-72 shrink-0">
                        <nav className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">

                            <div className="p-4 border-b border-gray-100">
                                <h2 className="font-bold text-gray-900">My Account</h2>
                            </div>

                            <ul className="p-2">

                                {/* My Addresses */}
                                <li>
                                    <button
                                        onClick={() => (setSetting(false),setActev(1))}
                                        className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 group bg-green-50 ${actev === 1 ? `text-green-700` : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'}`}
                                    >
                                        <div className= {`w-9 h-9 rounded-lg flex items-center justify-center text-gray-900 ${actev === 1 ? 'bg-green-500' : 'bg-gray-100 text-gray-500 group-hover:bg-gray-200'}  text-white`}>
                                            <FaMapMarkerAlt className={`w-4 h-4 ${actev === 1 ? 'text-white' : 'text-gray-600'}`} />
                                        </div>

                                        <span className="font-medium flex-1">My Addresses</span>

                                        <ChevronRight className="w-4 h-4 text-green-500" />
                                    </button>
                                </li>

                                {/* Settings */}
                                <li>
                                    <button
                                        onClick={() => (setSetting(true),setActev(0))}
                                        className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 group ${actev === 0 ? 'text-green-700' : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900 '}`}
                                    >
                                        <div className={`w-9 h-9 rounded-lg flex items-center justify-center ${actev === 0 ? 'bg-green-500' : 'bg-gray-100 text-gray-500 group-hover:bg-gray-200'}  text-white`}>
                                            <IoSettingsSharp className={`w-4 h-4 ${actev === 0 ? 'text-white' : 'text-gray-600'}`} />
                                        </div>

                                        <span className="font-medium flex-1">Settings</span>

                                        <ChevronRight className="w-4 h-4 text-gray-400" />
                                    </button>
                                </li>

                            </ul>
                        </nav>
                    </aside>

                    {/* My Addresses */}
                    {!setting && <main className="flex-1 min-w-0">

                        <div className="flex items-center justify-between mb-6">
                            <div>
                                <h2 className="text-xl font-bold text-gray-900">My Addresses</h2>
                                <p className="text-gray-500 text-sm mt-1">
                                    Manage your saved delivery addresses
                                </p>
                            </div>

                            <button onClick={() => setOpen(!open)} className="cursor-pointer inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-green-600 text-white font-semibold hover:bg-green-700 transition-colors shadow-lg shadow-green-600/25">
                                <Plus className="w-4 h-4" />
                                Add Address
                            </button>
                        </div>

                        {/* Empty State */}
                        <div className="bg-white rounded-3xl border border-gray-100 p-12 text-center">

                            <div className="w-20 h-20 rounded-full bg-gray-100 flex items-center justify-center mx-auto mb-5">
                                <FaMapMarkerAlt className="w-8 h-8 text-gray-400" />
                            </div>

                            <h3 className="text-lg font-bold text-gray-900 mb-2">
                                No Addresses Yet
                            </h3>

                            <p className="text-gray-500 mb-6 max-w-sm mx-auto">
                                Add your first delivery address to make checkout faster and easier.
                            </p>

                            <button onClick={() => setOpen(!open)} className="cursor-pointer inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-green-600 text-white font-semibold hover:bg-green-700 transition-colors shadow-lg shadow-green-600/25">
                                <Plus className="w-4 h-4" />
                                Add Your First Address
                            </button>

                        </div>

                    </main>}

                    {/* Settings */}
                    {setting &&
                    <main className="flex-1 min-w-0">

                            <div className="space-y-6">

                                {/* Header */}
                                <div className="mb-6">
                                    <h2 className="text-xl font-bold text-gray-900">
                                        Account Settings
                                    </h2>
                                    <p className="text-gray-500 text-sm mt-1">
                                        Update your profile information and change your password
                                    </p>
                                </div>

                                {/* Profile Section */}
                                <div className="bg-white rounded-3xl border border-gray-100 shadow-sm overflow-hidden">

                                    <div className="p-6 sm:p-8 border-b border-gray-100">

                                        <div className="flex items-center gap-4 mb-6">

                                            <div className="w-14 h-14 rounded-2xl bg-green-100 flex items-center justify-center">
                                                <User className="w-6 h-6 text-green-600" />
                                            </div>

                                            <div>
                                                <h3 className="font-bold text-gray-900">
                                                    Profile Information
                                                </h3>
                                                <p className="text-sm text-gray-500">
                                                    Update your personal details
                                                </p>
                                            </div>

                                        </div>

                                        <form className="space-y-5">

                                            <div>
                                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                                    Full Name
                                                </label>
                                                <input
                                                    type="text"
                                                    placeholder="Enter your name"
                                                    defaultValue="Ali"
                                                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-green-500 focus:ring-2 focus:ring-green-500/20 outline-none transition-all"
                                                />
                                            </div>

                                            <div>
                                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                                    Email Address
                                                </label>
                                                <input
                                                    type="email"
                                                    placeholder="Enter your email"
                                                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-green-500 focus:ring-2 focus:ring-green-500/20 outline-none transition-all"
                                                />
                                            </div>

                                            <div>
                                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                                    Phone Number
                                                </label>
                                                <input
                                                    type="tel"
                                                    placeholder="01xxxxxxxxx"
                                                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-green-500 focus:ring-2 focus:ring-green-500/20 outline-none transition-all"
                                                />
                                            </div>

                                            <div className="pt-4">
                                                <button
                                                    type="submit"
                                                    className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-green-600 text-white font-semibold hover:bg-green-700 transition-colors shadow-lg shadow-green-600/25"
                                                >
                                                    <Save className="w-4 h-4" />
                                                    Save Changes
                                                </button>
                                            </div>

                                        </form>

                                    </div>

                                    <div className="p-6 sm:p-8 bg-gray-50">
                                        <h3 className="font-bold text-gray-900 mb-4">
                                            Account Information
                                        </h3>

                                        <div className="space-y-3 text-sm">

                                            <div className="flex items-center justify-between">
                                                <span className="text-gray-500">User ID</span>
                                                <span className="font-mono text-gray-700">—</span>
                                            </div>

                                            <div className="flex items-center justify-between">
                                                <span className="text-gray-500">Role</span>
                                                <span className="px-3 py-1 rounded-lg bg-green-100 text-green-700 font-medium capitalize">
                                                    user
                                                </span>
                                            </div>

                                        </div>
                                    </div>

                                </div>

                                {/* Password Section */}
                                <div className="bg-white rounded-3xl border border-gray-100 shadow-sm overflow-hidden">

                                    <div className="p-6 sm:p-8">

                                        <div className="flex items-center gap-4 mb-6">

                                            <div className="w-14 h-14 rounded-2xl bg-amber-100 flex items-center justify-center">
                                                <Lock className="w-6 h-6 text-amber-600" />
                                            </div>

                                            <div>
                                                <h3 className="font-bold text-gray-900">
                                                    Change Password
                                                </h3>
                                                <p className="text-sm text-gray-500">
                                                    Update your account password
                                                </p>
                                            </div>

                                        </div>


                {/* -------------------------- form ------------------------- */}
                                        <form onSubmit={()=> handleSubmit(submitChangePass)} className="space-y-5">

                                            <div>
                                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                                    Current Password
                                                </label>
                                                <input
                                                // {...register('password')}
                                                    type="password"
                                                    placeholder="Enter your current password"
                                                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 outline-none transition-all pr-12"
                                                />
                                                {/* {errors.password.message && <ErrorMessage error={errors.password.message}/>} */}
                                            </div>

                                            <div>
                                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                                    New Password
                                                </label>
                                                <input
                                                // {...register('rePassword')}
                                                    type="password"
                                                    placeholder="Enter your new password"
                                                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 outline-none transition-all"
                                                />
                                                <p className="text-xs text-gray-500 mt-1">
                                                    Must be at least 6 characters
                                                </p>
                                                {/* {errors.rePassword?.message && <ErrorMessage error={errors.rePassword?.message} />} */}
                                            </div>

                                            <div>
                                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                                    Confirm New Password
                                                </label>
                                                <input
                                                // {...register('newPassword')}
                                                    type="password"
                                                    placeholder="Confirm your new password"
                                                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 outline-none transition-all"
                                                />
                                            </div>
                                            {/* {errors.newPassword?.message && <ErrorMessage error={errors.newPassword?.message} />} */}

                                            <div className="pt-4">
                                                <button
                                                    type="submit"
                                                    className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-amber-600 text-white font-semibold hover:bg-amber-700 transition-colors shadow-lg shadow-amber-600/25"
                                                >
                                                    <Lock className="w-4 h-4" />
                                                    Change Password
                                                </button>
                                            </div>

                                        </form>

                                    </div>

                                </div>

                            </div>

                    </main>}

                </div>
            </div>






            {/* card  */}
            {open && <div className="fixed inset-0 flex items-center justify-center bg-black/40 backdrop-blur-sm z-50">

                <div className="relative bg-white rounded-3xl shadow-2xl w-full max-w-lg p-6 sm:p-8 animate-in zoom-in-95 duration-200">
                    {/* Header */}
                    <div className="flex items-center justify-between mb-6">
                        <h2 className="text-xl font-bold text-gray-900">
                            Add New Address
                        </h2>

                        <button
                            onClick={() => setOpen(!open)}
                            className="cursor-pointer w-9 h-9 rounded-lg bg-gray-100 text-gray-600 hover:bg-gray-200 flex items-center justify-center transition-colors"
                        >
                            <X className="w-4 h-4" />
                        </button>
                    </div>

                    {/* Form */}
                    <form className="space-y-5">

                        {/* Address Name */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Address Name
                            </label>
                            <input
                                type="text"
                                placeholder="e.g. Home, Office"
                                required
                                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-green-500 focus:ring-2 focus:ring-green-500/20 outline-none transition-all"
                            />
                        </div>

                        {/* Full Address */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Full Address
                            </label>
                            <textarea
                                rows={3}
                                placeholder="Street, building, apartment..."
                                required
                                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-green-500 focus:ring-2 focus:ring-green-500/20 outline-none transition-all resize-none"
                            />
                        </div>

                        {/* Phone + City */}
                        <div className="grid grid-cols-2 gap-4">

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Phone Number
                                </label>
                                <input
                                    type="tel"
                                    placeholder="01xxxxxxxxx"
                                    required
                                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-green-500 focus:ring-2 focus:ring-green-500/20 outline-none transition-all"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    City
                                </label>
                                <input
                                    type="text"
                                    placeholder="Cairo"
                                    required
                                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-green-500 focus:ring-2 focus:ring-green-500/20 outline-none transition-all"
                                />
                            </div>

                        </div>

                        {/* Buttons */}
                        <div className="flex items-center gap-3 pt-4">

                            <button
                                type="button"
                                onClick={() => setOpen(!open)}
                                className="cursor-pointer flex-1 py-3 px-6 rounded-xl bg-gray-100 text-gray-700 font-semibold hover:bg-gray-200 transition-colors"
                            >
                                Cancel
                            </button>

                            <button
                                type="submit"
                                className="cursor-pointer flex-1 py-3 px-6 rounded-xl bg-green-600 text-white font-semibold hover:bg-green-700 transition-colors shadow-lg shadow-green-600/25"
                            >
                                Add Address
                            </button>

                        </div>

                    </form>
                </div>
            </div>}

            <FeaturesSection/>
        </>
    );
}


