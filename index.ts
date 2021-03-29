// Import stylesheets
import "./style.css";

interface mioTipo {
  f1: string;
  f2: number;
  op: (arg1: number) => number;
}
var X: mioTipo = {
  f1: "",
  f2: 0,
  op: function(x) {
    return x + this.f2;
  }
};
X.f1 = "Hello";
X.f2 = 2;  // Provate a sostituire 2 con "Hallo"
console.log(X);
console.log(X.op(7));
X.op = function(a) {
  return a * this.f2;
};
console.log(X.op(7));
