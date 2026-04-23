

export async function getCategories(){
    try {
        const res = await fetch('https://ecommerce.routemisr.com/api/v1/categories');

        if(!res.ok){
            throw new Error(res.statusText + "error");
        }

        const data = await res.json();

        return data;

    } catch (error) {
        return error
    }
}


export async function getSpecificCategory(id: string){
    try {
        const res = await fetch(`https://ecommerce.routemisr.com/api/v1/categories/${id}`);

        if(!res.ok){
            throw new Error(res.statusText + "error");
        }

        const data = await res.json();

        return data;

    } catch (error) {
        return error
    }
}



// View All Products in Electronics
export async function getProductsByCategory(id: string){
    try {
        const res = await fetch(`https://ecommerce.routemisr.com/api/v1/products?category[in]=${id}`);

        if(!res.ok){
            throw new Error(res.statusText + "error");
        }

        const data = await res.json();

        return data;

    } catch (error) {
        return error
    }
}
