const promise1 = () =>
    new Promise((resolve) => {
      setTimeout(resolve(console.log("promise1")), 0);
    });
  
  const promise2 = () =>
    new Promise((resolve) => {
      setTimeout(resolve(console.log("promise2")), 0);
    });
  
  
    setTimeout(()=>console.log("setTimeout1"), 0)
    promise1().then(setTimeout(()=>console.log("setTimeout of promise1"), 0));
    promise2().then(setTimeout(()=>console.log("setTimeout of promise2"), 0));
    setTimeout(()=>console.log("setTimeout2"), 0);
    console.log("console2");