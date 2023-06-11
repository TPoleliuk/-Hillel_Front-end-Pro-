class PubSub {
  subscribers = {};
  
  subscribe(event, listener) {
    const subscribers = this.subscribers;
  
    if (!subscribers[event]) {
      // if i first
      subscribers[event] = [listener];
    } else {
      // if i second
      subscribers[event].push(listener);
    };
  }
  
  unsubscribe(event, listener) {
    // Variant 1
    const indexOfUnsubscriber = this.subscribers[event] ? this.subscribers[event].indexOf(listener) : -1;

    if (indexOfUnsubscriber >= 0) {
      this.subscribers[event].splice(indexOfUnsubscriber, 1);
    };

    // Variant 2

    // const subscribers = this.subscribers[event];
    // if (subscribers) {
    //   this.subscribers[event] = subscribers.filter(subscriber => {
    //     return subscriber !== listener;
    //   });
    // };
  }
  
  publish(event, ...args) {
    const listeners = this.subscribers[event];
  
    if (!listeners || !listeners.length) {
      return;
    };
  
    listeners.forEach((listener) => listener.apply(null, args));
  }
}
  
console.log('---starting module PubSub -----');
  
export default new PubSub();

