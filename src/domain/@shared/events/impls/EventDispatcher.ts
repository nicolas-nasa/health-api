import EventDispatcherInterface from "../event-dispatcher.interface";
import EventHandlerInterface from "../event-handler.interface";
import eventInterface from "../event.interface";

export default class EventDispatcher implements EventDispatcherInterface {
  private eventHandlers: { [eventName: string]: EventHandlerInterface[] } = {};

  get getEventHandlers(): { [eventName: string]: EventHandlerInterface[] } {
    return this.eventHandlers;
  }

  register(eventName: string, eventHandler: EventHandlerInterface): void {
    if (!this.eventHandlers[eventName]) {
      this.eventHandlers[eventName] = [];
    }
    this.eventHandlers[eventName].push(eventHandler);
  }

  unregister(eventName: string, eventHandler: EventHandlerInterface): void {
    if (this.eventHandlers[eventName]) {
      const index = this.eventHandlers[eventName].findIndex((e) => e.handle === eventHandler.handle);
      if (index !== -1) {
        this.eventHandlers[eventName].splice(index, 1);
      }
    }
  }

  unregisterAll(): void {
    this.eventHandlers = {};
  }

  notify(event: eventInterface): void {
    const eventName = event.eventData.constructor.name;
    if (this.eventHandlers[eventName]) {
      this.eventHandlers[eventName].forEach((eventHandler) => {
        eventHandler.handle(event);
      });
    }
  }
}