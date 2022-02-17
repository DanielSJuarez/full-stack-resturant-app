function AdmimDisplay({ customer, id, name, price, completeCustomerOrder }) {


    const updateOrderStatus = () => {
        const pk = id;
        const orderName = customer;
        const orderBreakdown = name
        const orderTotal = price

        completeCustomerOrder(pk, orderName, orderBreakdown, orderTotal)
    }

    return (
        <div className='row'>
            <div className="orderlist col-6">
                <p className='orderDisplay'>{customer}
                    <span value={id} className='completed'><button className='deleteItem' type='button' onClick={updateOrderStatus}>Completed</button></span>
                </p>
            </div>
        </div>
    );
}

export default AdmimDisplay;