// Stats persos
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
//Variable tour
var tour=1
var attaque=false
var defense=false
var special=false
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

function Degats(stats_att,stats_cible){
    stats_cible.PV = parseInt(stats_cible.PV) - stats_att.ATK;
    dialogue.innerHTML = " Vous avez infligé " + stats_att.ATK + " dégats au pingouin";
    nombre_PV.innerHTML = stats_cible.PV + "PV";
    prc_PV.value = stats_cible.PV;
    tour = tour+1;
    attaque = false;
    console.log(2)
}
pere_noel.style.filter ="drop-shadow(0 1rem 3rem #0044ff)";

attack.onclick= function(){
    if (tour==1 || tour==2 || tour==3 || tour==4){
        attaque=true
        defense=false
        special=false
    }
    else if(attaque==true){
        attaque=false
    }
}
pingouin.onclick= function(){
    if(attaque==true){
        if(tour==1){
            Degats(stats_perenoel,stats_pingouin);
        }
        else if(tour==2){
            Degats(stats_merenoel,stats_pingouin);
        }
        else if(tour==3){
            Degats(stats_lutin,stats_pingouin);
        }
        else if(tour==4){
            Degats(stats_cerf,stats_pingouin);
        }
        if (stats_pingouin.PV <=0){
            pingouin.style.display = "none";
        }
    } 
}
pingouine.onclick= function(){
    if(attaque==true){
        if(tour==1){
            Degats(stats_perenoel,stats_pingouine);
        }
        else if(tour==2){
            Degats(stats_merenoel,stats_pingouine);
        }
        else if(tour==3){
            Degats(stats_lutin,stats_pingouine);
        }
        else if(tour==4){
            Degats(stats_cerf,stats_pingouine);
        }
        if (stats_pingouin.PV <=0){
            pingouine.style.display = 'none';
        }
    } 
}
orque.onclick= function(){
    if(attaque==true){
        if(tour==1){
            Degats(stats_perenoel,stats_orque);
        }
        else if(tour==2){
            Degats(stats_merenoel,stats_orque);
        }
        else if(tour==3){
            Degats(stats_lutin,stats_orque);
        }
        else if(tour==4){
            Degats(stats_cerf,stats_orque);
        }
        if (stats_pingouin.PV <=0){
            orque.style.display = 'none';
        }
    } 
}