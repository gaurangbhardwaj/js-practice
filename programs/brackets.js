function validateBrackets(str) {
  if (!str) return false;
  let stack = [];
  for (let i = 0; i < str.length; i++) {
    const data = str[i];
    console.log(data, stack);
    if (data === "[" || data === "(" || data === "{") {
      stack.push(data);
      continue;
    }
    if (stack.length === 0) return false;

    let check;
    switch (data) {
      case ")":
        check = stack.pop();
        if (check == "{" || check == "[") return false;
        break;
      case "}":
        check = stack.pop();
        if (check == "(" || check == "[") return false;
        break;
      case "]":
        check = stack.pop();
        if (check == "(" || check == "{") return false;
        break;
    }
  }
  return stack.length === 0;
}

console.log(validateBrackets("([{}])([{}])([{}])"));
