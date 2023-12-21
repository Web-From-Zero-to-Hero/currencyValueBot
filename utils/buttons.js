import { Markup } from "telegraf";


const popularCurrencyBtn = Markup.keyboard([
    ["USD"],
    ["EUR"],
]).resize();


export default popularCurrencyBtn;