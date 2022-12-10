// Stats persos
var stats_perenoel = {
    NOM : "pere Noel",
    PVmax : 700,    //PV max
    PV : 700,       //PV actuel
    PMmax : 100,   //PM max
    PM : 100,      //PM actuel
    ATK : 600,      //Degats d'attaque
    ATKSPE : 900,   //Degats d'attaque special
    DEF : 0,        // Réduction des dégats avec défense
    LAST : "",       // Derniere action effectué
}
var stats_merenoel = {
    NOM : "mere Noel",
    PVmax : 1100,
    PV : 1100,
    PMmax : 100,
    PM : 100,
    ATK : 300,
    ATKSPE : 600,
    DEF : 0,
    LAST : "", 
}
var stats_lutin = {
    NOM : "lutin",
    PVmax : 1100,
    PV : 1100,
    PMmax : 100,
    PM : 100,
    ATK : 300,
    ATKSPE : 600,
    DEF : 0,
    LAST : "", 
}
var stats_cerf = {
    NOM : "cerf",
    PVmax : 1100,
    PV : 1100,
    PMmax : 100,
    PM : 100,
    ATK : 300,
    ATKSPE : 600,
    DEF : 0,
    LAST : "", 
}
var stats_pingouin = {
    NOM : "pingouin",
    PVmax : 1100,
    PV : 1100,
    PMmax : 100,
    PM : 100,
    ATK : 300,
    ATKSPE : 600,
    DEF : 0,
    LAST : "", 
}
var stats_pingouine = {
    NOM : "pingouine",
    PVmax : 1100,
    PV : 1100,
    PMmax : 100,
    PM : 100,
    ATK : 300,
    ATKSPE : 600,
    DEF : 0,
    LAST : "", 
}
var stats_orque = {
    NOM : "orque",
    PVmax : 1100,
    PV : 1100,
    PMmax : 100,
    PM : 100,
    ATK : 300,
    ATKSPE : 600,
    DEF : 0,
    LAST : "", 
}
//Variable tour
var tour=1
var attaque=false
var defense=false
var special=false
// Affichage des stats  quand on passe la souris sur un perso
pere_noel.style.filter ="drop-shadow(0 1rem 3rem #0044ff)"; // PAr défaut tour pere noel donc bleu

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
    stats_cible.PV = stats_cible.PV - (stats_att.ATK - stats_cible.DEF);
    dialogue.innerHTML =stats_att.NOM + " a infligé " + (stats_att.ATK - stats_cible.DEF) + " dégats à " + stats_cible.NOM + "<br/>"+dialogue.innerHTML;
    nombre_PV.innerHTML = stats_cible.PV + "PV";    //actualisation de l'affichage des PV
    prc_PV.value = stats_cible.PV;                  //actualisation de l'affichage des PV
    tour = tour+1;
    if(tour==8){
        tour=1;
    }
    attaque = false;                                //bouton attaque désactivé
    attack.style.backgroundColor="grey";            //Affichage bouton par défaut
    stats_att.LAST = "Attaque"
    Fin();                                          // vérification condition victoire
}

// Fonction infligeant les degats d'une attaque spéciale, retire le mana et gere le tour 
function Degats_speciaux(stats_att,stats_cible){
    stats_cible.PV = stats_cible.PV - (stats_att.ATKSPE - stats_cible.DEF);
    dialogue.innerHTML =stats_att.NOM + " a infligé " + (stats_att.ATKSPE - stats_cible.DEF) + " dégats à " + stats_cible.NOM + "<br/>"+dialogue.innerHTML;
    nombre_PV.innerHTML = stats_cible.PV + "PV";    //actualisation de l'affichage des PV
    prc_PV.value = stats_cible.PV;                  //actualisation de l'affichage des PV
    tour = tour+1;
    if(tour==8){
        tour=1;
    }
    special = false;                                    //bouton attaque spéciale désactivé
    spece.style.backgroundColor="grey";
    stats_att.LAST = "Special"
    Fin();
}

// Fonction permettant à un personnage de se défendre, ce qui réduit les dégats subis et gere le tour
function Defense(stats_cible){
    stats_cible.DEF = 150;
    defens.style.backgroundColor="grey";
    tour=tour+1;
    defense = false;
    stats_cible.LAST = "Defense"
    dialogue.innerHTML =stats_cible.NOM + " se protege jusqu'au prochain tour" + "<br/>" +dialogue.innerHTML;
}

//Vérification de la condition Victoire et de la condition défaite
function Fin(){
    if(stats_pingouin.PV<=0 && stats_pingouine.PV<=0 && stats_orque.PV<=0){
        dialogue.innerHTML="Vous avez gagné"
    }
    else if(stats_perenoel.PV<=0 && stats_merenoel.PV<=0 && stats_lutin.PV<=0 && stats_cerf.PV<=0){
        dialogue.innerHTML="Vous avez perdu"
    }
}

// Activation des boutons et désactivation des autres lors de la pression
attack.onclick= function(){
    if(attaque==true){
        attaque=false;
        attack.style.backgroundColor="grey";
    }
    else{
        attaque=true;
        defense=false;
        special=false;
        attack.style.backgroundColor="green";
        defens.style.backgroundColor="grey";
        spece.style.backgroundColor="grey";
    }
}
defens.onclick= function(){
    if(defense==true){
        defense=false;
        defens.style.backgroundColor="grey";
    }
    else{
        attaque=false;
        defense=true;
        special=false;
        defens.style.backgroundColor="green";
        attack.style.backgroundColor="grey";
        spece.style.backgroundColor="grey";
    }
}
spece.onclick= function(){
    if(special==true){
        special=false;
        spece.style.backgroundColor="grey";
    }
    else{
        attaque=false;
        defense=false;
        special=true;
        spece.style.backgroundColor="green";
        defens.style.backgroundColor="grey";
        attack.style.backgroundColor="grey";
    }
}

pingouin.onclick= function Pingouin(){                      // Interaction avec pingouin
    if(attaque==true){                                      // Dégats d'attaque normale 
        if(tour==1){
            if(stats_perenoel.PV>0){
                if (stats_perenoel.LAST!="Attaque"){
                    Degats(stats_perenoel,stats_pingouin);
                }
                else if (stats_perenoel.LAST=="Attaque"){
                dialogue.innerHTML=" Vous avez déjà effectué cette action le tour précédent";
                attaque=false;
                attack.style.backgroundColor="grey";
                }
            }
            else{
                tour=tour+1
                Pingouin()
            }
        }
        else if(tour==2){
            if(stats_merenoel.PV>0){
                if (stats_merenoel.LAST!="Attaque"){
                    Degats(stats_merenoel,stats_pingouin);
                }
                else if (stats_merenoel.LAST=="Attaque"){
                dialogue.innerHTML=" Vous avez déjà effectué cette action le tour précédent";
                attaque=false;
                attack.style.backgroundColor="grey";
                } 
            } 
            else{
                tour = tour+1
                Pingouin()
            }
        }   
        else if(tour==3){
            if(stats_lutin.PV>0){
                if (stats_lutin.LAST!="Attaque"){
                    Degats(stats_lutin,stats_pingouin);
                }
                else if (stats_lutin.LAST=="Attaque"){
                dialogue.innerHTML=" Vous avez déjà effectué cette action le tour précédent";
                attaque=false;
                attack.style.backgroundColor="grey";
                } 
            } 
            else{
                tour= tour+1
                Pingouin()
            }
        }
        else if(tour==4){
            if(stats_cerf.PV>0){
                if (stats_cerf.LAST!="Attaque"){
                    Degats(stats_cerf,stats_pingouin);
                    Riposte()
                }
                else if (stats_cerf.LAST=="Attaque"){
                dialogue.innerHTML=" Vous avez déjà effectué cette action le tour précédent";
                attaque=false;
                attack.style.backgroundColor="grey";
                }
            }
            else{
                tour= tour+1
                Pingouin();
                Riposte();
            }
        }
        if (stats_pingouin.PV <=0){
            pingouin.style.display = "none";
            dialogue.innerHTML = " Le pingouin est mort" +"<br/>"+dialogue.innerHTML
        }
    }
    else if(special==true){                                      // Dégats d'attaque spéciale
        if(tour==1){
            if(stats_perenoel.PV>0){
                if (stats_perenoel.LAST!="Special"){
                    Degats_speciaux(stats_perenoel,stats_pingouin);
                }
                else if (stats_perenoel.LAST=="Special"){
                dialogue.innerHTML=" Vous avez déjà effectué cette action le tour précédent";
                special=false;
                spece.style.backgroundColor="grey";
                }
            }
            else{
                tour=tour+1
                Pingouin()
            }
        }
        else if(tour==2){
            if(stats_merenoel.PV>0){
                if (stats_merenoel.LAST!="Special"){
                    Degats_speciaux(stats_merenoel,stats_pingouin);
                }
                else if (stats_merenoel.LAST=="Special"){
                dialogue.innerHTML=" Vous avez déjà effectué cette action le tour précédent";
                special=false;
                spece.style.backgroundColor="grey";
                }
            }  
            else{
                tour = tour+1
                Pingouin()
            }
        }
        else if(tour==3){
            if(stats_lutin.PV>0){
                if (stats_lutin.LAST!="Special"){
                    Degats_speciaux(stats_lutin,stats_pingouin);
                }
                else if (stats_lutin.LAST=="Special"){
                dialogue.innerHTML=" Vous avez déjà effectué cette action le tour précédent";
                special=false;
                spece.style.backgroundColor="grey";
                }
            }
            else{
                tour= tour+1
                Pingouin()
            }
        }
        else if(tour==4){
            if(stats_cerf.PV>0){
                if (stats_cerf.LAST!="Special"){
                    Degats_speciaux(stats_cerf,stats_pingouin);
                    Riposte();
                }
                else if (stats_cerf.LAST=="Special"){
                dialogue.innerHTML=" Vous avez déjà effectué cette action le tour précédent";
                special=false;
                spece.style.backgroundColor="grey";
                }
            }
            else{
                tour= tour+1
                Pingouin();
                Riposte();
            }
        }
        if (stats_pingouin.PV <=0){
            pingouin.style.display = "none";
            dialogue.innerHTML = " Le pingouin est mort" +"<br/>"+dialogue.innerHTML
        }
    }
}

pingouine.onclick= function Pingouine(){                    // Interaction avec pingouine
    if(attaque==true){                                      // Dégats d'attaque normale 
        if(tour==1){
            if(stats_perenoel.PV>0){
                if (stats_perenoel.LAST!="Attaque"){
                    Degats(stats_perenoel,stats_pingouine);
                }
                else if (stats_perenoel.LAST=="Attaque"){
                dialogue.innerHTML=" Vous avez déjà effectué cette action le tour précédent";
                attaque=false;
                attack.style.backgroundColor="grey";
                }
            }
            else{
                tour=tour+1
                Pingouine()
            }
        }
        else if(tour==2){
            if(stats_merenoel.PV>0){
                if (stats_merenoel.LAST!="Attaque"){
                    Degats(stats_merenoel,stats_pingouine);
                }
                else if (stats_merenoel.LAST=="Attaque"){
                dialogue.innerHTML=" Vous avez déjà effectué cette action le tour précédent";
                attaque=false;
                attack.style.backgroundColor="grey";
                } 
            } 
            else{
                tour = tour+1
                Pingouine()
            }
        }   
        else if(tour==3){
            if(stats_lutin.PV>0){
                if (stats_lutin.LAST!="Attaque"){
                    Degats(stats_lutin,stats_pingouine);
                }
                else if (stats_lutin.LAST=="Attaque"){
                dialogue.innerHTML=" Vous avez déjà effectué cette action le tour précédent";
                attaque=false;
                attack.style.backgroundColor="grey";
                } 
            } 
            else{
                tour= tour+1
                Pingouine()
            }
        }
        else if(tour==4){
            if(stats_cerf.PV>0){
                if (stats_cerf.LAST!="Attaque"){
                    Degats(stats_cerf,stats_pingouine);
                    Riposte();
                }
                else if (stats_cerf.LAST=="Attaque"){
                dialogue.innerHTML=" Vous avez déjà effectué cette action le tour précédent";
                attaque=false;
                attack.style.backgroundColor="grey";
                }
            }
            else{
                tour= tour+1
                Pingouine();
                Riposte();
            }
        }
        if (stats_pingouine.PV <=0){
            pingouin.style.display = "none";
            dialogue.innerHTML = " La pingouine est morte" +"<br/>"+dialogue.innerHTML
        }
    }
    else if(special==true){                                      // Dégats d'attaque spéciale
        if(tour==1){
            if(stats_perenoel.PV>0){
                if (stats_perenoel.LAST!="Special"){
                    Degats_speciaux(stats_perenoel,stats_pingouine);
                }
                else if (stats_perenoel.LAST=="Special"){
                dialogue.innerHTML=" Vous avez déjà effectué cette action le tour précédent";
                special=false;
                spece.style.backgroundColor="grey";
                }
            }
            else{
                tour=tour+1
                Pingouine()
            }
        }
        else if(tour==2){
            if(stats_merenoel.PV>0){
                if (stats_merenoel.LAST!="Special"){
                    Degats_speciaux(stats_merenoel,stats_pingouine);
                }
                else if (stats_merenoel.LAST=="Special"){
                dialogue.innerHTML=" Vous avez déjà effectué cette action le tour précédent";
                special=false;
                spece.style.backgroundColor="grey";
                }
            }  
            else{
                tour = tour+1
                Pingouine()
            }
        }
        else if(tour==3){
            if(stats_lutin.PV>0){
                if (stats_lutin.LAST!="Special"){
                    Degats_speciaux(stats_lutin,stats_pingouine);
                }
                else if (stats_lutin.LAST=="Special"){
                dialogue.innerHTML=" Vous avez déjà effectué cette action le tour précédent";
                special=false;
                spece.style.backgroundColor="grey";
                }
            }
            else{
                tour= tour+1
                Pingouine()
            }
        }
        else if(tour==4){
            if(stats_cerf.PV>0){
                if (stats_cerf.LAST!="Special"){
                    Degats_speciaux(stats_cerf,stats_pingouine);
                    Riposte();
                }
                else if (stats_cerf.LAST=="Special"){
                dialogue.innerHTML=" Vous avez déjà effectué cette action le tour précédent";
                special=false;
                spece.style.backgroundColor="grey";
                }
            }
            else{
                tour= tour+1
                Pingouine();
                Riposte();
            }
        }
        if (stats_pingouin.PV <=0){
            pingouin.style.display = "none";
            dialogue.innerHTML = " La pingouine est morte" +"<br/>"+dialogue.innerHTML
        }
    }
}

orque.onclick= function Orque(){                                // Interaction avec orque
    if(attaque==true){                                      // Dégats d'attaque normale 
        if(tour==1){
            if(stats_perenoel.PV>0){
                if (stats_perenoel.LAST!="Attaque"){
                    Degats(stats_perenoel,stats_orque);
                }
                else if (stats_perenoel.LAST=="Attaque"){
                dialogue.innerHTML=" Vous avez déjà effectué cette action le tour précédent";
                attaque=false;
                attack.style.backgroundColor="grey";
                }
            }
            else{
                tour=tour+1
                Orque()
            }
        }
        else if(tour==2){
            if(stats_merenoel.PV>0){
                if (stats_merenoel.LAST!="Attaque"){
                    Degats(stats_merenoel,stats_orque);
                }
                else if (stats_merenoel.LAST=="Attaque"){
                dialogue.innerHTML=" Vous avez déjà effectué cette action le tour précédent";
                attaque=false;
                attack.style.backgroundColor="grey";
                } 
            } 
            else{
                tour = tour+1
                Orque()
            }
        }   
        else if(tour==3){
            if(stats_lutin.PV>0){
                if (stats_lutin.LAST!="Attaque"){
                    Degats(stats_lutin,stats_orque);
                }
                else if (stats_lutin.LAST=="Attaque"){
                dialogue.innerHTML=" Vous avez déjà effectué cette action le tour précédent";
                attaque=false;
                attack.style.backgroundColor="grey";
                } 
            } 
            else{
                tour= tour+1
                Orque()
            }
        }
        else if(tour==4){
            if(stats_cerf.PV>0){
                if (stats_cerf.LAST!="Attaque"){
                    Degats(stats_cerf,stats_orque);
                    Riposte();
                }
                else if (stats_cerf.LAST=="Attaque"){
                dialogue.innerHTML=" Vous avez déjà effectué cette action le tour précédent";
                attaque=false;
                attack.style.backgroundColor="grey";
                }
            }
            else{
                tour= tour+1
                Orque();
                Riposte();
            }
        }
        if (stats_pingouin.PV <=0){
            pingouin.style.display = "none";
            dialogue.innerHTML = " Le pingouin est mort" +"<br/>"+dialogue.innerHTML
        }
    }
    else if(special==true){                                      // Dégats d'attaque spéciale
        if(tour==1){
            if(stats_perenoel.PV>0){
                if (stats_perenoel.LAST!="Special"){
                    Degats_speciaux(stats_perenoel,stats_orque);
                }
                else if (stats_perenoel.LAST=="Special"){
                dialogue.innerHTML=" Vous avez déjà effectué cette action le tour précédent";
                special=false;
                spece.style.backgroundColor="grey";
                }
            }
            else{
                tour=tour+1
                Orque()
            }
        }
        else if(tour==2){
            if(stats_merenoel.PV>0){
                if (stats_merenoel.LAST!="Special"){
                    Degats_speciaux(stats_merenoel,stats_orque);
                }
                else if (stats_merenoel.LAST=="Special"){
                dialogue.innerHTML=" Vous avez déjà effectué cette action le tour précédent";
                special=false;
                spece.style.backgroundColor="grey";
                }
            }  
            else{
                tour = tour+1
                Orque()
            }
        }
        else if(tour==3){
            if(stats_lutin.PV>0){
                if (stats_lutin.LAST!="Special"){
                    Degats_speciaux(stats_lutin,stats_orque);
                }
                else if (stats_lutin.LAST=="Special"){
                dialogue.innerHTML=" Vous avez déjà effectué cette action le tour précédent";
                special=false;
                spece.style.backgroundColor="grey";
                }
            }
            else{
                tour= tour+1
                Orque()
            }
        }
        else if(tour==4){
            if(stats_cerf.PV>0){
                if (stats_cerf.LAST!="Special"){
                    Degats_speciaux(stats_cerf,stats_orque);
                    Riposte();
                }
                else if (stats_cerf.LAST=="Special"){
                dialogue.innerHTML=" Vous avez déjà effectué cette action le tour précédent";
                special=false;
                spece.style.backgroundColor="grey";
                }
            }
            else{
                tour= tour+1
                Orque();
                Riposte();
            }
        }
        if (stats_pingouin.PV <=0){
            pingouin.style.display = "none";
            dialogue.innerHTML = " Le pingouin est mort" +"<br/>"+dialogue.innerHTML
        }
    }
}
pere_noel.onclick= function(){
    if (defense==true && tour==1){
        Defense(stats_perenoel)
    }
}
mere_noel.onclick= function(){
    if (defense==true && tour==2){
        Defense(stats_merenoel)
    }
}
lutin.onclick= function(){
    if (defense==true && tour==3){
        Defense(stats_lutin)
    }
}
cerf.onclick= function(){
    if (defense==true && tour==4){
        Defense(stats_cerf)
        Riposte()
    }
}

// Fonctions permettant la riposte des ennemis
function Tour_pingouin(){                                          // Riposte du pingouin 
    if(stats_pingouin.PV>0){
        if (random==1){
            if (stats_perenoel.PV>0){
                Degats(stats_pingouin,stats_perenoel)
            }
            else{
                random = random +1
            }
        }
        if (random==2){
            if (stats_merenoel.PV>0){
                Degats(stats_pingouin,stats_merenoel)
            }
            else{
                random = random +1
            }
        }
        if (random==3){
            if (stats_lutin.PV>0){
                Degats(stats_pingouin,stats_lutin)
            }
            else{
                random = random +1
            }
        }
        if (random==4){
            if (stats_cerf.PV>0){
                Degats(stats_pingouin,stats_cerf)
            }
            else{
                random = 1
                Tour_pingouin()    // Recommence pour voir qui est en vie s'il n'a pas encore attaqué
            }
        }
    }
    else{
        tour=tour+1         // Passer tour si pingouin mort
    }
}

function Tour_pingouine(){                                          // Riposte de la pingouine 
    if(stats_pingouine.PV>0){
        if (random==1){
            if (stats_perenoel.PV>0){
                Degats(stats_pingouine,stats_perenoel)
            }
            else{
                random = random +1
            }
        }
        if (random==2){
            if (stats_merenoel.PV>0){
                Degats(stats_pingouine,stats_merenoel)
            }
            else{
                random = random +1
            }
        }
        if (random==3){
            if (stats_lutin.PV>0){
                Degats(stats_pingouine,stats_lutin)
            }
            else{
                random = random +1
            }
        }
        if (random==4){
            if (stats_cerf.PV>0){
                Degats(stats_pingouine,stats_cerf)
            }
            else{
                random = 1
                Tour_pingouine()    // Recommence pour voir qui est en vie 
            }
        }
    }
    else{
        tour=tour+1         // Passer tour si pingouine morte 
    }
}




function Tour_orque(){                                          // Riposte de l'orque 
    if(stats_orque.PV>0){
        if (random==1){
            if (stats_perenoel.PV>0){
                Degats(stats_orque,stats_perenoel)
            }
            else{
                random = random +1
            }
        }
        if (random==2){
            if (stats_merenoel.PV>0){
                Degats(stats_orque,stats_merenoel)
            }
            else{
                random = random +1
            }
        }
        if (random==3){
            if (stats_lutin.PV>0){
                Degats(stats_orque,stats_lutin)
            }
            else{
                random = random +1
            }
        }
        if (random==4){
            if (stats_cerf.PV>0){
                Degats(stats_orque,stats_cerf)
            }
            else{
                random = 1
                Tour_orque()    // Recommence pour voir qui est en vie 
            }
        }
    }
    else{
        tour=1        // Passer tour si orque morte 
    }
}



// Assemblage de toutes les fonctions permettant la riposte 
function Riposte(){
    random = Math.floor(Math.random() * 4)+1;
    if(tour==5){
        setTimeout(() => {
            Tour_pingouin()                        //tour pingouin apres 5 secondes
        }, 5000) 
    }
    setTimeout(() => {
        random = Math.floor(Math.random() * 4)+1;
        if (tour==6){
            Tour_pingouine()                        //tour pingouine apres 5 secondes
        }
    }, 10000) 
    setTimeout(() => {
        random = Math.floor(Math.random() * 4)+1;
        if (tour==7){
            Tour_orque()                        //tour orque apres 5 secondes
        }
    }, 15000) 
}