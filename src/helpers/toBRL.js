const toBRL = (num) => {
    const format = { minimumFractionDigits: 2, style: 'currency', currency: 'BRL' }
    return num.toLocaleString('pt-BR', format)
}

export default toBRL;