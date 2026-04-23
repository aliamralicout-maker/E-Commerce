
import { Cart } from '@/interfaces/cart.interface';
import { deleteCart, GetCart } from '../../../actions/cart.action'
import CartUi from './CartUi/CartUi'


export default async function page() {


    const data  = await GetCart();

    return (
        <div>

            <CartUi data={data} />

        </div>
    )
}




