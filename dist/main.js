"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const grammy_1 = require("grammy");
const bot = new grammy_1.Bot("7853440330:AAFTtc3kfjLwiM-TZMR8GHTLVyNcyFOLwTc");
bot.command("start", (ctx) => ctx.reply("Hello!"));
(0, grammy_1.webhookCallback)(bot, "fastify", {});
bot.api.setWebhook("https://your-app-name.glitch.me/");
