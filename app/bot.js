import { Telegraf, session } from 'telegraf';
import { message } from 'telegraf/filters';
import 'dotenv/config';
import popularCurrencyBtn from '../utils/buttons.js';
import getCurrency from '../functions/getCurrency.js';

const bot = new Telegraf(process.env.TELEGRAM_BOT_TOKEN);

const makeBot = () => {   
    bot.command('start', async (context) => {
        context.reply("Введите название валюты или выберите из списка ниже.", popularCurrencyBtn);
    })

    // bot.hears("USD", async (context) => {
    //     let answer = await getCurrency("USD");
    //     context.reply(`Курс доллара: ${answer} рублей`);
    // });

    // bot.hears("EUR", async (context) => {
    //     let answer = await getCurrency("EUR");
    //     context.reply(`Курс евро: ${answer} рублей`);
    // });

    bot.on(message("text"), async (context) => {
        let answer;
        try {
            answer = await getCurrency(context.update.message.text);
            await context.reply(`Курс: ${answer} рублей`);
        } catch (error) {
            await context.reply("Неверное название валюты! Попробуйте ещё раз");
        }
    });

    // bot.hears("Что там с рублём?", async (context) => {
    //     context.reply("Privet");
    // });

    // bot.on(message("text"), async (context) => {
    //     await context.reply("Какое прекрасное сообщение");
    // });

    // bot.on(message("voice"), async (context) => {
    //     await context.reply("Приятный голос");
    // });



    return bot;
}


export default makeBot;