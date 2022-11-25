var affichage_PV = document.getElementById("nombre_PV");
var affichage_PM = document.getElementById("affichage_PM");
var pere_noel = document.getElementById("pere_noel");
var PRC_perenoel = document.getElementById("prc_PV");
var PV_perenoel = 1100

pere_noel.onmouseover = function() {
    affichage_PV.innerHTML =  "PV"
    PRC_perenoel.value = 100
    affichage_PM.innerHTML = "PM"
}