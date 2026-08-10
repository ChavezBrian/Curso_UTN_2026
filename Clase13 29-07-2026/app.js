let edadUsuario = 15;

let tienePaseVIP = false;

if (edadUsuario >= 18) {
    console.log("Puedes pasar al bar.");
}
else {
    console.log("Acceso denegado, ve a casa.");
}

tienePaseVIP = true;

if (edadUsuario >= 18 || tienePaseVIP) {
    console.log("Puedes pasar al bar.");
}
else {
    console.log("Acceso denegado, ve a casa.");
}