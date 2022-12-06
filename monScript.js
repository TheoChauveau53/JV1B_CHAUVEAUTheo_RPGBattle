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
function Affich_stats(perso,stats_perso){
    perso.style.filter ="drop-shadow(0 1rem 3rem #ff0000)";
    affichage_stats.style.visibility = "visible";
    nombre_PV.innerHTML = stats_perso.PV + "PV";
    nombre_PM.innerHTML = stats_perso.PM + "PM";
    prc_PV.value = stats_perso.PV;
    prc_PV.max = stats_perso.PVmax;
    prc_PM.value = stats_perso.PM;
    prc_PM.max = stats_perso.PMmax;
}
function Masque_stats(turn,perso){
    if(tour== turn ){
        perso.style.filter ="drop-shadow(0 1rem 3rem #0044ff)";
    }
    else{
        perso.style.filter ="none"; 
    }
    affichage_stats.style.visibility = "hidden";
}
pere_noel.onmouseenter = function(){
    Affich_stats(pere_noel,stats_perenoel)
}
pere_noel.onmouseleave = function(){
    Masque_stats(1,pere_noel)
}
mere_noel.onmouseenter = function(){
    Affich_stats(mere_noel,stats_merenoel)
}
mere_noel.onmouseleave = function(){
    Masque_stats(2,mere_noel)
}
lutin.onmouseenter = function(){
    Affich_stats(lutin,stats_lutin)
}
lutin.onmouseleave = function(){
    Masque_stats(3,lutin)
}
cerf.onmouseenter = function(){
    Affich_stats(cerf,stats_cerf)
}
cerf.onmouseleave = function(){
    Masque_stats(4,cerf)
}
pingouin.onmouseenter = function(){
    Affich_stats(pingouin,stats_pingouin)
}
pingouin.onmouseleave = function(){
    Masque_stats(5,pingouin)
}
pingouine.onmouseenter = function(){
    Affich_stats(pingouine,stats_pingouine)
}
pingouine.onmouseleave = function(){
    Masque_stats(6,pingouine)
}
orque.onmouseenter = function(){
    Affich_stats(orque,stats_orque)
}
orque.onmouseleave = function(){
    Masque_stats(7,orque)
}
var victoire=false

//function Degats(stats_att,stats_cible){
//    stats_cible.PV = stats_cible.PV - stats_att.ATK
//    dialogue.innerHTML = " Vous avez infligé " + stats_att.ATK + "dégats au pingouin";
//    nombre_PV.innerHTML = stats_cible.PV + "PV";
//    prc_PV.value = stats_cible.PV;
//    tour = tour+1;
//}
//
//function Tour(){
//    if(tour==1){
//        attack.onclick= function(){
//            pingouin.onclick(){
//                Degats(stats_perenoel,stats_pingouin)
//            }
//        }   
//    }
//}



// tour par tour
//while(victoire==false)

    
//
//attack.onclick=function(){
//    pingouin.onclick=function(){           
//        PV_pingouin = PV_pingouin-ATK_perenoel;
//        dialogue.innerHTML = " Vous avez infligé " + ATK_perenoel + "dégats au pingouin";
//        nombre_PV.innerHTML = PV_pingouin + "PV";
//        prc_PV.value = PV_pingouin;
//        tour = 2;  
//    }  
//}