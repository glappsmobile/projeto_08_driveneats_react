import React, {useState} from 'react'
import MenuBoard from './Menu/MenuBoard';
import arrMenu from './Menu/arrMenu';

const App = () => {
    const [orders, setOrders] = useState(arrMenu)

    const getPointerByUid = (uid) => {
        const splitData = uid.split('-');
        return { categoryName: splitData[0], index: splitData[1]}
    }

    const updateOrder = ({uid, isSelected, quantity}) => {
        const pointer = getPointerByUid(uid);
        setOrders(orders.map((category) => {
            let updatedCategory = {}
            if (category.name === pointer.categoryName){
                updatedCategory.items = category.items.map((item, index) => {
                    if (index === pointer.index){
                        return { ...item, isSelected, quantity }
                    } else {
                        return { ...item}
                    }
                });
            } else {
                updatedCategory = { ...category }
            }
            return updatedCategory;
        }))
    }


    return (
        <div>
            <MenuBoard orders={orders} updateOrder={updateOrder} />
        </div>
    )
}

export default App;

//if (category.name === pointer.categoryName)