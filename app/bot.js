import { Telegraf, session } from 'telegraf';
import { message } from 'telegraf/filters';
import 'dotenv/config';
import popularCurrencyBtn from '../utils/buttons.js';
import getCurrency from '../functions/getCurrency.js';

//Инициализируем бота
const bot = new Telegraf(process.env.TELEGRAM_BOT_TOKEN);

const makeBot = () => {   
    //Добавляем возможность боту реагировать на команду start
    bot.command('start', async (context) => {
        //Второй аргумень в reply - список кнопок, которые появятся под клавиатурой (сам список находится в папке utils в файле buttons.js).
        //Для кнопок я выбрал 2 самые популярные валюты: доллар и евро
        context.reply("Введите название валюты или выберите из списка ниже.", popularCurrencyBtn);
    })

    // Добавляет обработку конкретного сообщения. Этот код закоментирован, так как у нас есть метод ниже.
    // bot.hears("USD", async (context) => {
    //     let answer = await getCurrency("USD");
    //     context.reply(`Курс доллара: ${answer} рублей`);
    // });

    // bot.hears("EUR", async (context) => {
    //     let answer = await getCurrency("EUR");
    //     context.reply(`Курс евро: ${answer} рублей`);
    // });

    //on позволяет нам отслеживать некоторые события. Например, любой текст, голосовое сообщение или стикер 
    //(чтобы работало с голосовухами, нужно заменить "text" на "voice", а для стикеров - "sticker" :) )
    bot.on(message("text"), async (context) => {
        let answer;
        try {
            //Вызываем метод для получения стоимости валюты в рублях
            answer = await getCurrency(context.update.message.text);
            //Выводим пользователю ответное сообещние в чат
            await context.reply(`Курс: ${answer} рублей`);
        } catch (error) {
            await context.reply("Неверное название валюты! Попробуйте ещё раз");
        }
    });

    //Возвращаем нашего бота, чтобы в отдельном файле (index.js) его запустить.
    return bot;
}


export default makeBot;