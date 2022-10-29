// server.js
// from glitch
// from vs

// DATA

import * as dotenv from 'dotenv'
dotenv.config()

import { help } from "./data.js"

// CODE
import { Bot } from "grammy";

const { BOT_TOKEN } = process.env;
if (!BOT_TOKEN) throw new Error('"BOT_TOKEN" env var is required!');

console.log("");
console.log("##############################################");
console.log("############### BOT RE-STARTED ###############");
console.log("##############################################");
console.log("");

const bot = new Bot(process.env.BOT_TOKEN);

bot.command( 'start', ctx => {
  let first_name = ctx.update.message.from.first_name;
  let id = ctx.update.message.from.id;
  console.log(`=> new client : ${first_name} , id : ${id} !`);
  ctx.reply(`🤓 Hello dear sir ${first_name}, type /help to list what I can do for you !`);
});

bot.command( 'help', ctx => {
  ctx.reply(help)
  //setInterval( (ctx) => ctx.reply(ctx.update.message.from.first_name), 1000, ctx)
});

bot.on("message:sticker", ctx => ctx.reply("👍"));

bot.hears("hi", ctx => ctx.reply("Hey there"));
bot.hears(/torino/i, ctx => ctx.reply("Someone said Torino!?"));

bot.command("oldschool", ctx => ctx.reply("Hello"));

bot.command("test", ctx => {
  console.log(`${ctx.update.message.from.first_name} started a new test`)
  ctx.reply("🫥 this is a new test !")
  ctx.reply("1+3+2 = ?")
})

bot.command("end", ctx => {
  console.log(`${ctx.update.message.from.first_name} ended test`)
  ctx.reply("🎷 test ended !")
  ctx.reply("your score : 10/20")
})


bot.on("message:text", ctx => {
  const text = ctx.message.text; 
  console.log(text);
  ctx.reply('what is "' + text + '" ?')
});

 
bot.start();
