// 1: What are callback functions in JavaScript, and promises and how are they used in asynchronous programming? Provide an example of a callback function and explain its purpose.
// Ans : Callback functions in JavaScript are functions that are passed as arguments to other functions and are executed after a certain operation is completed. They are commonly used in asynchronous programming to handle tasks that take time to complete, such as I/O operations or network requests.

function fetchData() {
  return new Promise((resolve) => {
    setTimeout(() => {
      const data = { id: 1, name: "John Doe" };
      resolve(data); // "Resolves" the promise with the data
      //reject(data); // "Rejects" the promise with the data

    }, 2000);
  });
}; //Simulate a delay of 2 seconds

//Question:Without timeout can i use this function ?
//Answer: Yes, you can use the fetchData function without the setTimeout, but it would not simulate an asynchronous operation. The setTimeout is used here to mimic a delay that might occur during a real data fetch operation, such as an API call. If you remove the setTimeout, the callback would be called immediately, and it would not demonstrate the asynchronous behavior.
//This function simulates fetching data asynchronously and calls the provided callback function once the data is ready.


// Function 1: Modifies the data
function modifyData(data) {
  data.name = "Andy Wright"; 
  data.id = 420; 
  console.log("Data after modification:", data);
  return data;
}
// Executing the Promise chain smoothly
fetchData()
  .then(function(data) {
    console.log("Printing Data Syncronously before modification:", data);
    return data;
  })
  .then(function(data) {
    return modifyData(data);
  });