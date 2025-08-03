let tourDestination = ["Cox's Bazaar", "Kuakata", "Rangamati"];
console.log(tourDestination);
// Output: ["Cox's Bazaar", "Kuakata", "Rangamati"]

tourDestination.push("Sylhet");
console.log(tourDestination);
// Output: ["Cox's Bazaar", "Kuakata", "Rangamati", "Sylhet"]

tourDestination.push("Sajek", "Shopnopuri");
console.log(tourDestination);
// Output: ["Cox's Bazaar", "Kuakata", "Rangamati", "Sylhet", "Sajek", "Shopnopuri"]

tourDestination.pop();
console.log("Final Array: " + tourDestination)
// Output: ["Cox's Bazaar", "Kuakata", "Rangamati", "Sylhet", "Sajek"]