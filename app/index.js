import makeBot from './bot.js';

(async function () {
    try {
        await makeBot().launch();

        console.log('Bot is running!');
    } catch (error) {
        console.log(error);
    }
}())