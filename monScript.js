var stats_perenoel = {
    PVmax : 700,
    PV : 700,
    PMmax : 1100,
    PM : 1100,
    ATK : 600,
}
var stats_merenoel = {
    PVmax : 1100,
    PV : 1100,
    PMmax : 1100,
    PM : 1100,
    ATK : 300,
}
var stats_lutin = {
    PVmax : 1100,
    PV : 1100,
    PMmax : 1100,
    PM : 1100,
    ATK : 300,
}
var stats_cerf = {
    PVmax : 1100,
    PV : 1100,
    PMmax : 1100,
    PM : 1100,
    ATK : 300,
}
var stats_pingouin = {
    PVmax : 1100,
    PV : 1100,
    PMmax : 1100,
    PM : 1100,
    ATK : 300,
}
var stats_pingouine = {
    PVmax : 1100,
    PV : 1100,
    PMmax : 1100,
    PM : 1100,
    ATK : 300,
}
var stats_orque = {
    PVmax : 1100,
    PV : 1100,
    PMmax : 1100,
    PM : 1100,
    ATK : 300,
}

// Variables tour
var tour = 1

// Affichage des stats
function Affich_stats(perso){
    affichage_stats.style.visibility = "visible";
    nombre_PV.innerHTML = perso.PV + "PV";
    nombre_PM.innerHTML = perso.PM + "PM";
    prc_PV.value = perso.PV;
    prc_PV.max = perso.PVmax;
    prc_PM.value = perso.PM;
    prc_PM.max = perso.PMmax;
}
pere_noel.onmouseenter = function(){
    Affich_stats(stats_perenoel)
}
pere_noel.onmouseleave = function(){
    affichage_stats.style.visibility = "hidden";
}
mere_noel.onmouseenter = function(){
    Affich_stats(stats_merenoel)
}
mere_noel.onmouseleave = function(){
    affichage_stats.style.visibility = "hidden";
}
lutin.onmouseenter = function(){
    Affich_stats(stats_lutin)
}
lutin.onmouseleave = function(){
    affichage_stats.style.visibility = "hidden";
}
cerf.onmouseenter = function(){
    Affich_stats(stats_cerf)
}
cerf.onmouseleave = function(){
    affichage_stats.style.visibility = "hidden";
}
pingouin.onmouseenter = function Print_pingouin(){
    Affich_stats(stats_pingouin)
}
pingouin.onmouseleave = function(){
    affichage_stats.style.visibility = "hidden";
}
pingouine.onmouseenter = function(){
    Affich_stats(stats_pingouine)
}
pingouine.onmouseleave = function(){
    affichage_stats.style.visibility = "hidden";
}
orque.onmouseenter = function(){
    Affich_stats(stats_orque)
}
orque.onmouseleave = function(){
    affichage_stats.style.visibility = "hidden";
}
var victoire=false
// tour par tour

//    pere_noel.style.filter ="drop-shadow(0 1rem 3rem #0044ff)";
//    pere_noel.onmouseenter=function(){
//        pere_noel.style.filter= "drop-shadow(0 1rem 3rem #ff000
//        affichage_stats.style.visibility = "visible";
//        nombre_PV.innerHTML = PV_perenoel + "PV";
//        nombre_PM.innerHTML = PM_perenoel + "PM";
//        prc_PV.value = PV_perenoel;
//        prc_PV.max = PVmax_perenoel;
//        prc_PM.value = PM_perenoel;
//        prc_PM.max = PMmax_perenoel;
//    }
//    pere_noel.onmouseleave=function(){
//        pere_noel.style.filter ="drop-shadow(0 1rem 3rem #0044f
//        affichage_stats.style.visibility = "hidden";
//    }  
//    attack.onclick=function(){
//        pingouin.onclick=function(){           
//            PV_pingouin = PV_pingouin-ATK_perenoel;
//            dialogue.innerHTML = " Vous avez infligé " + ATK_perenoel + "dégats au pingouin";
//            nombre_PV.innerHTML = PV_pingouin + "PV";
//            prc_PV.value = PV_pingouin;
//            tour = 2;  
//        }  
//    }