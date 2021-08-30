import React, {useState} from 'react'
import MenuBoard from './components/MenuBoard/MenuBoard';
import arrMenu from './components/MenuBoard/arrMenu';
import Header from './components/Header';
import Footer from './components/Footer';
import PopUp from './components/PopUp'
import toBRL from './helpers/toBRL'

const App = () => {
    const [orders, setOrders] = useState(arrMenu);
    const [isPurchaseValid, setIsPurchaseValid] = useState(false);
    const [selectedItems, setSelectedItems] = useState([]);
    const [isPopUp, setIsPopUp] = useState(false)

    const openPopUp = () => {
        setIsPopUp(true);
    }

    const closePopUp = () => {
        setIsPopUp(false);
    }

    const updateOrders = ({uid, isSelected, quantity, categoryName}) => {
        const updatedOrders = orders.map((category) => {
            let updatedCategory = { ...category }
            if (category.name === categoryName) {
                updatedCategory.items = category.items.map(item => {
                    if (item.uid === uid) {
                        return { ...item, isSelected, quantity }
                    } else {
                        return { ...item }
                    }
                });
            }
            return updatedCategory;
        });

        setOrders(updatedOrders);

        let counterSelectedCategories = 0;
        let tempSelectedItems = updatedOrders.map(
            category => 
            category.items.filter(item => 
            item.isSelected === true)
        );

        const selectedItemsList = [];
        let totalPrice = 0;

        tempSelectedItems.forEach((category) => {
            if (category.length > 0) {counterSelectedCategories++}
            category.forEach(item => { 
                const newPrice = item.price * item.quantity;
                totalPrice += newPrice;
                selectedItemsList.push({ ...item, price: newPrice})
            })
        });
        selectedItemsList.push({name: 'Total', price: totalPrice})

        setIsPurchaseValid(counterSelectedCategories === tempSelectedItems.length);
        
        setSelectedItems(selectedItemsList);
    }

    return (
        <>
            <Header />
            <MenuBoard 
                orders={orders} 
                updateOrders={updateOrders} 
            />
            <Footer 
                openPopUp={openPopUp}
                selectedItems={selectedItems} 
                isPurchaseValid={isPurchaseValid}
            />
            <PopUp 
                isPopUp={isPopUp}
                closePopUp={closePopUp}
            >
                {selectedItems.map(({name, price, quantity}, i) => {
                    if (i < selectedItems.length-1){
                        return (
                            <li class="row-item-confirm">
                                <span>{quantity} x {name}</span>
                                <span>{toBRL(price)}</span>
                            </li>
                        )
                    }
                    return (
                        <li class="row-item-confirm">
                            <strong>{name}</strong>
                            <strong>{toBRL(price)}</strong>
                        </li>
                    )
                })}
            </PopUp>
        </>
    )
}

export default App;

/*
<li class="row-item-confirm">
                        <span>{"da"}</span>
                        <span>R$ {"price"}</span>
                    </li>
                    */