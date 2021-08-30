const response = [
    {
        name: "prato",
        genre: "m",
        items: [
            { name: "Strogonoff", id: "strogonoff", description: "Strogonoff de frango, batata palha e arroz", price: 17 },
            { name: "Baião de dois", id: "baiao-de-dois", description: "", price: 23 },
            { name: "Steak au poivre", id: "steak-au-poivre", description: "Steak au poivre e arroz", price: 47 },
            { name: "Salada", id: "salada", description: "", price: 7 },
            { name: "Pizza Prato Feito", id: "pizza", description: "Metade pizza, metade prato feito", price: 59 }
        ]
    }
    ,
    {
        name: "bebida",
        genre: "f",
        items: [
            { name: "Coca", id: "coca", description: "300ml", price: 5 },
            { name: "Dolly", id: "dolly", description: "300ml", price: 0.5 },
            { name: "Pepsi", id: "pepsi", description: "300ml", price: 5.5 },
            { name: "Mate", id: "mate", description: "300ml", price: 2 },
            { name: "Skol Beats", id: "skol-beats", description: "300ml", price: 7}
        ]
    }
    ,
    {
        name: "sobremesa",
        genre: "f",
        items: [
            { name: "Pudim", id: "pudim", description: "1 Fatia", price: 2.5 },
            { name: "Salada de frutas", id: "salada-de-frutas", description: "", price: 4},
            { name: "Brownie", id: "brownie", description: "", price: 2 },
            { name: "Sorvete", id: "sorvete", description: "500ml", price: 6 },
            { name: "Açaí", id: "acai", description: "500ml", price: 7 }
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