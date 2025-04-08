import { useDispatch } from "react-redux";
import { addItem } from "../redux/slices/cartSlice";
import { toast } from 'sonner'

const Items = ({ goods }) => {
    const dispatch = useDispatch();
    if (!Array.isArray(goods)) {
        return <div>No goods available</div>;
    }

    const validGoods = goods.filter(item => item.offerId && item.mainId !== null);

    const itemsToRender = validGoods.map((item, index) => ({
        ...item,
        uniqueKey: item.offerId || `${item.displayName}_${index}`
    }));

    return (
        <div className="goods-list">
            {itemsToRender.map(item => (
                <div key={item.offerId} className="good-item">
                    <img
                        src={item.displayAssets[0]?.background !== null
                            ? item.displayAssets[0]?.full_background
                            : `https://placehold.co/600x400?text=${item.displayName}`}
                        alt={item.mainId}
                        className="card-img" 
                    />
                    <h3 className="text-start m-0 pt-2 px-3">{item.displayName}</h3>
                    {item.displayDescription && <p className="text-start m-0 px-3">{item.displayDescription}</p>}
                    <span className="d-flex justify-content-between align-content-center p-3">
                        <h3 className="text-white m-0">${item.price.finalPrice}</h3>
                        <button className="btn btn-primary w-25"
                            onClick={() => {
                                dispatch(addItem({
                                    id: item.offerId,
                                    name: item.displayName,
                                    price: item.price.finalPrice,
                                }));
                                toast.success(`"${item.displayName}" added to cart`);
                            }}>Buy
                        </button>
                    </span>
                </div>
            ))}
        </div>
    );
};

export default Items;