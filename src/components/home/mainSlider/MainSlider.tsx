// 'use client';

// import { Swiper, SwiperSlide } from 'swiper/react';
// import { Parallax, Pagination, Navigation } from 'swiper/modules';
// import Image from 'next/image';

// import bg from '../../../assets/images/related-products-2.png';



// const parallaxSwiperOption = {
//     speed: 1000,
//     parallax: true,
//     pagination: { clickable: true },
//     navigation: {
//         nextEl: '.custom-next',
//         prevEl: '.custom-prev',
//     },
//     modules: [Parallax, Pagination, Navigation],
//     loop: true,
// };

// export const slidesData = [
//     {
//         title: 'Fresh Products Delivered to your Door',
//         text: 'Get 20% off your first order',
//         btn1: 'Shop Now',
//         btn2: 'View Deals',
//         btnColor: 'text-green-500',
//     },
//     {
//         title: 'Premium Quality Guaranteed',
//         text: 'Fresh from farm to your table',
//         btn1: 'Shop',
//         btn2: 'Learn More',
//         btnColor: 'text-blue-600',
//     },
//     {
//         title: 'Fast & Free Delivery',
//         text: 'Same day delivery available',
//         btn1: 'Order Now',
//         btn2: 'Delivery Info',
//         btnColor: 'text-purple-700',
//     },
// ];

// export default function ParallaxSlider() {
//     return (
//         <section className="w-full">

//             {/* Prev */}
//             <div className="custom-prev absolute left-4 top-1/2 -translate-y-1/2 z-20 
//     bg-white/20 backdrop-blur-md text-white w-12 h-12 rounded-full 
//     flex items-center justify-center cursor-pointer hover:bg-green-600 transition">
//                 ←
//             </div>

//             {/* Next */}
//             <div className="custom-next absolute right-4 top-1/2 -translate-y-1/2 z-20 
//     bg-white/20 backdrop-blur-md text-white w-12 h-12 rounded-full 
//     flex items-center justify-center cursor-pointer hover:bg-green-600 transition">
//                 →
//             </div>

//             <Swiper {...parallaxSwiperOption} className="h-96 md:h-112 lg:h-128">

//                 {slidesData.map((slide, index) => (
//                     <SwiperSlide key={index} className="relative h-96 md:h-112 lg:h-128">
//                         {/* Background */}
//                         <div className="absolute inset-0">
//                             <div
//                                 className="absolute inset-0 bg-cover bg-center"
//                                 style={{ backgroundImage: `url(${bg.src})` }}
//                             />
//                             <div className="absolute inset-0 bg-green-700/70"></div>
//                         </div>

//                         {/* Content */}
//                         <div className="relative z-10 flex flex-col justify-center items-center h-full text-center text-white 
//                                         px-4 sm:px-10 md:px-20 
//                                         lg:flex-col lg:justify-center lg:items-start lg:pl-20
//                                         ">
//                             {/* Title */}
//                             <div
//                                 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4"
//                                 data-swiper-parallax="-3000"
//                             >
//                                 {slide.title}
//                             </div>

//                             {/* Text */}
//                             <div
//                                 className="text-sm sm:text-base md:text-lg mb-6"
//                                 data-swiper-parallax="-2000"
//                             >
//                                 <p>{slide.text}</p>
//                             </div>

//                             {/* Buttons */}
//                             <div
//                                 className="flex flex-col sm:flex-row gap-4 justify-center items-center"
//                                 data-swiper-parallax="-1000"
//                             >
//                                 <button
//                                     className={`py-2 sm:py-3 px-6 sm:px-8 bg-white ${slide.btnColor} cursor-pointer hover:scale-105 transition rounded-sm border font-semibold`}
//                                 >
//                                     {slide.btn1}
//                                 </button>
//                                 <button className="py-2 sm:py-3 px-6 sm:px-8 text-white cursor-pointer hover:scale-105 transition rounded-sm  border border-white font-semibold">
//                                     {slide.btn2}
//                                 </button>
//                             </div>
//                         </div>
//                     </SwiperSlide>
//                 ))}
//             </Swiper>
//         </section>
//     );
// }

'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Parallax, Pagination, Navigation } from 'swiper/modules';
import bg from '@/assets/images/related-products-2.png';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/parallax';

export const slidesData = [
    {
        title: (
            <>
                Fresh Products Delivered <br />
                to your Door
            </>
        ),
        text: 'Get 20% off your first order',
        btn1: 'Shop Now',
        btn2: 'View Deals',
        btnColor: 'text-green-500',
    },
    {
        title: (
            <>
                Premium Quality <br />
                Guaranteed
            </>
        ),
        text: 'Fresh from farm to your table',
        btn1: 'Shop',
        btn2: 'Learn More',
        btnColor: 'text-blue-600',
    },
    {
        title: 'Fast & Free Delivery',
        text: 'Same day delivery available',
        btn1: 'Order Now',
        btn2: 'Delivery Info',
        btnColor: 'text-purple-700',
    },
];

const sliderOptions = {
    speed: 1000,
    parallax: true,
    pagination: { clickable: true },
    navigation: false,
    modules: [Parallax, Pagination, Navigation],
    loop: true,
};

export default function ParallaxSlider() {
    return (
        <section className="w-full relative">

            {/* arrows */}

            {/* Prev */}
            <div className="custom-prev absolute left-4 top-1/2 -translate-y-1/2 z-10 cursor-pointer 
bg-white/90 hover:bg-white text-green-500 hover:text-green-600 
rounded-full w-12 h-12 hidden md:flex items-center justify-center 
shadow-lg transition-all duration-300 hover:scale-110">

                <ChevronLeft size={22} />

            </div>

            {/* Next */}
            <div className="custom-next absolute right-4 top-1/2 -translate-y-1/2 z-10 cursor-pointer 
bg-white/90 hover:bg-white text-green-500 hover:text-green-600 
rounded-full w-12 h-12 hidden md:flex items-center justify-center 
shadow-lg transition-all duration-300 hover:scale-110">

                <ChevronRight size={22} />

            </div>

            {/* <div className="swiper-pagination">
                <span className="swiper-pagination-bullet"></span>
                <span className="swiper-pagination-bullet swiper-pagination-bullet-active"></span>
                <span className="swiper-pagination-bullet"></span>
            </div> */}

            <Swiper
                {...sliderOptions}
                onBeforeInit={(swiper) => {
                    if (swiper.params.navigation) {
                        swiper.params.navigation.nextEl = '.custom-next';
                        swiper.params.navigation.prevEl = '.custom-prev';
                    }
                }}
                className="h-96 md:h-112"
            >
                {slidesData.map((slide, index) => (
                    <SwiperSlide key={index} className="relative h-96 md:h-112">

                        {/* Background */}
                        <div className="absolute inset-0">
                            <div
                                className="absolute inset-0 bg-cover bg-center"
                                style={{ backgroundImage: `url(${bg.src})` }}
                            />
                            <div className="absolute inset-0 bg-green-700/70" />
                        </div>

                        {/* Content */}
                        <div className="lg:ms-10 relative z-10 flex flex-col justify-center items-center h-full text-center text-white px-4 md:px-20 lg:items-start lg:pl-20">

                            <h2
                                className="text-2xl text-start md:text-3xl font-black mb-4"
                                data-swiper-parallax="-3000"
                            >
                                {slide.title}
                            </h2>

                            <p
                                className="text-sm md:text-lg mb-6"
                                data-swiper-parallax="-2000"
                            >
                                {slide.text}
                            </p>

                            <div
                                className="flex gap-4 flex-col sm:flex-row"
                                data-swiper-parallax="-1000"
                            >
                                <button className={`bg-white px-6 py-2 rounded-sm font-semibold ${slide.btnColor}`}>
                                    {slide.btn1}
                                </button>

                                <button className="border border-white px-6 py-2 rounded-sm font-semibold hover:bg-white hover:text-black transition">
                                    {slide.btn2}
                                </button>
                            </div>

                        </div>

                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    );
}