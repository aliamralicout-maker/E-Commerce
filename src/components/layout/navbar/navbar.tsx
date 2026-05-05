'use client';

import Image from "next/image";
import {
  FaTruck, FaGift, FaUserPlus, FaPhoneAlt, FaSearch,
  FaTimes, FaHeart, FaShoppingCart, FaUser, FaBars, FaHeadset,
  FaSignOutAlt, FaCog, FaAddressBook, FaBoxOpen
} from "react-icons/fa";
import { FiUser, FiMail } from "react-icons/fi";
import { FaRegCircleUser } from "react-icons/fa6";
import { PiSignOutBold } from "react-icons/pi";
import logo from '../../../assets/images/freshcart-logo.49f1b44d.svg'
import { signOut, useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import Link from "next/link";


import img from '../../../assets/images/freshcart-logo.49f1b44d.svg'
import { IoSearchSharp } from "react-icons/io5";
import { useCart } from "@/context/CartContext";
import { GetCart } from "@/actions/cart.action";
import { useWishlist } from "@/context/WishlistContext";
import { getAllWishlist } from "@/actions/wishlist.action";
import { LuUser } from "react-icons/lu";







export default function Navbar() {

  const { numOfCartItems, upDateNumOfCartItems } = useCart();
  const { updateNumOfWishlistItems, numOfWishlistItems } = useWishlist();


  const [dropDown, setDropDown] = useState<boolean>(false);
  const [isOpen, setIsOpen] = useState(false);

  const session = useSession();
  const userInfo = session.data?.user;

  function logOutHandlar() {
    signOut({
      callbackUrl: '/',
    })
  }





  useEffect(() => {
    GetCart().then((res) => { upDateNumOfCartItems(res?.numOfCartItems) })
    getAllWishlist().then((res) => {
      updateNumOfWishlistItems(res?.data?.length)
    })
  }, [])




  return (
    <>
      <div className="hidden lg:block text-sm border-b border-gray-100">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center h-10">

            {/* Left Section */}
            <div className="flex items-center gap-6 text-gray-500">
              <span className="flex items-center gap-2">
                <FaTruck className="text-green-800 text-xs" />
                <span>Free Shipping on Orders 500 EGP</span>
              </span>
              <span className="flex items-center gap-2">
                <FaGift className="text-green-800 text-xs" />
                <span>New Arrivals Daily</span>
              </span>
            </div>

            {/* Right Section */}
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-4 text-gray-500">
                <Link href="tel:+18001234567" className="flex items-center gap-1.5 hover:text-primary-600 transition-colors">
                  <FaPhoneAlt className="text-xs" />
                  <span>+1 (800) 123-4567</span>
                </Link>
                <Link href="mailto:support@freshcart.com" className="flex items-center gap-1.5 hover:text-primary-600 transition-colors">
                  <FiMail className="text-xs" />
                  <span>support@freshcart.com</span>
                </Link>
              </div>

              <span className="w-px h-4 bg-gray-200"></span>

              {!session.data ? <div className="flex items-center gap-4">
                <Link href="/login" className="flex items-center gap-1.5 text-gray-600 hover:text-primary-600 transition-colors">
                  <FiUser className="text-xs" />
                  <span>Sign In</span>
                </Link>
                <Link href="/register" className="flex items-center gap-1.5 text-gray-600 hover:text-primary-600 transition-colors">
                  <FaUserPlus className="text-xs" />
                  <span>Sign Up</span>
                </Link>
              </div> :
                <div className="flex items-center gap-4">
                  <Link href="/login" className="flex items-center gap-1.5 text-gray-600 hover:text-green-600 transition-colors">
                    <FiUser className="text-lg" />
                    <span className="">{userInfo?.name}</span>
                  </Link>
                  <Link href="/register" onClick={logOutHandlar} className="flex items-center gap-1.5 text-gray-600 hover:text-red-600 transition-colors">
                    <PiSignOutBold className="text-lg" />
                    <span className="">Sign Out</span>
                  </Link>
                </div>
              }
            </div>

          </div>
        </div>
      </div>




      {/* navbar */}
      <header className="sticky top-0 z-40 bg-white shadow-sm">
        <div className="bg-white">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between h-16 lg:h-18 gap-4 lg:gap-8">

              {/* Logo */}
              <Link className="shrink-0" href="/">
                <Image
                  alt="FreshCart"
                  loading="lazy"

                  className="h-6 lg:h-8 w-auto"
                  style={{ color: "transparent" }}
                  src={logo}
                />
              </Link>

              {/* Search Form */}
              <form className="hidden lg:flex flex-1 max-w-2xl">
                <div className="relative w-full">
                  <input
                    type="text"
                    placeholder="Search for products, brands and more..."
                    className="w-full px-5 py-3 pr-12 rounded-full border border-gray-200 bg-gray-50/50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500 transition-all text-sm"
                    defaultValue=""
                  />
                  <button
                    type="submit"
                    className="absolute right-1.5 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-primary-600 text-white flex items-center justify-center hover:bg-primary-700 transition-colors"
                  >
                    <FaSearch className="text-sm" />
                  </button>
                </div>
              </form>

              {/* Navigation */}
              <nav className="hidden xl:flex items-center gap-6">
                <Link className="text-gray-700 hover:text-primary-600 font-medium transition-colors" href="/">
                  Home
                </Link>
                <Link className="text-gray-700 hover:text-primary-600 font-medium transition-colors" href="/products">
                  Shop
                </Link>
                <div className="relative group">
                  <button className="flex items-center gap-1.5 text-gray-700 hover:text-primary-600 font-medium transition-colors py-2">
                    Categories
                  </button>
                  <div className="absolute top-full left-0 pt-1 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                    <div className="bg-white border border-gray-100 rounded-xl shadow-xl py-2 min-w-50">
                      <Link className="block px-4 py-2.5 text-gray-600 hover:text-primary-600 hover:bg-primary-50 transition-colors" href="/categories">All Categories</Link>
                      <Link className="block px-4 py-2.5 text-gray-600 hover:text-primary-600 hover:bg-primary-50 transition-colors" href="/products?category=electronics">Electronics</Link>
                      <Link className="block px-4 py-2.5 text-gray-600 hover:text-primary-600 hover:bg-primary-50 transition-colors" href="/products?category=womens-fashion">Women's Fashion</Link>
                      <Link className="block px-4 py-2.5 text-gray-600 hover:text-primary-600 hover:bg-primary-50 transition-colors" href="/products?category=mens-fashion">Men's Fashion</Link>
                      <Link className="block px-4 py-2.5 text-gray-600 hover:text-primary-600 hover:bg-primary-50 transition-colors" href="/products?category=beauty-health">Beauty & Health</Link>
                    </div>
                  </div>
                </div>
                <Link className="text-gray-700 hover:text-primary-600 font-medium transition-colors" href="/brands">
                  Brands
                </Link>
              </nav>

              {/* Right Icons */}
              <div className="flex items-center gap-1 lg:gap-2">

                {/* Support */}
                <Link className="hidden lg:flex items-center gap-2 pr-3 mr-2 border-r border-gray-200 hover:opacity-80 transition-opacity" href="/contact">
                  <div className="w-10 h-10 rounded-full bg-primary-50 flex items-center justify-center">
                    <FaHeadset className="text-green-800" />
                  </div>
                  <div className="text-xs">
                    <div className="text-gray-400">Support</div>
                    <div className="font-semibold text-gray-700">24/7 Help</div>
                  </div>
                </Link>

                {/* Wishlist */}
                <Link className="relative p-2.5 rounded-full hover:bg-gray-100 transition-colors group" title="Wishlist" href="/wishlist">
                  <FaHeart className="text-2xl text-gray-500 group-hover:text-gray-600 transition-colors" />
                  {numOfWishlistItems !== 0 && numOfWishlistItems !== undefined && <span className="absolute top-0 right-0 w-4.5 h-4.5 rounded-full bg-red-600 text-white text-[10px] font-bold flex items-center justify-center ring-2 ring-white">
                    {numOfWishlistItems}
                  </span>}
                </Link>

                {/* Cart */}
                <Link className="relative p-2.5 rounded-full hover:bg-gray-100 transition-colors group" title="Cart" href="/cart">
                  <FaShoppingCart className="text-2xl text-gray-500 group-hover:text-gray-600 transition-colors" />
                  {numOfCartItems !== 0 && numOfCartItems !== undefined && <span className="absolute top-0 right-0 w-4.5 h-4.5 rounded-full bg-green-600 text-white text-[10px] font-bold flex items-center justify-center ring-2 ring-white">
                    {numOfCartItems}
                  </span>}
                </Link>

                {/* Sign In */}
                {!session.data ? <Link className="hidden lg:flex items-center gap-2 ml-2 px-5 py-2.5 rounded-full bg-green-800 hover:bg-green-900 text-white text-sm font-semibold transition-colors shadow-sm shadow-primary-600/20" href="/login">
                  <FaUser className="text-xs" />
                  Sign In
                </Link> :
                  // AccountDropdown
                  <div className="hidden lg:block relative">

                    {/* Button */}
                    <button onClick={() => setDropDown(!dropDown)} className=" cursor-pointer relative p-2.5 rounded-full hover:bg-gray-100 transition-colors group">
                      <FaRegCircleUser className="text-2xl text-gray-500 group-hover:text-primary-600 transition-colors" />
                    </button>

                    {/* -------------------------------------------------------------------------- */}
                    {/* Dropdown */}
                    {dropDown && <div className="absolute right-0 top-full mt-2 w-64 bg-white border border-gray-100 rounded-2xl shadow-xl transition-all duration-200 origin-top-right scale-95 overflow-hidden">

                      {/* Header */}
                      <div className="p-4 border-b border-gray-100">
                        <div className="flex items-center gap-3">

                          <div className="w-10 h-10 rounded-full bg-primary-100 flex items-center justify-center">
                            <FaRegCircleUser className="text-xl text-primary-600" />
                          </div>

                          <div className="min-w-0">
                            <p className="text-sm font-semibold text-gray-800 truncate">
                              {userInfo?.name}
                            </p>
                            <p className="text-xs text-gray-400 truncate">
                              {userInfo?.email}
                            </p>
                          </div>

                        </div>
                      </div>

                      {/* Links */}
                      <div className="py-2">

                        <Link onClick={() => setDropDown(false)} className="flex items-center gap-3 px-4 py-2.5 text-sm text-gray-600 hover:text-primary-600 hover:bg-gray-300 transition-colors" href="/profile">
                          <FaUser className="w-4 text-gray-400" />
                          My Profile
                        </Link>

                        <Link onClick={() => setDropDown(false)} className="flex items-center gap-3 px-4 py-2.5 text-sm text-gray-600 hover:text-primary-600 hover:bg-gray-300 transition-colors" href="/orders">
                          <FaBoxOpen className="w-4 text-gray-400" />
                          My Orders
                        </Link>

                        <Link onClick={() => setDropDown(false)} className="flex items-center gap-3 px-4 py-2.5 text-sm text-gray-600 hover:text-primary-600 hover:bg-gray-300 transition-colors" href="/wishlist">
                          <FaHeart className="w-4 text-gray-400" />
                          My Wishlist
                        </Link>

                        <Link onClick={() => setDropDown(false)} className="flex items-center gap-3 px-4 py-2.5 text-sm text-gray-600 hover:text-primary-600 hover:bg-gray-300 transition-colors" href="/profile">
                          <FaAddressBook className="w-4 text-gray-400" />
                          Addresses
                        </Link>

                        <Link onClick={() => setDropDown(false)} className="flex items-center gap-3 px-4 py-2.5 text-sm text-gray-600 hover:text-primary-600 hover:bg-gray-300 transition-colors" href="/profile">
                          <FaCog className="w-4 text-gray-400" />
                          Settings
                        </Link>

                      </div>

                      {/* Logout */}
                      <div className="border-t border-gray-100 py-2">
                        <button onClick={() => {
                          logOutHandlar();
                          setDropDown(false);
                        }}
                          className="flex items-center gap-3 px-4 py-2.5 text-sm text-red-500 hover:bg-red-200 transition-colors w-full text-left">
                          <FaSignOutAlt className="w-4" />
                          Sign Out
                        </button>
                      </div>

                    </div>}
                  </div>
                }
                {/* -------------------------------------------------------------------------- */}
                {/* Mobile Menu */}
                <button onClick={() => setIsOpen(true)} className="lg:hidden ml-1 w-9 h-9 rounded-full bg-green-600 text-white flex items-center justify-center transition-all duration-300 shadow-md hover:scale-110 active:scale-95 hover:rotate-3 cursor-pointer">
                  <FaBars className="text-sm" />
                </button>

                <div
                  className={`fixed inset-0 bg-black/90 backdrop-blur-sm z-40 lg:hidden transition-opacity duration-300 ${isOpen ? "opacity-50 visible" : "opacity-0 invisible"
                    }`}
                  onClick={() => setIsOpen(false)}
                />

                {/* Sidebar */}
                <div
                  className={`fixed top-0 right-0 h-full w-80 max-w-[85vw] bg-white shadow-2xl overflow-y-auto z-50 transition-transform duration-300
        ${isOpen ? "translate-x-0" : "translate-x-full"}`}
                >
                  {/* Header */}
                  <div className="flex items-center justify-between p-4 border-b bg-gray-50">
                    <Image
                      src={img.src}
                      alt="FreshCart"
                      width={160}
                      height={40}
                    />

                    <button
                      onClick={() => setIsOpen(false)}
                      className="w-9 h-9 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center cursor-pointer"
                    >
                      <FaTimes />
                    </button>
                  </div>

                  <form className="p-4 border-b border-gray-100">
                    <div className="relative group">

                      <input
                        type="text"
                        placeholder="Search products..."
                        className="w-full px-4 py-3 pr-12 rounded-xl border border-gray-200 bg-gray-50 text-sm
                      focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500
                        transition-all duration-200"
                      />

                      <button
                        type="submit"
                        className="absolute right-2 top-1/2 -translate-y-1/2 w-9 h-9 rounded-lg
                        bg-green-600 text-white flex items-center justify-center
                        transition-all duration-200 cursor-pointer active:scale-95"
                      >
                        <IoSearchSharp />
                      </button>

                    </div>
                  </form>

                  {/* Nav */}
                  <nav className="p-4 space-y-1">
                    <Link onClick={() => setIsOpen(false)} className="block px-4 py-3 rounded-xl hover:bg-green-50" href="/">
                      Home
                    </Link>

                    <Link onClick={() => setIsOpen(false)} className="block px-4 py-3 rounded-xl hover:bg-green-50" href="/products">
                      Shop
                    </Link>

                    <Link onClick={() => setIsOpen(false)} className="block px-4 py-3 rounded-xl hover:bg-green-50" href="/categories">
                      Categories
                    </Link>

                    <Link onClick={() => setIsOpen(false)} className="block px-4 py-3 rounded-xl hover:bg-green-50" href="/brands">
                      Brands
                    </Link>
                  </nav>

                  <div className="border-t mx-4" />

                  {/* Wishlist + Cart */}
                  <div className="p-4 space-y-2">
                    <Link onClick={() => setIsOpen(false)} href="/wishlist" className="flex items-center justify-between p-3 rounded-xl hover:bg-green-50">
                      <div className="flex items-center gap-3">
                        <FaHeart className="text-red-500" />
                        <span>Wishlist</span>
                      </div>
                    </Link>

                    <Link onClick={() => setIsOpen(false)} href="/cart" className="flex items-center justify-between p-3 rounded-xl hover:bg-green-50">
                      <div className="flex items-center gap-3">
                        <FaShoppingCart className="text-green-600" />
                        <span>Cart</span>
                      </div>
                    </Link>
                  </div>

                  <div className="border-t mx-4" />

                  {/* Auth */}
                  {!session.data ?
                    <div className="mt-5 p-4 grid grid-cols-2 gap-3">
                      <Link
                        onClick={() => setIsOpen(false)}
                        href="/login"
                        className="bg-green-600 hover:bg-green-700 transition text-white text-center py-3 rounded-xl"
                      >
                        Sign In
                      </Link>

                      <Link
                        onClick={() => setIsOpen(false)}
                        href="/register"
                        className="border border-green-600 text-green-600 hover:bg-green-100 transition text-center py-3 rounded-xl"
                      >
                        Sign Up
                      </Link>
                    </div> :
                    <>
                      <Link onClick={() => setIsOpen(false)}
                      href={'/profile'}
                      className="flex items-center gap-3 w-[90%] m-auto  text-gray-700 hover:bg-blue-50 transition rounded-xl cursor-pointer py-4 mt-4 ps-4 ">

                        <LuUser className="text-lg text-gray-600" />

                        <span className="flex-1 text-left font-medium">
                          {userInfo?.name}
                        </span>

                      </Link>
                      <div onClick={() => logOutHandlar()} className="px-4">
                        <button className="mt-5 w-full text-red-600 hover:bg-red-100 transition text-center py-3 rounded-xl cursor-pointer">sign Out</button>
                      </div>
                    </>
                  }

                  {/* Support */}
                  <Link
                    href="/contact"
                    className="m-4 p-4 rounded-xl bg-gray-50 flex items-center gap-3 hover:bg-green-50"
                  >
                    <div className="w-11 h-11 rounded-full bg-green-100/80 backdrop-blur-md shadow-md flex items-center justify-center hover:scale-105 transition-transform duration-200">
                      <FaHeadset className="text-green-700 text-lg" />
                    </div>
                    <div>
                      <div className="text-sm font-semibold">Need Help?</div>
                      <div className="text-sm text-green-600">Contact Support</div>
                    </div>
                  </Link>
                </div>


              </div>
            </div>
          </div>
        </div>
      </header >
    </>
  );
}


