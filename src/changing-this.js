const foo = {
  counter: 1,
  add: function(value) {
    this.counter += value;
    console.log(this);
  }
};

foo.add(1);

// call, apply

const newCounterState = {
  counter: 5
};

foo.add.call(newCounterState, 1);
foo.add.apply(newCounterState, [1]);

// bind

const bar = {
  counter: 1,
  add: function(value) {
    this.counter += value;
    console.log(this);
  }
};

bar.add = bar.add.bind(bar);

bar.add(1);

const addToBar = bar.add;
addToBar(1); // still works

bar.add.call({ counter: 500 }, 1);
bar.add.call(null, 1);

// partial application

const baz = {
  counter: 1,
  add: function(value) {
    this.counter += value;
    console.log(this);
  }
};

const incrementBaz = baz.add.bind(baz, 1);

incrementBaz();
incrementBaz(500);
