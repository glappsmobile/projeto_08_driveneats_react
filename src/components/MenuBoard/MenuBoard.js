import MenuList from './MenuList'

const MenuBoard = ({orders, updateOrders}) =>  { 
    return (
        <main>
            {orders.map((order, index) => (
                    <MenuList 
                        pos={`${index+1}/${orders.length}`} 
                        key={index} 
                        updateOrders={updateOrders} 
                        {...order}
                    />
                ))
            }
        </main>
    ) 
}

export default MenuBoard;