'use server';


export async function getProductsBySubCategory(id:string){
        try {
            const res = await fetch(`https://ecommerce.routemisr.com/api/v1/categories/${id}/subcategories`);

            if(!res.ok){
                throw new Error(res.statusText + "error");
            }

            const data = await res.json();
            return data;

        } catch (error) {
            return error;
        }
}
