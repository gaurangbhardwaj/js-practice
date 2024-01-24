const obj = {
  fName: "Gaurang",
  lName: "Bhardwaj",
  getName: function (country, city) {
    console.log(this.fName, this.lName, country, city);
  },
};

const newObj = {
  fName: "Peter",
  lName: "Parker",
};

Function.prototype.myBind = function (obj, ...agrs1) {
  const func = this;
  return function (...agrs2) {
    func.apply(obj, [...agrs1, ...agrs2]);
  };
};

const bindedVal = obj.getName.myBind(newObj, "India");
bindedVal("Delhi");
