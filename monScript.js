// Stats Pere Noel
var PVmax_perenoel = 1100;
var PV_perenoel = 1100;
var PMmax_perenoel = 1100
var PM_perenoel = 1100;
// Stats Mere Noel
var PVmax_merenoel = 1100;
var PV_merenoel = 1100;
var PMmax_merenoel = 1100
var PM_merenoel = 1100;
// Stats Lutin
var PVmax_lutin = 1100;
var PV_lutin = 1100;
var PMmax_lutin = 1100
var PM_lutin = 1100;
// Stats Cerf
var PVmax_cerf = 1100;
var PV_cerf = 1100;
var PMmax_cerf = 1100
var PM_cerf = 1100;

// Stats Pingouin
var PVmax_pingouin = 1100;
var PV_pingouin = 1100;
var PMmax_pingouin = 1100
var PM_pingouin = 1100;
// Stats Pingouine
var PVmax_pingouine = 1100;
var PV_pingouine = 1100;
var PMmax_pingouine = 1100
var PM_pingouine = 1100;
// Stats Orque
var PVmax_orque = 1100;
var PV_orque = 1100;
var PMmax_orque = 1100
var PM_orque = 1100;

// Affichage des stats
pere_noel.onmouseenter = function(){
    affichage_stats.style.visibility = "visible"
    nombre_PV.innerHTML = PV_perenoel + "PV";
    nombre_PM.innerHTML = PM_perenoel + "PM";
    prc_PV.value = PV_perenoel;
    prc_PM.max = PVmax_perenoel;
    prc_PM.value = PM_perenoel;
    prc_PM.max = PMmax_perenoel;
    pere_noel.style.filter = drop-shadow(green);
    //test.innerHTML = "60";
}
pere_noel.onmouseleave = function(){
    affichage_stats.style.visibility = "hidden"
}
mere_noel.onmouseenter = function(){
    affichage_stats.style.visibility = "visible"
    nombre_PV.innerHTML = PV_merenoel + "PV";
    nombre_PM.innerHTML = PM_merenoel + "PM";
    prc_PV.value = PV_merenoel;
    prc_PM.max = PVmax_merenoel;
    prc_PM.value = PM_merenoel;
    prc_PM.max = PMmax_merenoel;
}
mere_noel.onmouseleave = function(){
    affichage_stats.style.visibility = "hidden"
}
lutin.onmouseenter = function(){
    affichage_stats.style.visibility = "visible"
    nombre_PV.innerHTML = PV_lutin + "PV";
    nombre_PM.innerHTML = PM_lutin + "PM";
    prc_PV.value = PV_lutin;
    prc_PM.max = PVmax_lutin;
    prc_PM.value = PM_lutin;
    prc_PM.max = PMmax_lutin;
}
lutin.onmouseleave = function(){
    affichage_stats.style.visibility = "hidden"
}
cerf.onmouseenter = function(){
    affichage_stats.style.visibility = "visible"
    nombre_PV.innerHTML = PV_cerf + "PV";
    nombre_PM.innerHTML = PM_cerf + "PM";
    prc_PV.value = PV_cerf;
    prc_PM.max = PVmax_cerf;
    prc_PM.value = PM_cerf;
    prc_PM.max = PMmax_cerf;
}
cerf.onmouseleave = function(){
    affichage_stats.style.visibility = "hidden"
}
pingouin.onmouseenter = function(){
    affichage_stats.style.visibility = "visible"
    nombre_PV.innerHTML = PV_pingouin + "PV";
    nombre_PM.innerHTML = PM_pingouin + "PM";
    prc_PV.value = PV_pingouin;
    prc_PM.max = PVmax_pingouin;
    prc_PM.value = PM_pingouin;
    prc_PM.max = PMmax_pingouin;
}
pingouin.onmouseleave = function(){
    affichage_stats.style.visibility = "hidden"
}
pingouine.onmouseenter = function(){
    affichage_stats.style.visibility = "visible"
    nombre_PV.innerHTML = PV_pingouine + "PV";
    nombre_PM.innerHTML = PM_pingouine + "PM";
    prc_PV.value = PV_pingouine;
    prc_PM.max = PVmax_pingouine;
    prc_PM.value = PM_pingouine;
    prc_PM.max = PMmax_pingouine;
}
pingouine.onmouseleave = function(){
    affichage_stats.style.visibility = "hidden"
}
orque.onmouseenter = function(){
    affichage_stats.style.visibility = "visible"
    nombre_PV.innerHTML = PV_orque + "PV";
    nombre_PM.innerHTML = PM_orque + "PM";
    prc_PV.value = PV_orque;
    prc_PM.max = PVmax_orque;
    prc_PM.value = PM_orque;
    prc_PM.max = PMmax_orque;
}
orque.onmouseleave = function(){
    affichage_stats.style.visibility = "hidden"
}
// Tour par tour
pere_noel.style.filter = drop-shadow(green)
