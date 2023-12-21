async function getCurrency(valute) {
    let moneyData = await fetch("https://www.cbr-xml-daily.ru/daily_json.js").then((response) => response.json())
    let currency = moneyData.Valute[`${valute}`].Value;

    return currency;
}

export default getCurrency;