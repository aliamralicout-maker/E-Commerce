import Image from 'next/image'

import img from '../../../assets/images/2e5810ff3e-e750761ebcd4ae5907db.png'
import {
  FaClock,
  FaShieldAlt,
  FaTruck,
  FaGoogle,
  FaFacebook,
  FaEnvelope,
  FaLock,
  FaEye,
  FaUsers,
  FaStar
} from 'react-icons/fa'
import { FeaturesSection } from '@/ServicesUi/ServicesUi'
import LoginUi from './loginUi/LoginUi'
import Link from 'next/link'



export default function Login() {





  return (
    <>
      <section className="pt-15">
        <div className="container m-auto grid grid-cols-1 lg:grid-cols-2 space-x-8">

          {/* image */}
            <div className="hidden lg:flex flex-col justify-center px-4 text-center">
              <Image src={img} alt="img" className=" h-1/2 object-cover rounded-xl shadow-2xl" />
              <h2 className="text-4xl mt-4 font-bold ">
                FreshCart - Your One-Stop Shop for Fresh Products
              </h2>
              <p className="text-gray-600 py-5 text-2xl">
                Join thousands of happy customers who trust FreshCart for their daily grocery needs
              </p>
              {/* 3 */}
              <div className="flex justify-center gap-8 text-sm text-gray-600 ">
                <div className="flex items-center gap-2">
                  <FaTruck color='green' />
                  Free Delivery
                </div>

                <div className="flex items-center gap-2">
                  <FaShieldAlt color='green' />
                  Secure Payment
                </div>

                <div className="flex items-center gap-2">
                  <FaClock color='green' />
                  24/7 Support
                </div>
              </div>
            </div>

          {/* login */}
          <div className="mb-20">
            <div className="bg-white rounded-2xl shadow-xl p-8 lg:p-12">

              {/* header */}
              <div className="text-center mb-8">
                <div className="flex items-center justify-center mb-4">
                  <span className="text-3xl font-bold text-primary-600">
                    Fresh<span className="text-gray-800">Cart</span>
                  </span>
                </div>

                <h1 className="text-2xl font-bold text-gray-800 mb-2">
                  Welcome Back!
                </h1>

                <p className="text-gray-600">
                  Sign in to continue your fresh shopping experience
                </p>
              </div>

              {/* social */}
              <div className="space-y-3 mb-6">

                <button className="w-full flex items-center justify-center gap-3 py-3 px-4 border-2 border-gray-200 rounded-xl hover:border-primary-300 hover:bg-primary-50 transition">
                  <FaGoogle className="text-red-500 text-lg" />
                  <span className="font-medium text-gray-700">
                    Continue with Google
                  </span>
                </button>

                <button className="w-full flex items-center justify-center gap-3 py-3 px-4 border-2 border-gray-200 rounded-xl hover:border-primary-300 hover:bg-primary-50 transition">
                  <FaFacebook className="text-blue-600 text-lg" />
                  <span className="font-medium text-gray-700">
                    Continue with Facebook
                  </span>
                </button>

              </div>

              {/* divider */}
              <div className="relative my-6">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-200"></div>
                </div>

                <div className="relative flex justify-center text-sm">
                  <span className="px-4 bg-white text-gray-500 font-medium">
                    OR CONTINUE WITH EMAIL
                  </span>
                </div>
              </div>

{/* -------------------------------------------  Form  --------------------------------------------------------- */}
              <LoginUi/>
{/* ------------------------------------------------------------------------------------------------------------ */}

              {/* footer */}
              <div className="text-center mt-8 pt-6 border-t border-gray-100">
                <p className="text-gray-600">
                  New to FreshCart?
                  <Link href={'register'} className="text-[#16A34A] ms-2 font-semibold cursor-pointer">
                    Create an account
                  </Link>
                </p>
              </div>

              {/* stats */}
              <div className="flex items-center justify-center space-x-6 mt-6 text-xs text-gray-500">

                <div className="flex items-center gap-1">
                  <FaLock /> SSL Secured
                </div>

                <div className="flex items-center gap-1">
                  <FaUsers /> 50K+ Users
                </div>

                <div className="flex items-center gap-1">
                  <FaStar /> 4.9 Rating
                </div>

              </div>

            </div>
          </div>


        </div>
         
      </section>
    </>
  )
}

