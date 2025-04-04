import { useEffect } from "react";
import Preloader from './Preloader';
import { useDispatch, useSelector } from "react-redux";
import { fetchGoods } from "./redux/slices/shopSlice";
import Items from "./items";

function Shop() {
    const dispatch = useDispatch();
    const { data: goods, loading, error } = useSelector(state => state.shop);
    
    useEffect(() => {
        console.log("загрузка товаров");
        dispatch(fetchGoods());
    }, [dispatch]);

    if (error) {
        return <div className="error-message">Error: {error}</div>;
    }

    return (
        <div className="p-0 container-fluid d-flex flex-column align-items-center shop py-5">
            {loading ? <Preloader /> : <Items goods={goods || []} />}
        </div>
    );
}

export { Shop };