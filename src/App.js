import Home from './screens/Home/Home';
import Revision from './screens/Revision/Revision'
import Header from './components/Header';
import React, { useState } from 'react'
import {Route, Switch } from 'react-router-dom';
import arrMenu from './screens/Home/components/MenuBoard/arrOrders';
import './css/reset.css'
import './css/style.css'

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
