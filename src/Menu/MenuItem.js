const MenuItem = ({name, id, uid, description, price, isSelected, quantity, updateOrders, categoryName}) => {
    return (
        <li 
            className={`card-option ${isSelected && "selected"}`} 
            onClick={() =>  updateOrders({
                uid,
                categoryName,
                isSelected: !isSelected, 
                quantity: (quantity || 1)
            })}
        >
            <img src={`images/${id}.jpg`} alt={name} />
            <strong>{name}</strong>
            <p class="txt-option-desc">{description}</p>
            <p class="txt-black">R$ {price}</p>
            <ion-icon name="checkmark-circle" class="check-icon"></ion-icon>
        </li>
    )
}

export default MenuItem;