var nombre_PV_PV = document.getElementById("nombre_PV");
var nombre_PM = document.getElementById("nombre_PM");
var prc_PV = document.getElementById("prc_PV");
var prc_PM = document.getElementById("prc_PM");
var pere_noel = document.getElementById("pere_noel");
var affichage_stats = document.getElementById("affichage_stats");

// Stats Pere Noel
var PVmax_perenoel = 1100;
var PV_perenoel = 1100;
var PMmax_perenoel = 1100
var PM_perenoel = 1100;
// Stats Pingouin
var PVmax_pingouin = 1100;
var PV_pingouin = 1100;
var PMmax_pingouin = 1100
var PM_pingouin = 1100;





pere_noel.onmouseenter = function(){
    affichage_stats.style.visibility = visible
    affichage_PV.innerHTML = PV_perenoel + "PV";
    affichage_PM.innerHTML = PM_perenoel + "PM";
    prc_PV.value = PV_perenoel;
    prc_PM.max = PVmax_perenoel;
    prc_PM.value = PM_perenoel;
    prc_PM.max = PMmax_perenoel;
}