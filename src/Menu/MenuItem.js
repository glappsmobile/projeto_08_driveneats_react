import React, {useState} from 'react';

const MenuItem = ({name, id, description, price}) => {
    const [selected, setSelected] = useState(false);

    return (
        <li 
            className={`card-option ${selected && "selected"}`} 
            onClick={() =>  setSelected(!selected)}
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