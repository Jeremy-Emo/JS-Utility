//Détermine si une police doit être en blanc ou noir selon la couleur de fond à passer en hexadécimal.
//Le paramètre ne doit pas avoir le mot-dièse
function calcFontColor(color){
    //Conversion vers rgb depuis hexadécimal
    var r = parseInt(color.substr(0, 2), 16);
    var g = parseInt(color.substr(2, 2), 16);
    var b = parseInt(color.substr(4, 2), 16);
    //Calcul du contraste
    return (0.213 * r + 0.715 * g + 0.072 * b > 255 / 2) ? "#000000" : "#ffffff";
}
