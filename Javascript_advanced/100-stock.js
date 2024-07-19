const stock = {
  macbook: 2,
  iphone: 4,
};

function processPayment(itemName) {
  stock[itemName] -= 1;
  console.log("Payment is being processed for item " + itemName);
}

function processError(itemName) {
  console.log("No more " + itemName + " in stock");
  console.log("Payment is not being processed");
}

function processOrder(itemName, callbackPayment, callbackError) {
  const item = itemName.toLowerCase();
  console.log("Verifying the stock of " + item);

  if (stock[item] === undefined) {
    console.log(item + " is not offered");
  } else if (stock[item] >= 1) {
    callbackPayment(item);
  } else {
    callbackError(item);
  }
}

let item = prompt(
  "Please enter the item you would like to purchase (Macbook, iPhone)"
).trim();

processOrder(item, processPayment, processError);
// processOrder(item, processPayment, processError);
// processOrder(item, processPayment, processError);

processOrder("macbook", processPayment, processError);
processOrder("macbook", processPayment, processError);
processOrder("macbook", processPayment, processError);
processOrder("ipad", processPayment, processError);
