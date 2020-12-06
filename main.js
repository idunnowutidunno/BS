//main.js
import splitBill from './billSplit.js';

//variables
let subt = document.getElementById('subtotal');
let qty = document.getElementById('persons');
let fee = document.getElementById('fees');
let but1 = document.getElementById('b1');
let but2 = document.getElementById('b2');
let res = document.getElementById('result');

//functions
const func1 = (message)=>{
    
    res.innerHTML =message;
    
};
//events

but2.onclick = function(){
    mes = 'it works!'
    func1(mes);
};
