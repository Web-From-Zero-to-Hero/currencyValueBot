//Метод для вывода стоимости указанной валюты относительно рубля
async function getCurrency(valute) {
    //Обращаемся через API к сайту банка, чтобы узнать актуальные курсы валют (подробнее про REST API: https://education.yandex.ru/journal/chto-takoe-api)
    let moneyData = await fetch("https://www.cbr-xml-daily.ru/daily_json.js").then((response) => response.json())
    //Находим интересующую нас валюту среди списка всех валют
    let currency = moneyData.Valute[`${valute}`].Value;

    return currency;
}

export default getCurrency;