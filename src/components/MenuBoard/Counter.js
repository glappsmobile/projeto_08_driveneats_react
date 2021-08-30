import './Counter.css';

const Button = ({label, type, action}) => (
    <div className={`button-counter ${type}`} onClick={action}>
        {label}
    </div>
)

const Counter = ({updateOrders, categoryName, quantity, uid}) => {

    const setNewQuantity = (newQuantity) => {
        updateOrders({categoryName, quantity:newQuantity, uid, isSelected: true})
    }

    const addQuantity = () => {
        setNewQuantity(quantity+1)
    }

    const subtractQuantity = () => {
        if (quantity > 1) {
            setNewQuantity(quantity-1)
        }
    }

    return (
        <div className="counter">
            <Button 
                label="-" 
                key="minus" 
                type={`minus ${(quantity === 1) && "disabled"}`} 
                action={subtractQuantity} 
            />
            <span> {quantity} </span>
            <Button 
                label="+" 
                key="plus" 
                type="plus" 
                action={addQuantity}
            />
        </div>
    )
}

export default Counter;