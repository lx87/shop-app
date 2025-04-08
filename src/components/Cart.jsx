import { useDispatch, useSelector } from "react-redux";
import { addItem } from "../redux/slices/cartSlice";
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { increaseQuantity, decreaseQuantity, removeItem } from "../redux/slices/cartSlice";
import { toast } from 'sonner';

const Cart = () => {
    const dispatch = useDispatch();
    const { items } = useSelector(state => state.cart);
    const cartItems = Object.entries(items);
    
    return (
        <div className="cart-items-list gap-2 d-flex flex-column w-100">
            {cartItems.map(([mainId, cartItem]) => (
                <div key={mainId} className="cart-item">
                    <h3>{cartItem.item.name}</h3>
                    <ButtonGroup className="me-4">
                        <Button 
                            variant="secondary" 
                            onClick={() => dispatch(decreaseQuantity(mainId))}
                        >
                            <i className="bi bi-dash-lg"></i>
                        </Button>
                        <Button variant="secondary static">{cartItem.quantity}</Button>
                        <Button 
                            variant="secondary" 
                            onClick={() => dispatch(increaseQuantity(mainId))}
                        >
                            <i className="bi bi-plus-lg"></i>
                        </Button>
                    </ButtonGroup>
                    <h3 className="m-0">${(cartItem.item.price * cartItem.quantity).toFixed(2)}</h3>
                    <Button className='btn btn-secondary' label='delete item'
                        onClick={() => {
                                const itemToRestore = {
                                    id: mainId,
                                    ...cartItem.item,
                                    quantity: cartItem.quantity 
                                };
                                console.log('to restore-',itemToRestore);
                                dispatch(removeItem(mainId));
                                
                                toast(`"${cartItem.item.name}" removed from cart`, {
                                action: {
                                    label: 'Undo',
                                    onClick: () => dispatch(addItem(itemToRestore))
                                },
                            })
                        }}>
                        <i className="bi bi-x-lg"></i>
                    </Button>
                </div>
            ))}
        </div>
    );
};

export default Cart;