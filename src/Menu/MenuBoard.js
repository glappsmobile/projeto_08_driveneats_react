import MenuList from './MenuList'

const MenuBoard = ({orders, updateOrder}) =>  { 
    return (
        <div>
            {orders.map((order, index) => <MenuList pos={`${index+1}/${orders.length}`} key={index} {...order} updateOrder={updateOrder} />) }
        </div>
    ) 
}

export default MenuBoard;