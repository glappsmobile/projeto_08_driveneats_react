import MenuBoard from './components/MenuBoard/MenuBoard';
import BottomBar from './components/BottomBar';
import './Home.css'

const Home = ({selectedItems, setSelectedItems, orders, setOrders, isPurchaseValid, setIsPurchaseValid}) => {

    const updateOrders = ({ uid, isSelected, quantity, categoryName }) => {
        const updatedOrders = orders.map((category) => {
            let updatedCategory = { ...category }
            if (category.name === categoryName) {
                updatedCategory.items = category.items.map(item => {
                    if (item.uid === uid) {
                        return { ...item, isSelected, quantity }
                    } else {
                        return { ...item }
                    }
                });
            }
            return updatedCategory;
        });

        setOrders(updatedOrders);

        let counterSelectedCategories = 0;
        let tempSelectedItems = updatedOrders.map(
            category =>
                category.items.filter(item =>
                    item.isSelected === true)
        );

        const selectedItemsList = [];
        let totalPrice = 0;

        tempSelectedItems.forEach((category) => {
            if (category.length > 0) { counterSelectedCategories++ }
            category.forEach(item => {
                const newPrice = item.price * item.quantity;
                totalPrice += newPrice;
                selectedItemsList.push({ ...item, price: newPrice })
            })
        });
        selectedItemsList.push({ name: 'Total', price: totalPrice })
        setIsPurchaseValid(counterSelectedCategories === tempSelectedItems.length);
        setSelectedItems(selectedItemsList);
    }

    return (
        <>
            <MenuBoard
                orders={orders}
                updateOrders={updateOrders}
            />
            <BottomBar
                selectedItems={selectedItems}
                isPurchaseValid={isPurchaseValid}
            />
        </>
    )
}

export default Home;