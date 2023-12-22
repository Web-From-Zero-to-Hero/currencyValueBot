import makeBot from './bot.js';

(async function () {
    try {
        //Вызываем метод для запуска бота
        await makeBot().launch();

        console.log('Bot is running!');
    } catch (error) {
        console.log(error);
    }
}())