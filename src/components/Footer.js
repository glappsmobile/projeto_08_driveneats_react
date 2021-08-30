import { Link } from 'react-router-dom';
import './Footer.css'

const Footer = ({isPurchaseValid}) => {
    return (
    <div class="ctn-button">

        <button class="btn-buy" disabled={!isPurchaseValid} >
            {isPurchaseValid? (
                <Link to={'/revision'} className="router-link btn-buy">
                    <p>Selecione os 3 itens para fechar o pedido</p>
                </Link>
            ) : (
                <p>Selecione os 3 itens para fechar o pedido</p>
            )}
        </button>

    </div>
    )
}

export default Footer;