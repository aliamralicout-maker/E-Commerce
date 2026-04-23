'use client';
import Image from 'next/image';
import { FaCheckCircle, FaShieldAlt, FaStar, FaTimesCircle } from 'react-icons/fa'
import { FaUserPlus } from "react-icons/fa6";
import { TbTruckDelivery } from "react-icons/tb";
import { ImGoogle } from "react-icons/im";
import { BsFacebook } from "react-icons/bs";
import {
  Field,
  FieldLabel,
} from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"



import img from '../../../assets/images/img-register.png'
import { ErrorMessage, FeaturesSection } from '@/ServicesUi/ServicesUi';
import { registerPaylodType, defaultValues, registerSchema } from '@/schema/register.schema';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form'
import { registerHandler } from '@/actions/auth.action';
import Link from 'next/link';
import ClipLoader from 'react-spinners/ClipLoader';
import { toast } from 'sonner';
import { useRouter } from 'next/navigation';
import { signIn } from 'next-auth/react';



export default function Register() {
  const router = useRouter();

  const stars = [1, 2, 3, 4, 5];

  const { handleSubmit, register, formState: { errors, isSubmitting } } = useForm<registerPaylodType>({
    defaultValues,
    resolver: zodResolver(registerSchema),
    mode: 'all',
  })

  async function onsubmit(formValue: registerPaylodType) {
    console.log('register form ', formValue);

    const res = await registerHandler(formValue);
    console.log('res ', res);

    if (res.ok) {
      toast(
        <div className="flex items-center gap-3">
          <FaCheckCircle className="text-green-500 text-xl" />
          <span className="text-sm font-medium">
            Account has been registered successfully
          </span>
        </div>,
        {
          duration: 3000,
          icon: null,
          style: {
            background: '#ECFDF5',
            color: '#065F46',
            border: '1px solid #A7F3D0',
            borderRadius: '10px',
            padding: '12px 16px'
          }
        }
      );

      const loginRes = await signIn("credentials", {
        email: formValue.email,
        password: formValue.password,
        redirect: false,
      });

      if (!loginRes?.ok) {
        toast.error(
          <div className="flex items-center gap-3">
            <FaTimesCircle className="text-red-500 text-xl" />
            <span className="text-sm font-medium">
              {'Login failed after registration'}
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
        return;
      }

      router.push('/');
    } else {
      toast.error(
        <div className="flex items-center gap-3">
          <FaTimesCircle className="text-red-500 text-xl" />
          <span className="text-sm font-medium">
            {res.error?.message || 'Something went wrong!'}
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
      <div className='container mx-auto'>
        <div className="grid grid-cols-1 lg:grid-cols-2 mt-10">
          {/* section 1 */}
          <section className=" me-10 p-4">
            <div><h2 className='text-5xl font-bold text-[#364153]'>Welcom to <span className='text-green-500'>FreshCart</span></h2></div>
            <div className='pt-4'><p className='text-[#364153] font-bold text-xl'>Join thousands of happy customers who enjoyfresh groceries delivered right to their doorstep.</p></div>
            {/* 2 */}
            <div className='pt-6 space-y-6 text-[#364153]'>
              {/* 1 */}
              <div className='flex items-center '>
                <div className="bg-[#BBF7D0] rounded-2xl me-3 flex items-center justify-center p-2">
                  <FaStar className="text-[#16A34A] text-2xl" />
                </div>
                <div className=''>
                  <h4 className='font-bold text-lg'>Premium Quality</h4>
                  <p className='text-lg'>Premium quality products sourced from trusted suppliers.</p>
                </div>
              </div>
              {/* 2 */}
              <div className='flex items-center '>
                <div className="bg-[#BBF7D0] rounded-2xl me-3 flex items-center justify-center p-2">
                  <TbTruckDelivery className="text-[#16A34A] text-2xl" />
                </div>
                <div className=''>
                  <h4 className='font-bold text-lg'>Fast Delivery</h4>
                  <p className='text-lg'>Same-day delivery available in most areas.</p>
                </div>
              </div>
              {/* 3 */}
              <div className='flex items-center '>
                <div className="bg-[#BBF7D0] rounded-2xl me-3 flex items-center justify-center p-2">
                  <FaShieldAlt className="text-[#16A34A] text-2xl" />
                </div>
                <div className=''>
                  <h4 className='font-bold text-lg'>Secure Shopping</h4>
                  <p className='text-lg'>Your data and payments are completely secure.</p>
                </div>
              </div>
            </div>
            {/* 3 */}
            <div className='pt-12'>
              <div className='flex items-center '>
                <Image width={100} height={100} src={img} alt='imge rgester' className='w-12 h-12 me-3' />
                <div className=''>
                  <h4 className='text-[#364153] font-bold text-lg'>Sarah Johnson</h4>
                  <div className="flex gap-1 text-yellow-400">
                    {stars.map((star) => (
                      <FaStar className='w-[17.19px] h-[16.43px]' key={star} />
                    ))}
                  </div>
                </div>
              </div>
              <div>
                <p className='mt-4 text-[#364153] font-medium italic text-base leading-6 align-middle'>
                  "FreshCart has transformed my shopping experience. The
                  quality of the products is outstanding, and the delivery is
                  always on time. Highly recommend!"
                </p>
              </div>
            </div>
          </section>

          {/* section 2 */}
          {/* register */}
          <section className="py-8 mb-10 flex flex-col items-center shadow-[0_10px_20px_-5px_rgba(0,0,0,0.1)] rounded-2xl ">

            {/* 1 */}
            <div className="w-full max-w-[472px] rounded-2xl pt-10 flex flex-col gap-2 text-center">
              <h2 className="font-semibold text-3xl leading-9text-center align-middle">
                Create Your Account
              </h2>
              <p className=''>Start your fresh journey with us today</p>
            </div>
            {/* 2 */}
            <div className="grid grid-cols-2 gap-2 my-8 px-6  w-full">
              <button className="w-full py-3 rounded-lg px-4 border flex items-center justify-center gap-2">
                <ImGoogle className="text-red-500" />
                <span>Google</span>
              </button>

              <button className="w-full py-3 rounded-lg px-4 border flex items-center justify-center gap-2">
                <BsFacebook className="text-blue-600" />
                <span>Facebook</span>
              </button>
            </div>
            {/* or */}
            <div className="items-center">
              <span className="relative px-3 text-gray-700 before:absolute before:right-full before:top-1/2 before:w-24 before:h-px before:bg-gray-200 after:absolute after:left-full after:top-1/2 after:w-28 after:h-px after:bg-gray-200">
                or
              </span>
            </div>




            {/* Form */}
            <form onSubmit={handleSubmit(onsubmit)} className='w-full px-6 py-4 space-y-7'>
              {/* name */}
              <Field>
                <FieldLabel htmlFor="input-field-username">Name*</FieldLabel>
                <Input
                  {...register('name')}
                  type="text"
                  placeholder="Enter your username"
                  className='py-6'
                />
                {errors.name?.message && <ErrorMessage error={errors.name?.message} />}

              </Field>


              {/* email */}
              <Field>
                <FieldLabel htmlFor="input-field-username">Email*</FieldLabel>
                <Input
                  {...register('email')}
                  type="email"
                  placeholder="Enter your Email"
                  className='py-6'
                />
                {errors.email?.message && <ErrorMessage error={errors.email?.message} />}
              </Field>

              {/* password */}
              <Field>
                <FieldLabel htmlFor="input-field-username">Password*</FieldLabel>
                <Input
                  {...register('password')}
                  type="password"
                  placeholder="create a strong password"
                  className='py-6'
                />
                {errors.password?.message && <ErrorMessage error={errors.password?.message} />}
                <div className="flex items-center gap-2 w-[424px]">

                  {/* progress bar */}
                  <div className="flex-1 h-[4px] bg-gray-200 rounded-md overflow-hidden">
                    <div className="h-full w-[30%] bg-red-500 rounded-md"></div>
                  </div>

                  {/* text */}
                  <span className="text-sm font-medium text-[#364153] min-w-[50px]">
                    Weak
                  </span>

                </div>
                <div className="font-medium text-xs leading-4 tracking-normal align-middle "><p className=' text-[#6A7282] '>Must be at least 8 characters with numbers and symbols</p></div>
              </Field>



              {/* confirm password */}
              <Field>
                <FieldLabel htmlFor="input-field-username">Confirm Password*</FieldLabel>
                <Input
                  {...register('rePassword')}
                  type="password"
                  placeholder="confirm your password"
                  className='py-6'
                />
                {errors.rePassword?.message && <ErrorMessage error={errors.rePassword?.message} />}
              </Field>

              {/* Phone Number */}
              <Field>
                <FieldLabel htmlFor="input-field-username">Phone Number*</FieldLabel>
                <Input
                  {...register('Phone')}
                  type="text"
                  placeholder="+1 234 567 8900"
                  className='py-6'
                />
                {errors.Phone?.message && <ErrorMessage error={errors.Phone?.message} />}
              </Field>

              <div className="flex items-center gap-2 ">
                <Checkbox className='border-gray-800' id="terms" />
                <Label htmlFor="terms" className="font-medium text-base leading-6 tracking-normal align-middle inline">I agree to the <span className='text-[#16A34A] inline'>Terms of Service</span> and <span className='text-[#16A34A]'>Privacy Policy *</span></Label>
              </div>

              {/* Create My Account */}
              <button
                disabled={isSubmitting}
                type='submit'

                className={`border  rounded-2xl flex justify-center items-center gap-2 py-3 w-full  transition  text-white font-bold 
                ${isSubmitting ? 'bg-[#16a34a81]' : 'bg-[#16A34A] hover:bg-[#0f7d38] border-gray-500 cursor-pointer'}
                `}>

                {isSubmitting ?
                  <>
                    <div className='flex justify-center items-center'>
                      <ClipLoader size={20} color='white' className='my-auto' />
                      <span className='ms-4'>Creating...</span>
                    </div>
                  </>
                  : <>
                    <FaUserPlus className="w-[20px] h-[16px]" />
                    <span>Create My Account</span>
                  </>}
              </button>

              <div className=" h-[65px] pt-10 border-t border-gray-200 text-center">
                <p>Already have an account? <span className='text-[#16A34A]'><Link href={'/login'}>Sign In</Link></span></p>
              </div>

            </form>
          </section>
        </div>
      </div>
      <FeaturesSection />
    </>
  )


}

