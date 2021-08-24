import MenuItem from './MenuItem';

const MenuList = (props) => {
    return (
        <div>
            <h2>Primeiro, seu prato</h2>


            <ul class="ctn-options food-type-0">
                {props.items.map((item) => <MenuItem type={props.type} {...item} />)}
            </ul>
        </div>
    )
}

export default MenuList;