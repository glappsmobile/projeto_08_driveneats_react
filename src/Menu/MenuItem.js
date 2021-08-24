const MenuItem = (props) => {

    return (
            <li class={`card-option ${props.type} ${0}`} onclick="select(this)">
                <img src={`images/${props.id}.jpg`} alt={props.name} />
                <p><strong>{props.name}</strong></p>
                <p class="txt-option-desc">{props.description}</p>
                <p class="txt-black">R$ {props.price}</p>
                <ion-icon name="checkmark-circle" class="check-icon"></ion-icon>
            </li>
    )
}

export default MenuItem;