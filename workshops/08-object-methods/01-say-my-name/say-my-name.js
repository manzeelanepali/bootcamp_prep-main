// YOUR CODE BELOW
me = {
  name: "kate",
  getGreeting: function () {
    // return `hi, my name is ${this.name}`;
    return "Hi" + " " + "my name is " + this.name + ".";
  },
};
console.log(me.getGreeting("kate"));
