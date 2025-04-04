const Items = ({ goods }) => {
    if (!Array.isArray(goods)) {
        return <div>No goods available</div>;
    }

    return (
        <div className="goods-list">
            {goods.map(item => (
                <div key={item.mainId} className="good-item d-flex flex-column">
                    <img 
                        src={item.displayAssets[0].background !== null 
                            ? item.displayAssets[0].full_background 
                            : `https://placehold.co/600x400?text=${item.displayName}`} 
                        alt={item.mainId} 
                        className="card-img" 
                    />
                    <div className="mx-3 mt-2 d-flex flex-column gap-2 align-content-start">
                        <h3 className="text-start m-0">{item.displayName}</h3>
                        <p className="text-start m-0">{item.displayDescription}</p>
                        <span className="d-flex justify-content-between align-content-center mt-3">
                            <button className="btn btn-primary w-25">Buy</button>
                            <h3 className="text-white m-0">${item.price.regularPrice}</h3>
                        </span>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Items;