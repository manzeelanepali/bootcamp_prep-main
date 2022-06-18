let tacoCatInc = {
  gourmetShell: {
    "hard treat shell": { cost: 2, quantity: 100 },
    "soft treat shell": { cost: 1.5, quantity: 100 },
  },

  gourmetFishFilling: {
    salmon: { cost: 5, quantity: 100 },
    tuna: { cost: 5.5, quantity: 100 },
    sardines: { cost: 1.5, quantity: 100 },
  },

  gourmetVeggie: {
    "cat grass": { cost: 1, quantity: 100 },
  },

  gourmetSeasoning: {
    "cat nip": { cost: 0.5, quantity: 100 },
    "treat dust": { cost: 0.1, quantity: 100 },
  },

  cash: 0,
};

// YOUR CODE BELOW
tacoCatInc.currentInventory = function () {
  let totalValue = 0;

  for (let key in this) {
    let fstValue = this[key];
    for (let iKey in fstValue) {
      let sndValue = fstValue[iKey];
      totalValue += sndValue.cost * sndValue.quantity;
    }
  }
  return totalValue;
};
tacoCatInc.sale = function (order) {
  let price = 0;
  for (let key in order) {
    let curValue = order[key];
    let item = this[key][curValue];
    price += item.cost;
    item.quantity--;
  }

  this.cash += price;
  return price;
};
