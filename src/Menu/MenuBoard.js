import MenuList from './MenuList'

const MenuBoard = ({orders, updateOrders}) =>  { 
    return (
        <div>
            {orders.map((order, index) => <MenuList pos={`${index+1}/${orders.length}`} key={index} {...order} updateOrders={updateOrders} />) }
        </div>
    ) 
}

export default MenuBoard;