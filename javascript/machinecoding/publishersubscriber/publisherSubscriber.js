function Eventt() {
  let eventList = [];
  this.subscribe = (event) => {
    eventList.push(event);
  };

  this.unsubscribe = (event) => {
    eventList = eventList.filter((eventItem) => eventItem !== event);
  };

  this.fire = (...args) => {
    eventList.forEach((eventItem) => eventItem(...args));
  };
}

const eventHandler = (item) => {
  console.log("fired " + item);
};

const eventHandler1 = (item) => {
  console.log("moved " + item);
};

const eventt = new Eventt();
eventt.subscribe(eventHandler);
eventt.fire("cooled");

eventt.unsubscribe(eventHandler);
eventt.fire("won");

eventt.subscribe(eventHandler);
eventt.subscribe(eventHandler1);
eventt.fire("winner");
