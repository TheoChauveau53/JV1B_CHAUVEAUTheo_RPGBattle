// Stats persos
var stats_perenoel = {
    NOM : "pere Noel",
    PVmax : 700,    //PV max
    PV : 700,       //PV actuel
    PMmax : 1100,   //PM max
    PM : 1100,      //PM actuel
    ATK : 600,      //Degats d'attaque
    ATKSPE : 900,   //Degats d'attaque special 
}
var stats_merenoel = {
    NOM : "mere Noel",
    PVmax : 1100,
    PV : 1100,
    PMmax : 1100,
    PM : 1100,
    ATK : 300,
    ATKSPE : 600,
}
var stats_lutin = {
    NOM : "lutin",
    PVmax : 1100,
    PV : 1100,
    PMmax : 1100,
    PM : 1100,
    ATK : 300,
    ATKSPE : 600,
}
var stats_cerf = {
    NOM : "cerf",
    PVmax : 1100,
    PV : 1100,
    PMmax : 1100,
    PM : 1100,
    ATK : 300,
    ATKSPE : 600,
}
var stats_pingouin = {
    NOM : "pingouin",
    PVmax : 1100,
    PV : 1100,
    PMmax : 1100,
    PM : 1100,
    ATK : 300,
    ATKSPE : 600,
}
var stats_pingouine = {
    NOM : "pingouine",
    PVmax : 1100,
    PV : 1100,
    PMmax : 1100,
    PM : 1100,
    ATK : 300,
    ATKSPE : 600,
}
var stats_orque = {
    NOM : "orque",
    PVmax : 1100,
    PV : 1100,
    PMmax : 1100,
    PM : 1100,
    ATK : 300,
    ATKSPE : 600,
}
//Variable tour
var tour=1
var attaque=false
var defense=false
var special=false
// Affichage des stats  quand on passe la souris sur un perso
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
// Fonction infligeant les degats d'une attaque de base et qui gere le tour
function Degats(stats_att,stats_cible){
    stats_cible.PV = stats_cible.PV - stats_att.ATK;
    dialogue.innerHTML = stats_att.NOM + " a infligé " + stats_att.ATK + " dégats à " + stats_cible.NOM;
    nombre_PV.innerHTML = stats_cible.PV + "PV";    //actualisation de l'affichage des PV
    prc_PV.value = stats_cible.PV;                  //actualisation de l'affichage des PV
    tour = tour+1;
    if(tour==8){
        tour=1
    }
    attaque = false;                                //bouton attaque désactivé
}
// Fonction infligeant les degats d'une attaque spéciale, retire le mana et gere le tour 
function Degats_speciaux(stats_att,stats_cible){
    stats_cible.PV = stats_cible - stats_att.ATKSPE;
    stats_att.PM = stats_att.PM - 50                    // Cout en mana 
    dialogue.innerHTML = stats_att.NOM +" a infligé " + stats_att.ATKSPE + " dégats à " + stats_cible.NOM;
    nombre_PV.innerHTML = stats_cible.PV + "PV";
    prc_PV.value = stats_cible.PV;
    tour = tour+1;
    if(tour==8){
        tour=1
    }
    special = false;                                //bouton attaque spéciale désactivé
}



pere_noel.style.filter ="drop-shadow(0 1rem 3rem #0044ff)";

attack.onclick= function(){
    if(attaque==true){
        attaque=false;
    }
    else{
        attaque=true;
        defense=false;
        special=false;
    }
}
defens.onclick= function(){
        attaque=false;
        special=false;
}
spece.onclick= function(){
    if(special==true){
        special=false;
    }
    else{
        attaque=false;
        defense=false;
        special=true;
    }
}

pingouin.onclick= function Pingouin(){
    if(attaque==true){
        if(tour==1){
            if(stats_perenoel.PV>0){
                Degats(stats_perenoel,stats_pingouin);
            }
            else{
                tour=tour+1
                Pingouin()
            }
        }
        else if(tour==2){
            if(stats_merenoel.PV>0){
                Degats(stats_merenoel,stats_pingouin);
            }  
            else{
                tour = tour+1
                Pingouin()
            }
        }
        else if(tour==3){
            if(stats_lutin.PV>0){
                Degats(stats_lutin,stats_pingouin);
            }
            else{
                tour= tour+1
                Pingouin()
            }
        }
        else if(tour==4){
            if(stats_cerf.PV>0){
                Degats(stats_cerf,stats_pingouin);
            }
            else{
                tour= tour+1
                Pingouin()
            }
        }
        if (stats_pingouin.PV <=0){
            pingouin.style.display = "none";
            dialogue.innerHTML = " Le pingouin est mort"
        }
    }
}

pingouine.onclick= function Pingouine(){
    if(attaque==true){
        if(tour==1){
            if(stats_perenoel.PV>0){
                Degats(stats_perenoel,stats_pingouine);
            }
            else{
                tour=tour+1
                Pingouine()
            }
        }
        else if(tour==2){
            if(stats_merenoel.PV>0){
                Degats(stats_merenoel,stats_pingouine);
            }  
            else{
                tour = tour+1
                Pingouine()
            }
        }
        else if(tour==3){
            if(stats_lutin.PV>0){
                Degats(stats_lutin,stats_pingouine);
            }
            else{
                tour= tour+1
                Pingouine()
            }
        }
        else if(tour==4){
            if(stats_cerf.PV>0){
                Degats(stats_cerf,stats_pingouine);
            }
            else{
                tour= tour+1
                Pingouine()
            }
        }
        if (stats_pingouine.PV <=0){
            pingouine.style.display = 'none';
            dialogue.innerHTML = " La pingouine est morte";
        }
    } 
}
orque.onclick= function Orque(){
    if(attaque==true){
        if(tour==1){
            if(stats_perenoel.PV>0){
                Degats(stats_perenoel,stats_orque);
            }
            else{
                tour=tour+1
                Orque()
            }
        }
        else if(tour==2){
            if(stats_merenoel.PV>0){
                Degats(stats_merenoel,stats_orque);
            }  
            else{
                tour = tour+1
                Orque()
            }
        }
        else if(tour==3){
            if(stats_lutin.PV>0){
                Degats(stats_lutin,stats_orque);
            }
            else{
                tour= tour+1
                Orque()
            }
        }
        else if(tour==4){
            if(stats_cerf.PV>0){
                Degats(stats_cerf,stats_orque);
                Riposte()
            }
            else{
                tour= tour+1
                Orque()
                Riposte()
            }
        }
        if (stats_orque.PV <=0){
            orque.style.display = 'none';
            dialogue.innerHTML = " L'orque est morte";
        }
    }
}

function Riposte(){
    random = Math.floor(Math.random() * 4)+1;
    console.log(random)
    if(tour==5){
        if(stats_pingouin.PV>0){
            if (random==1){
                Degats(stats_pingouin,stats_perenoel)
            }
            if (random==2){
                Degats(stats_pingouin,stats_merenoel)
            }
            if (random==3){
                Degats(stats_pingouin,stats_lutin)
            }
            if (random==4){
                Degats(stats_pingouin,stats_cerf)
            }
        }
        else{
            tour=tour+1
        }
    }
    if (tour==6){
        if(stats_pingouine.PV>0){
            if (random==1){
                Degats(stats_pingouine,stats_perenoel)
            }
            if (random==2){
                Degats(stats_pingouine,stats_merenoel)
            }
            if (random==3){
                Degats(stats_pingouine,stats_lutin)
            }
            if (random==4){
                Degats(stats_pingouine,stats_cerf)
            }
        }
        else{
            tour=tour+1
        }
    }
    if (tour==7){
        if(stats_orque.PV>0){
            if (random==1){
                Degats(stats_orque,stats_perenoel)
            }
            if (random==2){
                Degats(stats_orque,stats_merenoel)
            }
            if (random==3){
                Degats(stats_orque,stats_lutin)
            }
            if (random==4){
                Degats(stats_orque,stats_cerf)
            }
        }
        else{
            tour=tour+1
        }
    }
}