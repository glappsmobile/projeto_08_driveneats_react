import React, {useState} from 'react'
import MenuBoard from './Menu/MenuBoard';
import arrMenu from './Menu/arrMenu';

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
        const tempSelectedItems = getSelectedItems(updatedOrders);
        tempSelectedItems.forEach((category) => {
            if (category.length > 0) {counterSelectedCategories++}
        });

        setIsPurchaseValid(counterSelectedCategories === tempSelectedItems.length);
        setSelectedItems(tempSelectedItems);
    }

    const getSelectedItems = (updatedOrders) => { 
        return updatedOrders.map((category) => category.items.filter((item) => item.isSelected === true));
    }

    return (
        <div>
            <header>
                <h1>DrivenEats</h1>
                <p>Sua comida em 6 minutos</p>
            </header>
            <MenuBoard orders={orders} updateOrders={updateOrders} />
            <div class="ctn-button">
                <button class="btn-buy" onClick={() => console.log(selectedItems)} disabled={!isPurchaseValid} >
                    <p>Selecione os 3 itens para fechar o pedido</p>
                </button>
            </div>
        </div>
    )
}

export default App;