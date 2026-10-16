//6 : What are promises in JavaScript, and how do they help manage asynchronous operations? Provide an example of a promise and explain its usage.
//Ans : Promises in JavaScript are objects that represent the eventual completion (or failure) of an asynchronous operation and its resulting value. They help manage asynchronous operations by providing a cleaner and more manageable way to handle success and error cases compared to traditional callback functions.

//Example of a promise:
const fetchDataPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        const data = {
            "Lucky Number": 1,
            name: "Rushikesh Raykar"
        };
        resolve(data); // Resolve the promise with the fetched data
    }, 2000); // Simulate a delay of 2 seconds
});

//Explain this like a kid is reading :
// A promise is like a box that might contain something (data) or might be empty (error).
// You can't open the box immediately, but you can say "when the box is ready, do this".
// In this example, the box will contain data about a person after 2 seconds.
//explain resolve and reject :
// - resolve: This is like saying "Yay! I got the data!" It means the operation was successful, and you can now use the data.
// - reject: This is like saying "Oh no! Something went wrong!" It means the operation failed, and you can handle the error accordingly.

//Usage of the promise:
fetchDataPromise
    .then(data => {
        console.log("Promise resolved successfully!");
        console.log("Data received:", data); // This will run if the promise is resolved successfully
    }
    )
    .catch(error => {
        console.error("Promise rejected with error:", error); // This will run if the promise is rejected.
        console.error("Error fetching data:", error); // This will run if the promise is rejected
    }
    );