const delayOutput = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

async function getUser() {
  console.log("Getting user");
  await delayOutput(1000);
  console.log("User: Gaurang");
}

getUser();
