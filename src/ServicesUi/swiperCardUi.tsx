"use client";

import { getSpecificCategory } from '@/services/product.services';
import { Swiper, SwiperSlide } from 'swiper/react';


// import 'swiper/css';
// import 'swiper/css/pagination';

import { Pagination } from 'swiper/modules';
import { proudctsResponse } from '@/types/response.type';


type Props = {
    _id: string;
};


export default async function SwiperCard({_id}: Props) {


        // const specificCategoryData : proudctsResponse  =  await getSpecificCategory(_id);

        // const data = specificCategoryData;
        // console.log(data);
        


    return (
        <>
            <Swiper
                slidesPerView={1}
                spaceBetween={10}
                pagination={{
                    clickable: true,
                }}
                breakpoints={{
                    640: {
                        slidesPerView: 2,
                        spaceBetween: 20,
                    },
                    768: {
                        slidesPerView: 4,
                        spaceBetween: 40,
                    },
                    1024: {
                        slidesPerView: 5,
                        spaceBetween: 50,
                    },
                }}
                modules={[Pagination]}
                className="mySwiper"
            >
                {
                    <SwiperSlide>
                        {/* card */}
                    </SwiperSlide>
                }

            </Swiper>
        </>
    );
}
