import Home from './Home';
import Revision from './Revision'
import Header from './Header';
import React, { useState } from 'react'
import {Route, Switch } from 'react-router-dom';
import arrMenu from './components/MenuBoard/arrMenu';

const App = () => {
    const [selectedItems, setSelectedItems] = useState([]);
    const [orders, setOrders] = useState(arrMenu);
    const [isPurchaseValid, setIsPurchaseValid] = useState(false);

    return (
        <>
            <Header />
            <Switch>
                <Route path="/" exact >
                    <Home 
                        isPurchaseValid={isPurchaseValid} 
                        setIsPurchaseValid={setIsPurchaseValid} 
                        orders={orders} setOrders={setOrders} 
                        setSelectedItems={setSelectedItems} 
                        selectedItems={selectedItems} 
                    />
                </Route>

                <Route path="/revision" exact >
                    <Revision selectedItems={selectedItems} />
                </Route>
            </Switch>
        </>
    )
}

export default App;
