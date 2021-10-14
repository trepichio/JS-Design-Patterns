export class MousePositionObservable {
  constructor() {
    this.subscriptions = [];
    window.addEventListener('mousemove', this.handleMouseMove);
  }

  handleMouseMove = (event) => {
    this.subscriptions.forEach(subscription => subscription(event.clientX, event.clientY));
  }
  subscribe(callback) {
    this.subscriptions.push(callback);

    // To unsubscribe, you just have to invoke the returned function
    return () => {
      this.subscriptions = this.subscriptions.filter(subscription => subscription !== callback)
    }
  }

};