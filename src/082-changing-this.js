const counterState = {
  counter: 1
};

function addToCounter(value) {
  console.log(this);
  this.counter += value;
}

// Attaching properties
counterState.addToCounter = addToCounter;
counterState.addToCounter(5);
delete counterState.addToCounter;

// Safely attaching properties (ES6 only)
const addToCounterSymbol = Symbol('add to counter');
counterState[addToCounterSymbol] = addToCounter;
counterState[addToCounterSymbol](5);
delete counterState[addToCounterSymbol];

// call, apply

addToCounter.call(counterState, 1);
addToCounter.apply(counterState, [1]);

// bind

const addToCounterState = addToCounter.bind(counterState);

addToCounterState(5);

// Those do not modify `counterState`
addToCounterState.call({ counter: 500 }, 1);
addToCounterState.call(null, 1);

// partial application

const incrementCounterState = addToCounterState.bind(counterState, 1);

incrementCounterState();
incrementCounterState(500); // still only adds 1
