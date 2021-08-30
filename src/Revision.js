import toBRL from './helpers/toBRL';
import { Link } from 'react-router-dom';
import './Revision.css';

const Revision = ({selectedItems}) => {

/*const Revision = () => {
    const selectedItems = [
        { name: "teste", price: 3, quantity: 1 },
        { name: "teste", price: 3, quantity: 2 },
        { name: "teste", price: 3, quantity: 1 },
        { name: "teste", price: 3, quantity: 5 },
        { name: "teste", price: 3, quantity: 1 },
    ]*/
    return (
        <div className="revision-screen">
            <div class="confirm-window">
                <h1>Revise seu pedido</h1>
                <div class="panel-confirm">
                    <p class="txt-title-confirm-panel"><strong>Confirme seu pedido</strong></p>
                    <ul class="ctn-items-confirm">
                        {selectedItems.map(({name, price, quantity}, i) => {
                            if (i < selectedItems.length - 1) {
                                return (
                                    <li class="row-item-confirm">
                                        <span>{quantity} x {name}</span>
                                        <span>{toBRL(price)}</span>
                                    </li>
                                )
                            }
                            return (
                                <li class="row-item-confirm">
                                    <strong>{name}</strong>
                                    <strong>{toBRL(price)}</strong>
                                </li>
                            )
                        })}
                    </ul>
                </div>
            </div>
            <button class="btn-panel btn-ok">Tudo certo, pode pedir!</button>
            <button class="btn-panel btn-cancel">
                <Link to={'/'} className="router-link btn-buy">
                    Cancelar
                </Link>
            </button>
        </div>
    )
}

export default Revision;