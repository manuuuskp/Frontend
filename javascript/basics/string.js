// strings are iterable
"manoj".charAt(1) //a
"manoj"[1] //a
"manoj".charCodeAt(1) //97 charcode of a
"manoj".codePointAt(1) //97 charcode of a
String.fromCodePoint(97) //a

"manoj".includes("a", 1) //true
"manoj".includes("a", 2) //false as "a" is not present after pos 1
"manoj".indexOf("no", 1) //2
"manoj".indexOf("no", 3) //-1
"manojprabhu".lastIndexOf("a", 1); //7
"manoj".toUpperCase() //MANOJ
"MANOJ".toLowerCase() //manoj
"manoj".concat(["prabhu", "skp"]) //manojprabhuskp
"manoj".repeat("2") //manojmanoj
"manoj".repeat(0) //""
"manoj".startsWith("ma", 0) //true
"manoj".endsWith("a", 2) //true - here the string will be considered upto 2 places i.e "ma"
"manoj".split("") //['m', 'a', 'n', 'o', 'j']
"manoj".slice(1,3) //"an"
"manoj".substring(1,3) //"an"
// the main difference between slice and substring is that slice accepts negative. when negative index is used in substring then
// it is considered as 0
"manoj".substr(1, 10) //"anoj" - takes in start index and count. will also accept negative index but this is deprecated
