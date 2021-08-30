import MenuItem from './MenuItem';

const MenuList = ({name, pos, genre, items, updateOrders}) => {

    const getIntro = () => {
        const curPosition = Number(pos.split('/')[0]);
        const boardSize = Number(pos.split('/')[1]);
        let intro = "Primeiro"
        if (curPosition > 1 && curPosition < boardSize) {
            intro = "Agora"
        } else if (curPosition === boardSize) {
            intro = "Finalmente"
        }
        return intro
    }

    return (
        <div>
            <h2>{getIntro()}, {genre === "f" ? "sua" : "seu"} {name}</h2>
            <ul class="ctn-options">
                {items.map((item, index) => <MenuItem {...item} categoryName={name} key={index} updateOrders={updateOrders} />)}
            </ul>
        </div>
    )
}

export default MenuList;