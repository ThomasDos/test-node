const testFunc = (number, number2, callback) => {
  setTimeout(() => {
    console.log("Fetching....");

    const myNumber = number * number2;

    callback(myNumber);
  }, 2000);
};

testFunc(4, 5, (data) => {
  console.log("test", data);
});
