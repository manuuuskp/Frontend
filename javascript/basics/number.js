Number("12") //12
Number("12a") //NaN

isNaN("12") //false
isNaN("12a") //true
isFinite("12") //true
isFinite("12a") //false
isFinite(-Infinity) //false

parseInt("12a") //12
parseInt("a12") //NaN
parseInt("12aas14") //12
parseFloat("12.34a") //12.34
parseFloat("a12.34") //NaN

// unary operator - same as Number constructor
console.log(+"12.34") //12.34
console.log(+"12a") //NaN
