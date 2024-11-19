import { Bot, webhookCallback } from "grammy";

const bot = new Bot("7853440330:AAFTtc3kfjLwiM-TZMR8GHTLVyNcyFOLwTc");

bot.command("start", (ctx) => ctx.reply("Hello!"));

bot.on("message", (ctx) => {
  if (ctx.message?.text === "hi") {
    ctx.reply("Hello!");
  } else {
    ctx.reply("I don't understand you!");
  }
});

webhookCallback(bot, "fastify", {});

bot.api.setWebhook("https://your-app-name.glitch.me/");
