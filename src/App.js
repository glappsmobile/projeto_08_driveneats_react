import React, {useState} from 'react'
import MenuBoard from './components/MenuBoard/MenuBoard';
import arrMenu from './components/MenuBoard/arrMenu';
import Header from './components/Header';
import Footer from './components/Footer';

const App = () => {
    const [orders, setOrders] = useState(arrMenu);
    const [isPurchaseValid, setIsPurchaseValid] = useState(false);
    const [selectedItems, setSelectedItems] = useState([]);

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

        const tempSelectedItems = updatedOrders.map(
            category => 
            category.items.filter(item => 
            item.isSelected === true)
        );
        
        tempSelectedItems.forEach((category) => {
            if (category.length > 0) {counterSelectedCategories++}
        });

        setIsPurchaseValid(counterSelectedCategories === tempSelectedItems.length);
        setSelectedItems(tempSelectedItems);
    }

    return (
        <>
            <Header />
            <MenuBoard 
                orders={orders} 
                updateOrders={updateOrders} 
            />
            <Footer 
                selectedItems={selectedItems} 
                isPurchaseValid={isPurchaseValid}
            />
        </>
    )
}

export default App;