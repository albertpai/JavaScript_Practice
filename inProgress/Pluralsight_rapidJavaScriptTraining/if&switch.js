var total = 99.99;
var freeShipping;
if (total >= 100.00)
    freeShipping = true;
else
    freeShipping = false;

console.log(freeShipping)


// Use curly braces when execution is multi-line.
// Leave off semi-colons when using if statement.
var total = 99.99;
var freeShipping;
if (total >= 100.00) {
    freeShipping = true;
    savings = 29.99
}
else {
    freeShipping = false;
    savings = 0
}

console.log(savings)

//
var orderType = 'business'
var shipMethod;

if (orderType == 'business')
    shipMethod = 'FedEx';
else if (orderType == 'personal')
    shipMethod = 'UPS Ground'