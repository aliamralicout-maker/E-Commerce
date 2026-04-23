

import { getProducts } from '@/services/product.services';
import { proudctsResponse } from '@/types/response.type';
import ProductCardUi from './ProductCardUi';



export default async function ProductCard() {

    const { data }: proudctsResponse = await getProducts();

    console.log("data", data);
    

    return (
        
            <ProductCardUi data={data} />
        
    )
}
