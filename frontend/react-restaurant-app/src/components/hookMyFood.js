import { useState, useEffect } from "react";
import MenuList from "./menuList";
import OrderDisplay from "./orderDisplay";
import Cookies from 'js-cookie';
import AdmimDisplay from "./adminDisplay";
// import MENU from "./menuItems";

function HookMyFood(props) {
    const [menu, setMenu] = useState(null);
    const [total, setTotal] = useState(0);
    const [orderList, setOrderList] = useState([]);
    const [screen, setScreen] = useState(false);
    const [customerName, setCustomerName] = useState('Customer')
    const [customerValue, setCustomerValue] = useState('')
    const [adminScreen, setAdminScreen] = useState(false)
    const [activeOrder, setActiveOrder] = useState([])

    const errorMessage = (err) => {
        console.warn(err);
    }

    useEffect(() => {
        const getMenu = async () => {
            const response = await fetch('/menu/').catch(errorMessage);
            if (!response.ok) {
                throw new Error('Netword response was not OK!')
            } else {
                const data = await response.json();
                setMenu(data);
            }
        }
        getMenu();
    }, [])

    if (!menu) {
        return <div>Fetching menu data....</div>
    }

    const subTotal = (price) => {
        setTotal(total + price);
    }

    const order = (name, price, quantity) => {
        const newOrderItem = {
            name,
            price,
            quantity,
        }
        setOrderList([...orderList, newOrderItem]);
    };

    const removeSubTotal = (price) => {
        setTotal(total - price);
    };

    const removeOrder = (name, quantity) => {
        const removeSelectedItem = [...orderList];
        const index = removeSelectedItem.findIndex(orderList => orderList.name === name);
        removeSelectedItem.splice(index, 1);
        setOrderList(removeSelectedItem);
    }

    const clearOrder = async () => {
    
        const orders = {
            customer: customerName,
            name: orderList,
            price: total,
            active: true,
        }

        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'X-CSRFToken': Cookies.get('csrftoken'),
            },
            body: JSON.stringify(orders)
        }

        const response = await fetch('/menu/orders/', options).catch(errorMessage);

        if (!response.ok) {
            throw new Error('Network response was not OK');
        }

        setTotal(0);
        setOrderList([]);
        setCustomerName('Customer');
        setScreen(false);
    }

    const cancelOrder = () => {
        setTotal(0);
        setOrderList([]);
        setCustomerName('Customer');
        setScreen(false);
    }

    const addCustomerName = (e) => {
        setCustomerName(e.target.value)
        setCustomerValue(e.target.value)
    }

    const submitName = (e) => {
        e.preventDefault();
        setCustomerValue('')
    }

    const getAdmin = () => {
        const getOrders = async () => {
            const response = await fetch('/menu/orders/').catch(errorMessage);
            if (!response.ok) {
                throw new Error('Netword response was not OK!')
            } else {
                const data = await response.json();
                setActiveOrder(data);
            }
        }

        getOrders();

        setAdminScreen(true)

        if (!activeOrder) {
            return <div>Fetching order data....</div>
        }
    }
    
    const completeCustomerOrder = async () => {

        const completeOrders = {
            customer: customerName,
            name: orderList,
            price: total,
            active : false,
        }

        const options = {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'X-CSRFToken': Cookies.get('csrftoken'),
            },
            body: JSON.stringify(completeOrders)
        }

        const response = await fetch(`/orders/${activeOrder.id}/`, options).catch(errorMessage);

        if (!response.ok) {
            throw new Error('Network response was not OK');
        }

    }

    const tacoSelection = menu.filter(menu => (
        menu.catagory === 'tacos'
    ));

    const tacoDisplay = tacoSelection.map(menu => (
        <MenuList key={menu.id} {...menu} subTotal={subTotal} order={order} />
    ));

    const pizzaSelection = menu.filter(menu => (
        menu.catagory === 'pizza'
    ));

    const pizzaDisplay = pizzaSelection.map(menu => (
        <MenuList key={menu.id} {...menu} subTotal={subTotal} order={order} />
    ));

    const sidesSelection = menu.filter(menu => (
        menu.catagory === 'sides'
    ));

    const sidesDisplay = sidesSelection.map(menu => (
        <MenuList key={menu.id} {...menu} subTotal={subTotal} order={order} />
    ));

    const orderDisplay = orderList.map(item => (
        <OrderDisplay key={item.id} {...item} removeSubTotal={removeSubTotal} removeOrder={removeOrder} order={order} subTotal={subTotal} />
    ));

    const filterActiveOrder = activeOrder.filter(order => (
        order.active === true
    ));
    const adminDisplayActive = filterActiveOrder.map(order => (
        <AdmimDisplay key={order.id} {...order} completeCustomerOrder={completeCustomerOrder}/>
    ));

    const filterCompletedOrder = activeOrder.filter(order => (
        order.active === false
    ));

    const adminDisplayCompleted = filterCompletedOrder.map(order => (
        <AdmimDisplay key={order.id} {...order}/>
    ));

    const adminProfile = (
        <>
            <h2 className='restaurantsDisplay col-12'>Active/Completed Order</h2>
            <h3 className='menuDisplay col-6'>Active Orders</h3>
            <h3 className='menuDisplay col-6'>Completed Orders</h3>
            <div className="col-6">
                {adminDisplayActive}
            </div>
            <div className="col-6">
                {adminDisplayCompleted}
            </div>
            <footer className='footer'><button name='admin' className='adminButton' type='button' onClick={() => setAdminScreen(false)}>User Profile</button></footer>
        </>
    )

    const menuScreen = (
        <div className="container">
            <div className='main row'>
                <h1 className='restaurantsDisplay col'>Hook My Food Cafe</h1>
                <h3 className='menuDisplay col-12'>Our Menu</h3>
                <div className="orderDetails col-12">
                    <button className='orderButton' onClick={() => setScreen(true)}>Your Cart</button>
                    <p className='subTotal' onClick={() => setScreen(true)}>Sub-Total ${total}</p>
                </div>
                <div className='menuList col'>
                    <section className='display row'>
                        <p className='catHeader'>Tacos</p>
                        {tacoDisplay}
                    </section>
                    <section className='display row'>
                        <p className='catHeader'>Pizza</p>
                        {pizzaDisplay}
                    </section>
                    <section className='display row'>
                        <p className='catHeader'>Sides</p>
                        {sidesDisplay}
                    </section>
                </div>
                <footer className='footer'><button name='admin' className='adminButton' type='button' onClick={getAdmin}>Admin Profile</button></footer>
            </div>
        </div>
    )

    const orderScreen = (
        <>
            <h2 className='restaurantsDisplay col-12'>Order Details</h2>
            <form className="col" onSubmit={submitName}>
                <input type='text' name="customerName" className='customerName' placeholder='Order Name' value={customerValue} onChange={addCustomerName} required></input>
                <button type='submit' name="submit" className='customerNameSubmit'>Order Name</button>
            </form>
            <div>
                {orderDisplay}
            </div>
            <div className="col">
                <p className='subTotal'> {customerName} Sub-Total ${total}</p>
                <div className='col'>
                    <button className='backToMenu' onClick={() => setScreen(false)}>Back to Menu</button>
                    <button className='cancelButton' onClick={cancelOrder}>Cancel</button>
                    <button className='completeButton' onClick={clearOrder}>Pay Now</button>
                </div>
            </div>
        </>
    )

    return (
        <>
            <div className="container">
                <div className='row'>
                    {adminScreen ? adminProfile : screen ? orderScreen : menuScreen}
                </div>
            </div>
        </>
    );
}

export default HookMyFood;