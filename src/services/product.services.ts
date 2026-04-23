
export async function getProducts(){
        try {
            const res = await fetch('https://ecommerce.routemisr.com/api/v1/products');

            if(!res.ok){
                throw new Error(res.statusText + "error");
            }

            const data = await res.json();
            return data;

        } catch (error) {
            return error;
        }
}


// Get specific category
export async function getSinglProduct(id:string){
        try {
            const res = await fetch(`https://ecommerce.routemisr.com/api/v1/products/${id}`);

            if(!res.ok){
                throw new Error(res.statusText + "error");
            }

            const data = await res.json();
            return data;

        } catch (error) {
            return error;
        }
}



export async function getSpecificCategory(id:string){
        try {
            const res = await fetch(`https://ecommerce.routemisr.com/api/v1/products?category[in]=${id}`);

            if(!res.ok){
                throw new Error(res.statusText + "error");
            }

            const data = await res.json();
            return data;

        } catch (error) {
            return error;
        }
}