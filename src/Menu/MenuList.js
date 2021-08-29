import MenuItem from './MenuItem';

const MenuList = ({name, pos, genre, items, updateOrder}) => {

    const getIntro = () => {
        const curPosition = Number(pos.split('/')[0]);
        const boardSize = Number(pos.split('/')[1]);
        let intro = "Primeiro"
        if (1 < curPosition && curPosition < boardSize) {
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
                {items.map((item, index) => <MenuItem {...item} key={index} updateOrder={updateOrder} />)}
            </ul>
        </div>
    )
}

export default MenuList;