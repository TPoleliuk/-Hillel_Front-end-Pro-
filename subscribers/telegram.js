import pubSub from "../pubsub.js";
import Sender from "./sender.js";

class TelegramSender extends Sender {
    constructor() {
        super();
        
        pubSub.subscribe("basket: add", (...arg) => {
            console.log("---- telegram subscriber ------");
            this.notifyAdd(...arg);
        });
        
        pubSub.subscribe("basket: remove", this.notifyRemove);
    }
}

console.log("---starting module TG -----");

const telegramSender = new TelegramSender();

console.log(pubSub.subscribers, "before Telegram Unsubscribe")

pubSub.unsubscribe("basket: remove", telegramSender.notifyRemove)

console.log(pubSub.subscribers, "after Telegram Unsubscribe")