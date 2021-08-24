import MenuList from './MenuList'
import arrMenu from './arrMenu';

const Menu = () =>  { 
    return (
        <div>
            { arrMenu.map((menuList) => <MenuList {...menuList} />) }
        </div>
    ) 
}

export default Menu;