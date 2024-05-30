function showlog(val) {
  console.log(val);
}

let promise = new Promise((resolve, reject) => {
  let a = "10";
  if (a === "10") {
    resolve("Promise is resolved");
  } else {
    reject("Promise is rejected");
  }
});
promise
  .then(function (value) {
    showlog(value);
  })
  .catch(function (error) {
    console.log(error);
  });

let promise2 = new Promise((resolve, reject) => {
  let b = Math.random();
  if (b < 0.5) {
    resolve("Successfull");
  } else {
    reject("Error");
  }
});
promise2
  .then(function (val) {
    showlog(val);
  })
  .catch(function (error) {
    console.log(error);
  });

Promise.all([promise, promise2])
  .then((values) => {
    console.log("Both promises resolved:", values);
  })
  .catch((error) => {
    console.log("At least one promise rejected:", error);
  });
//writting document.write() when page is loaded will delete all html on page
//   document.addEventListener("DOMContentLoaded", function () {
//     document.write("This is document.write");
//   });

//   for (let i = 1; i <= 5; i++) {
//     let line = "";
//     for (let j = 1; j <= i; j++) {
//       line += "* ";
//     }
//     console.log(line);
//   }
