'use client';

import { getProductsBySubCategory } from '@/actions/productsBySubCategory';
import { useEffect, useState } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'

interface params {
    id: string,
}

export default function ProductCardDetails({ id }: params) {
    // console.log(category._id);
    // const _id = category._id;


    // const specificCategoryData : proudctsResponse  =  await getSpecificCategory(_id);

    // const data = specificCategoryData;
    // console.log(data);



    const [data, setData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            const res = await getProductsBySubCategory(id);
            setData(res);
        };

        fetchData();
    }, [id]);

    // console.log("data:", data);

return (
    <div className='container m-auto'>
        <div className="flex justify-between items-center my-6 px-4">
            {/* Title */}
            <div className="flex items-center gap-3">
                <div className="h-8 w-1.5 bg-linear-to-b from-emerald-500 to-emerald-700 rounded-full"></div>

                <h2 className="text-2xl font-bold text-gray-800">
                    You May Also <span className="text-emerald-600">Like</span>
                </h2>
            </div>

            {/* Buttons */}
            <div className="flex gap-2">
                <button className="h-10 w-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-emerald-100 hover:text-emerald-600 transition">
                    <FaChevronLeft />
                    <span className="sr-only">Previous</span>
                </button>

                <button className="h-10 w-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-emerald-100 hover:text-emerald-600 transition">
                    <FaChevronRight />
                    <span className="sr-only">Next</span>
                </button>
            </div>
        </div>

        {/* <SwiperCard  /> */}


    </div>
)
}
