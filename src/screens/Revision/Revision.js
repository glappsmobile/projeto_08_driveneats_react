import toBRL from '../../helpers/toBRL';
import { Link } from 'react-router-dom';
import './Revision.css';

const Revision = ({selectedItems}) => {

    if (selectedItems.length === 0) { 
        window.location.href = "../"
        return;
    } 

    function sendToWhatsapp() {
        let message = "Olá, gostaria de fazer o pedido: \n";
        selectedItems.forEach(({quantity, name, price}, i) => {
            if (i !== selectedItems.length - 1){
                message += `- ${quantity}x ${name}  \n`
            } else {
                message += `*${name}: ${toBRL(price)}*`;
            }
        })
        const contactNumber = "+5521968090449"
        message = encodeURIComponent(message);
        window.location.assign(`https://wa.me/${contactNumber}?text=${message}`, "_self");
    }

    return (
        <div className="revision-screen">
            <div className="confirm-window">
                <h1>Revise seu pedido</h1>
                <div className="panel-confirm">
                    <p className="txt-title-confirm-panel"><strong>Confirme seu pedido</strong></p>
                    <ul className="ctn-items-confirm">
                        {selectedItems.map(({name, price, quantity}, i) => {
                            if (i < selectedItems.length - 1) {
                                return (
                                    <li className="row-item-confirm">
                                        <span>{quantity} x {name}</span>
                                        <span>{toBRL(price)}</span>
                                    </li>
                                )
                            }
                            return (
                                <li className="row-item-confirm">
                                    <strong>{name}</strong>
                                    <strong>{toBRL(price)}</strong>
                                </li>
                            )
                        })}
                    </ul>
                </div>
            </div>
            <button className="btn-panel btn-ok" onClick={sendToWhatsapp}>Tudo certo, pode pedir!</button>
            <button className="btn-panel btn-cancel">
                <Link to={'/'} className="router-link btn-buy">
                    Cancelar
                </Link>
            </button>
        </div>
    )
}

export default Revision;