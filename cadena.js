function palindromo(str){
   //return str.split("").reverse().join("");
     if(str.toLowerCase().split(" ").join("") == str.toLowerCase().split("").reverse().join("").split(" ").join("")){
         return true;
     }
     else 
        return false;
}

function count_tot(str){
    var sep = str.split(" ");
    return sep.length;
}
function count_letras(str){
    str.split("").join("");
    return str.length;
}

function count_vocales(str){
    var cad = 'aeiouAEIOU',count=0;
    for(let i =0;i < str.length; i++){
        if(cad.indexOf(str[i]) !== -1){
            count += 1;
        }
    }
    return count;
}
function count_consonantes(str){
    var cad = 'bcdfghjklmnpqrstvwxyz',count=0;
    for(let i =0;i < str.length; i++){
        if(cad.indexOf(str[i]) !== -1){
            count += 1;
        }
    }
    return count;
}

module.exports.palindromo = palindromo;
module.exports.tot= count_tot;
module.exports.letras = count_letras;
module.exports.vocales= count_vocales;
module.exports.consonantes = count_consonantes;

