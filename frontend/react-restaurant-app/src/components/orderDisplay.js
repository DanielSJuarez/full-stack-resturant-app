function OrderDisplay({ name, price, removeSubTotal, removeOrder, order, subTotal, quantity}) {

    const deleteFromOrder = () => {
        removeSubTotal(price);
        removeOrder(name);
    }


    return (
        <div className='row'>
            <div className="orderlist col">
                <p className='orderDisplay'>{name} ${price}
                    <span className='delete'><button className='deleteItem' type='button' onClick={deleteFromOrder}>Delete</button></span>
                </p>
            </div>
        </div>
    );
}

export default OrderDisplay;