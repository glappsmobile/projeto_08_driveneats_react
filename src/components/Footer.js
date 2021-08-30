const Footer = ({selectedItems, isPurchaseValid, openPopUp}) => (
    <div class="ctn-button">
        <button class="btn-buy" onClick={openPopUp} disabled={!isPurchaseValid} >
            <p>Selecione os 3 itens para fechar o pedido</p>
        </button>
    </div>
)

export default Footer;