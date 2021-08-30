import { Link } from 'react-router-dom';
import './BottomBar.css'

const BottomBar = ({isPurchaseValid}) => {
    return (
    <div className="bottom-bar">
        <button className="btn-buy" disabled={!isPurchaseValid} >
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

export default BottomBar;