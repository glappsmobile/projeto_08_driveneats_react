const PopUp = ({isPopUp, closePopUp, children}) => {
    return (
        <div class={`confirm-window `+(isPopUp || 'hidden')}>
            <div class={`overlay ` + (isPopUp || 'hidden')} onclick="toggleConfirmWindow();" />
            <div class="panel-confirm">
                <p class="txt-title-confirm-panel"><strong>Confirme seu pedido</strong></p>
                <ul class="ctn-items-confirm">
                    {children}
                </ul>
                <button class="btn-panel btn-ok">Tudo certo, pode pedir!</button>
                <button class="btn-panel btn-cancel" onClick={closePopUp}>Cancelar</button>
            </div>
        </div>
    )
}

export default PopUp;