import './Counter.css';

const Button = ({label, type, action}) => (
    <div className={`button-counter ${type}`} onClick={action}>
        {label}
    </div>
)

const Counter = ({updateOrders, categoryName, quantity, uid}) => {

    const setNewQuantity = (newQuantity, isSelected) => {
        updateOrders({categoryName, quantity:newQuantity, uid, isSelected})
    }

    const addQuantity = () => {
        setNewQuantity((quantity+1), true)
    }

    const subtractQuantity = () => {
        if (quantity > 1) {
            setNewQuantity((quantity-1), true)
        } else {
            setNewQuantity(0, false)
        }
    }

    return (
        <div className="counter">
            <Button 
                label="-" 
                key="minus" 
                type={`minus`} 
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