const response = [
    {
        name: "prato",
        genre: "m",
        items: [
            { name: "Strogonoff", id: "strogonoff", description: "Strogonoff de frango, batata palha e arroz", price: "17,00" },
            { name: "Baião de dois", id: "baiao-de-dois", description: "", price: "23,00" },
            { name: "Steak au poivre", id: "steak-au-poivre", description: "Steak au poivre e arroz", price: "47,00" },
            { name: "Salada", id: "salada", description: "", price: "7,00" },
            { name: "Pizza Prato Feito", id: "pizza", description: "Metade pizza, metade prato feito", price: "59,00" }
        ]
    }
    ,
    {
        name: "bebida",
        genre: "f",
        items: [
            { name: "Coca", id: "coca", description: "300ml", price: "5,00" },
            { name: "Dolly", id: "dolly", description: "300ml", price: "0,50" },
            { name: "Pepsi", id: "pepsi", description: "300ml", price: "5,50" },
            { name: "Mate", id: "mate", description: "300ml", price: "2,00" },
            { name: "Skol Beats", id: "skol-beats", description: "300ml", price: "7,00" }
        ]
    }
    ,
    {
        name: "sobremesa",
        genre: "f",
        items: [
            { name: "Pudim", id: "pudim", description: "1 Fatia", price: "2,50" },
            { name: "Salada de frutas", id: "salada-de-frutas", description: "", price: "4,00" },
            { name: "Brownie", id: "brownie", description: "", price: "2,00" },
            { name: "Sorvete", id: "sorvete", description: "500ml", price: "6,00" },
            { name: "Açaí", id: "acai", description: "500ml", price: "7,00" }
        ]
    }
]

const arrMenu = response.map((category) => {
    return {
        ...category,
        items: category.items.map((items, index) => {
            return { ...items, isSelected: false, quantity: 0, uid: `${category.name}-${index}`}
        })
    }
})

export default arrMenu;