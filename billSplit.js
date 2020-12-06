//bill module

const addTax = (subtotal)=>{
    let tax = 1.09;
    return subtotal*tax; 
}
const newTab =(ID, st, fees, total )=> {
        return {            
        id: ID, 
        sub: st,
        fee: fees,
        totalamount: total,
    }


};


const splitBill = (subtotals, qty, fees)=>{
    let tabs = [];
    let feeSplit = fees/qty;
    let id = 0;
    
    subtotals.forEach(amount=>{
       let t = addTax(amount);
       let tot = t+feeSplit;
       id+=1;
       let ob = newTab(id, amount, feeSplit, tot );
       tabs.push(ob)
    });
    //console.log(tabs);
    return tabs; 

}

export default splitBill;


let data = [5, 10, 20];
let attempt = splitBill(data, 3, 15);

console.log(attempt[2].id);