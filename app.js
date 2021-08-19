function updateProductNumber( product , price, isIncreasing){
    const productInput = document.getElementById(product +'-number');
    let productNumber = productInput.value;
if (isIncreasing) {
    
    productNumber = parseInt (productNumber) + 1;
} else if (productNumber>0) {

    productNumber= parseInt (productNumber) - 1;
    
}
 productInput.value = productNumber;

  
//update case total
const productTotal = document.getElementById(product +'-total');
productTotal.innerText = productNumber *price;
//calculate Total
calculateTotal();

}


function getInputValue(product){
const productInput = document.getElementById(product+'-number');
const productAmount = parseInt(productInput.value);
return productAmount




}


function calculateTotal (){

const phoneTotal = getInputValue('phone')*1219;
const caseTotal = getInputValue('case')*59;
const subTotal = phoneTotal+caseTotal;
const tax = subTotal/10;
const totalPrice = tax+subTotal;
//update html
document.getElementById('sub-total').innerText = subTotal
document.getElementById('tax-amount').innerText = tax
document.getElementById('total').innerText = totalPrice;


    
}

 //phone increase decrease event
 document.getElementById('phone-plus').addEventListener('click', function(){

updateProductNumber('phone',1219,true);


 })
 document.getElementById('phone-minus').addEventListener('click', function(){

updateProductNumber('phone',1219, false);


 })



//casing increase decrease evnt

document.getElementById('case-plus').addEventListener('click', function(){

updateProductNumber('case',59,true)

})


document.getElementById('case-minus').addEventListener('click', function(){
  
updateProductNumber('case',59, false)

})