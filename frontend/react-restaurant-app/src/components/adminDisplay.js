import { useState, useEffect } from "react";

function AdmimDisplay({customer, completeCustomerOrder}) {

    return (
        <div className='row'>
            <div className="orderlist col-6">
                <p className='orderDisplay'>{customer}
                    <span className='completed'><button className='deleteItem' type='button' onClick={completeCustomerOrder}>Completed</button></span>
                </p>
            </div>
        </div>
    );
}

export default AdmimDisplay;