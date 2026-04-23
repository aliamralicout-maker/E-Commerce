
import { Categorys } from "@/interfaces/categorie.api.interface";
import { listingResponse } from "@/interfaces/listing.api.interface";
import { proudct } from "@/interfaces/products.api.interface";


export type CategoryResponse = listingResponse<Categorys>
export type proudctsResponse = listingResponse<proudct>
