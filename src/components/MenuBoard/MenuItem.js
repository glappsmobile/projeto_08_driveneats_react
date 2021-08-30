import './MenuItem.css';
import Counter from './Counter'

const MenuItem = ({name, id, uid, description, price, isSelected, quantity, updateOrders, categoryName}) => {
    return (
        <li className={`card-option ${isSelected && "selected"}`} >
            <div 
                className="click-holder" 
                onClick={() => updateOrders({
                    uid,
                    categoryName,
                    isSelected: !isSelected,
                    quantity: (quantity || 1)
                })}
            />
            <img src={`images/${id}.jpg`} alt={name} />
            <strong>{name}</strong>
            <p className="txt-option-desc">{description}</p>

            <footer>
                <p className="txt-black">R$ {price}</p>
                <Counter 
                    updateOrders={updateOrders} 
                    categoryName={categoryName}
                    quantity={quantity}
                    uid={uid}
                />
            </footer>
            
        </li>
    )
}

export default MenuItem;