var cadena = require("./cadena"); //para requerir el archivo
const str ="anita lava la tina";
var p = cadena.palindromo(str);
var pal = cadena.tot(str);
var let = cadena.letras(str);
var voc = cadena.vocales(str);
var cons = cadena.consonantes(str);

console.log("Es palindromo:"+p);
console.log("Total de palabras:"+pal);
console.log("Total de letras sin espacios :"+let);

console.log("Total de vocales:"+voc);
console.log("Total de consonantes:"+cons);