import { useState, useEffect } from "react";

function AdmimDisplay({customer}) {

    return (
        <div className='row'>
            <div className="orderlist col">
                <p className='orderDisplay'>{customer}
                    {/* <span className='delete'><button className='deleteItem' type='button' onClick={deleteFromOrder}>Delete</button></span> */}
                </p>
            </div>
        </div>
    );
}

export default AdmimDisplay;