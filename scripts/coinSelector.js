async function getExchange() {
    const coinSelected = document.getElementById('coin-selector').value
    const url = `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/usd.json`

    try {
        const response = await fetch(url)
        const json = await response.json()

        const basePrices = {
            basic: 0,
            professional: 25,
            premium: 60
        }

        const coinSymbol = {
            usd: '$',
            eur: '€',
            gbp: '£'
        }

        const exchange = json.usd[coinSelected]

        console.log(exchange)
        const formatPrice = (price) => {
            return price % 1 === 0 ? price.toFixed(0) : price.toFixed(2)
        }

        const basicPrice = formatPrice(basePrices.basic * exchange)
        const professionalPrice = formatPrice(basePrices.professional * exchange)
        const premiumPrice = formatPrice(basePrices.premium * exchange)

        document.getElementById('basicPrice').innerHTML = `${coinSymbol[coinSelected]}${basicPrice}`
        document.getElementById('professionalPrice').innerHTML = `${coinSymbol[coinSelected]}${professionalPrice}`
        document.getElementById('premiumPrice').innerHTML = `${coinSymbol[coinSelected]}${premiumPrice}`
    } catch (error) {
        console.log(error)
    }
}

window.onload = getExchange
document.getElementById('coin-selector').addEventListener('change', getExchange)