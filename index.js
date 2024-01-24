const workflow = [
  ["a", "b", "c"], // Step 1 (where "a", "b", "c" stages)
  ["a", "b", "c", "d"], // Step 2
  ["a"], // Step 3
  ["a", "b"], // Step 4
];
function getNextStep(currStep, currStage) {
  if (!currStep || !currStage || currStep > workflow?.length)
    return "Inavlid Params";
  const stageIndx = workflow[currStep - 1].findIndex(
    (stage) => stage === currStage
  ); // 1a
  if (stageIndx < 0) {
    return "Stage not found!";
  }
  // if its last step and last stage
  if (
    currStep === workflow?.length - 1 &&
    stageIndx >= workflow[currStep - 1]?.length
  ) {
    return "Happy Health";
  }

  if (stageIndx < workflow[currStep - 1]?.length - 1) {
    return `${currStep} ${workflow[currStep - 1][stageIndx + 1]}`;
  }
  return `${currStep + 1} ${workflow[currStep][0]}`;
}

console.log(getNextStep(1, "a"));
console.log(getNextStep(1, "b"));
console.log(getNextStep(1, "c"));
console.log(getNextStep(4, "b"));
