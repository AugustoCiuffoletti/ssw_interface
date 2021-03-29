// Import stylesheets
import './style.css';

interface mioTipo {
    f1: string;
    f2: number
};
var X: mioTipo = {
    f1:"",
    f2:0
};
X.f1 = "Hello";
X.f2 = 2;
console.log(X);