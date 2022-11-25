var affichage_PV = document.getElementById("nombre_PV");
var affichage_PM = document.getElementById("affichage_PM");
var prc_PV = document.getElementById("prc_PV");
var prc_PM = document.getElementById("prc_PM");
var pere_noel = document.getElementById("pere_noel");
var PV_perenoel = 1100;
var PM_perenoel = 1100;

pere_noel.onmouseover = function() {
    affichage_PV.innerHTML = PV_perenoel + "PV"
    affichage_PM.innerHTML = PM_perenoel + "PM"
    prc_PV.value = 100
}




// prc_PV.style.display = "none"