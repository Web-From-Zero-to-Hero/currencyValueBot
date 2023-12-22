//В этом файле хранятся все кнопки

import { Markup } from "telegraf";


const popularCurrencyBtn = Markup.keyboard([
    ["USD"],
    ["EUR"],
]).resize();


export default popularCurrencyBtn;