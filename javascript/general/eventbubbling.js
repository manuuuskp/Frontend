// Event bubbling - the phenomena in which an event triggered in one of the elements
// triggers its parent element's event and its parent element's event and so on.

// event.target - provides the target element where event is triggered.
// event.currentTarget - provides the current target element.

// event.eventPhase - tells which phase it undergoes. capturing | target | bubbling

// by default the events will be bubbled up.

// inorder to prevent the events from bubbling up we can use event.stopPropagation();

// There is another method called event.stopImmediatePropagation() which stops other event listeners as well.
