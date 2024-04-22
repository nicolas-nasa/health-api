import EventDispatcher from './EventDispatcher';

class Mocked {
  get() {
    return;
  }
}

describe('Domain events tests', () => {
  it('should register and event handler', () => {
    const event = new EventDispatcher();
    const mockedClass = new Mocked();
    event.register(mockedClass.constructor.name, { handle: mockedClass.get });
    expect(event.getEventHandlers).toEqual({
      Mocked: [{ handle: mockedClass.get }],
    });
    event.unregisterAll();
  });
  it('should unregister an event handler', () => {
    const event = new EventDispatcher();
    const mockedClass = new Mocked();
    event.register(mockedClass.constructor.name, { handle: mockedClass.get });
    event.unregister(mockedClass.constructor.name, { handle: mockedClass.get });
    expect(event.getEventHandlers).toEqual({ Mocked: [] });
    event.unregisterAll();
  });
  it('should unregister all event handlers', () => {
    const event = new EventDispatcher();
    const mockedClass = new Mocked();
    event.register(mockedClass.constructor.name, { handle: mockedClass.get });
    event.unregisterAll();
    expect(event.getEventHandlers).toEqual({});
  });
  it('should notify all event handlers', () => {
    const data = new Date();
    const event = new EventDispatcher();
    const mockedClass = new Mocked();
    event.register(mockedClass.constructor.name, { handle: mockedClass.get });
    event.notify({ dataTimeOccurred: data, eventData: mockedClass });
    expect(event.getEventHandlers).toEqual({
      Mocked: [{ handle: mockedClass.get }],
    });
    event.unregisterAll();
  });
});
