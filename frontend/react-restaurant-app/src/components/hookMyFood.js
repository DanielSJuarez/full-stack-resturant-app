import { useState, useEffect } from "react";
import MenuList from "./menuList";
import OrderDisplay from "./orderDisplay";
import Cookies from 'js-cookie';
// import MENU from "./menuItems";

function HookMyFood(props) {
    const [menu, setMenu] = useState(null);
    const [total, setTotal] = useState(0);
    const [orderList, setOrderList] = useState([]);
    const [screen, setScreen] = useState(false);

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
        // let previousLocalStorage = localStorage.getItem('orderList'); getting orders from local storage
        // localStorage.setItem('orderList', JSON.stringify([orderList, previousLocalStorage])); posting orders to local storage
        const orders = {
            name : orderList,
            price: total,   
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
        setScreen(false);
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
        <OrderDisplay {...item} removeSubTotal={removeSubTotal} removeOrder={removeOrder} order={order} subTotal={subTotal} />
    ));

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
                <footer className='footer'><a href="h1">Back to the top</a></footer>
            </div>
        </div>
    )

    const orderScreen = (
        <>
            <h2 className='restaurantsDisplay col'>Order Details</h2>
            <div>
                {orderDisplay}
            </div>
            <div className="col">
                <p className='subTotal'>Sub-Total ${total}</p>
                <div className='col'>
                    <button className='backToMenu' onClick={() => setScreen(false)}>Back to Menu</button>
                    <button className='completeButton' onClick={clearOrder}>Cancel</button>
                    <button className='completeButton' onClick={clearOrder}>Pay Now</button>
                </div>
            </div>
        </>
    )

    return (
        <>
            <div className="container">
                <div className='row'>
                    {screen ? orderScreen : menuScreen}
                </div>
            </div>
        </>
    );
}

export default HookMyFood;