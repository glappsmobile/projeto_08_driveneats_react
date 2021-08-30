const Footer = ({selectedItems, isPurchaseValid}) => (
    <div class="ctn-button">
        <button class="btn-buy" onClick={() => console.log(selectedItems)} disabled={!isPurchaseValid} >
            <p>Selecione os 3 itens para fechar o pedido</p>
        </button>
    </div>
)

export default Footer;