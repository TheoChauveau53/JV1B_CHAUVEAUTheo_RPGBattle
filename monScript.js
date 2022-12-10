// Stats persos
var stats_perenoel = {
    NOM : "pere Noel",
    PVmax : 150,    //PV max
    PV : 150,       //PV actuel
    PMmax : 100,   //PM max
    PM : 100,      //PM actuel
    ATK : 15,      //Degats d'attaque
    ATKSPE : 5,   //Degats d'attaque special
    DEF : 0,        // Réduction des dégats avec défense
    LAST : "",       // Derniere action effectué
}
var stats_merenoel = {
    NOM : "mere Noel",
    PVmax : 100,
    PV : 100,
    PMmax : 100,
    PM : 100,
    ATK : 20,
    ATKSPE : 30,
    DEF : 0,
    LAST : "", 
}
var stats_lutin = {
    NOM : "lutin",
    PVmax : 50,
    PV : 50,
    PMmax : 100,
    PM : 100,
    ATK : 50,
    ATKSPE : 60,
    DEF : 0,
    LAST : "", 
}
var stats_cerf = {
    NOM : "cerf",
    PVmax : 100,
    PV : 100,
    PMmax : 100,
    PM : 100,
    ATK : 20,
    ATKSPE : 30,
    DEF : 0,
    LAST : "", 
}
var stats_pingouin = {
    NOM : "pingouin",
    PVmax : 100,
    PV : 100,
    PMmax : 100,
    PM : 100,
    ATK : 20,
    ATKSPE : 30,
    DEF : 0,
    LAST : "", 
    Poison : false,
    Tourpoison : 0,
}
var stats_pingouine = {
    NOM : "pingouine",
    PVmax : 100,
    PV : 100,
    PMmax : 100,
    PM : 100,
    ATK : 20,
    ATKSPE : 30,
    DEF : 0,
    LAST : "", 
    Poison : false,
    Tourpoison : 0,
}
var stats_orque = {
    NOM : "orque",
    PVmax : 100,
    PV : 100,
    PMmax : 100,
    PM : 100,
    ATK : 20,
    ATKSPE : 30,
    DEF : 0,
    LAST : "", 
    Poison : false,
    Tourpoison : 0,
}
//Variable tour
var tour=1
var attaque=false
var defense=false
var special=false
// Affichage des stats  quand on passe la souris sur un perso
pere_noel.style.filter ="drop-shadow(0 1rem 3rem #0044ff)"; // PAr défaut tour pere noel donc bleu
function Disable(){                                 // Affichage en noir des boutons quand deja utilisé l'action
    if(tour==1 && stats_perenoel.PV>0){
        if(stats_perenoel.LAST=="Attaque"){
            attack.style.backgroundColor = "black"
        }
        if(stats_perenoel.LAST=="Defense"){
            defens.style.backgroundColor = "black"
        }
        if(stats_perenoel.LAST=="Special"){
            spece.style.backgroundColor = "black"
        }
    }
    if(tour==2 && stats_merenoel.PV>0){
        if(stats_merenoel.LAST=="Attaque"){
            attack.style.backgroundColor = "black"
        }
        if(stats_merenoel.LAST=="Defense"){
            defens.style.backgroundColor = "black"
        }
        if(stats_merenoel.LAST=="Special"){
            spece.style.backgroundColor = "black"
        }
    }
    if(tour==3 && stats_lutin.PV>0){
        if(stats_lutin.LAST=="Attaque"){
            attack.style.backgroundColor = "black"
        }
        if(stats_lutin.LAST=="Defense"){
            defens.style.backgroundColor = "black"
        }
        if(stats_lutin.LAST=="Special"){
            spece.style.backgroundColor = "black"
        }
    }
    if(tour==4 && stats_cerf.PV>0){
        if(stats_cerf.LAST=="Attaque"){
            attack.style.backgroundColor = "black"
        }
        if(stats_cerf.LAST=="Defense"){
            defens.style.backgroundColor = "black"
        }
        if(stats_cerf.LAST=="Special"){
            spece.style.backgroundColor ="black"
        }
    }
}
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
    spece.style.backgroundColor="grey";
    defens.style.backgroundColor="grey";
    stats_att.LAST = "Attaque"
    stats_att.DEF = 0
    Fin();                                          // vérification condition victoire
}

// Fonction infligeant les degats d'une attaque spéciale, retire le mana et gere le tour 
function Degats_speciaux(stats_att,stats_cible){
    stats_cible.PV = stats_cible.PV - (stats_att.ATKSPE - stats_cible.DEF);
    stats_att.PM = stats_att.PM - 50;
    dialogue.innerHTML =stats_att.NOM + " a infligé " + (stats_att.ATKSPE - stats_cible.DEF) + " dégats à " + stats_cible.NOM + "<br/>"+dialogue.innerHTML;
    nombre_PV.innerHTML = stats_cible.PV + "PV";    //actualisation de l'affichage des PV
    prc_PV.value = stats_cible.PV;                  //actualisation de l'affichage des PV            
    tour = tour+1;
    if(tour==8){
        tour=1;
    }
    special = false;                                    //bouton attaque spéciale désactivé
    spece.style.backgroundColor="grey";
    defens.style.backgroundColor="grey";
    attack.style.backgroundColor="grey"; 
    stats_att.LAST = "Special"
    stats_att.DEF = 0
    Fin();
}

// Fonction permettant à un personnage de se défendre, ce qui réduit les dégats subis et gere le tour
function Defense(stats_cible){
    stats_cible.DEF = 150;
    defens.style.backgroundColor="grey";
    spece.style.backgroundColor="grey";
    attack.style.backgroundColor="grey"; 
    tour=tour+1;
    defense = false;
    stats_cible.LAST = "Defense"
    dialogue.innerHTML =stats_cible.NOM + " se protege jusqu'au prochain tour" + "<br/>" +dialogue.innerHTML;
    Fin()
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
    if(tour==1 && stats_perenoel.LAST!="Attaque" || tour==2 &&stats_merenoel.LAST!="Attaque" || tour==3 && stats_lutin.LAST!="Attaque" ||tour==4 && stats_cerf.LAST!="Attaque"){
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
            Disable();
        }
    }
}
defens.onclick= function(){
    if(tour==1 && stats_perenoel.LAST!="Defense" || tour==2 &&stats_merenoel.LAST!="Defense" || tour==3 && stats_lutin.LAST!="Defense" ||tour==4 && stats_cerf.LAST!="Defense"){
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
            Disable();
        }
    }
}
spece.onclick= function(){
    if(tour==1 && stats_perenoel.LAST!="Special" || tour==2 &&stats_merenoel.LAST!="Special" || tour==3 && stats_lutin.LAST!="Special" ||tour==4 && stats_cerf.LAST!="Special"){
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
            Disable();
        }
    }
}   

pingouin.onclick= function Pingouin(){                      // Interaction avec pingouin
    if(attaque==true){                                      // Dégats d'attaque normale 
        if(tour==1){
            if(stats_perenoel.PV>0){
                if (stats_perenoel.LAST!="Attaque"){
                    Degats(stats_perenoel,stats_pingouin);
                    Disable();
                    pere_noel.style.filter ="none";             // Pas le tour de pere noel
                    mere_noel.style.filter ="drop-shadow(0 1rem 3rem #0044ff)"; // mere noel en bleu
                }
                else if (stats_perenoel.LAST=="Attaque"){
                dialogue.innerHTML=" Vous avez déjà effectué cette action le tour précédent";
                attaque=false;
                }
            }
            else{
                tour=tour+1
                Pingouin();
                Disable();
                mere_noel.style.filter ="drop-shadow(0 1rem 3rem #0044ff)";
            }
            if (stats_pingouin.PV <=0){
            pingouin.style.display = "none";
            dialogue.innerHTML = " Le pingouin est mort" +"<br/>"+dialogue.innerHTML
        }
        }
        else if(tour==2){
            if(stats_merenoel.PV>0){
                if (stats_merenoel.LAST!="Attaque"){
                    Degats(stats_merenoel,stats_pingouin);
                    Disable();
                    mere_noel.style.filter ="none";
                    lutin.style.filter ="drop-shadow(0 1rem 3rem #0044ff)";     
                }
                else if (stats_merenoel.LAST=="Attaque"){
                dialogue.innerHTML=" Vous avez déjà effectué cette action le tour précédent";
                attaque=false;
                } 
            } 
            else{
                tour = tour+1
                Pingouin()
                Disable();
                lutin.style.filter ="drop-shadow(0 1rem 3rem #0044ff)";
            }
        }   
        else if(tour==3){
            if(stats_lutin.PV>0){
                if (stats_lutin.LAST!="Attaque"){
                    Degats(stats_lutin,stats_pingouin);
                    Disable();
                    lutin.style.filter ="none";
                    cerf.style.filter ="drop-shadow(0 1rem 3rem #0044ff)";
                }
                else if (stats_lutin.LAST=="Attaque"){
                dialogue.innerHTML=" Vous avez déjà effectué cette action le tour précédent";
                attaque=false;
                } 
            } 
            else{
                tour= tour+1;
                Pingouin();
                Disable();
                cerf.style.filter ="drop-shadow(0 1rem 3rem #0044ff)";
            }
        }
        else if(tour==4){
            if(stats_cerf.PV>0){
                if (stats_cerf.LAST!="Attaque"){
                    Degats(stats_cerf,stats_pingouin);
                    Riposte();
                    Disable();
                    cerf.style.filter ="none";
                    pingouin.style.filter ="drop-shadow(0 1rem 3rem #0044ff)";
                }
                else if (stats_cerf.LAST=="Attaque"){
                dialogue.innerHTML=" Vous avez déjà effectué cette action le tour précédent";
                attaque=false;
                }
            }
            else{
                tour= tour+1;
                Pingouin();
                Riposte();
                Disable();
                pingouin.style.filter ="drop-shadow(0 1rem 3rem #0044ff)";
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
                    stats_pingouin.Poison=true
                    stats_pingouin.Tourpoison=5
                    Disable();
                    pere_noel.style.filter ="none";
                    mere_noel.style.filter ="drop-shadow(0 1rem 3rem #0044ff)";
                    dialogue.innerHTML = "Pere noel a empoisonné le pingouin pendant 5 tours"+"<br/>"+dialogue.innerHTML;
                    special=false;
                    spece.style.backgroundColor="grey";
                    defens.style.backgroundColor="grey";
                    attack.style.backgroundColor="grey"; 
                    stats_perenoel.LAST = "Special"
                    stats_perenoel.DEF = 0;
                    stats_perenoel.PM -= 50
                    tour+=1
                    Fin();
                }
                else if (stats_perenoel.LAST=="Special"){
                dialogue.innerHTML=" Vous avez déjà effectué cette action le tour précédent";
                special=false;
                }
            }
            else{
                tour=tour+1
                Pingouin()
                Disable();
                mere_noel.style.filter ="drop-shadow(0 1rem 3rem #0044ff)";
            }
        }
        else if(tour==2){
            if(stats_merenoel.PV>0){
                if (stats_merenoel.LAST!="Special"){
                    Degats_speciaux(stats_merenoel,stats_pingouin);
                    Disable();
                    mere_noel.style.filter ="none";
                    lutin.style.filter ="drop-shadow(0 1rem 3rem #0044ff)";
                }
                else if (stats_merenoel.LAST=="Special"){
                dialogue.innerHTML=" Vous avez déjà effectué cette action le tour précédent";
                special=false;
                }
            }  
            else{
                tour = tour+1
                Pingouin()
                Disable();
                lutin.style.filter ="drop-shadow(0 1rem 3rem #0044ff)";
            }
        }
        else if(tour==3){
            if(stats_lutin.PV>0){
                if (stats_lutin.LAST!="Special"){
                    Degats_speciaux(stats_lutin,stats_pingouin);
                    Disable();
                    lutin.style.filter ="none";
                    cerf.style.filter ="drop-shadow(0 1rem 3rem #0044ff)";
                }
                else if (stats_lutin.LAST=="Special"){
                dialogue.innerHTML=" Vous avez déjà effectué cette action le tour précédent";
                special=false;
                }
            }
            else{
                tour= tour+1;
                Pingouin();
                Disable();
                cerf.style.filter ="drop-shadow(0 1rem 3rem #0044ff)";
            }
        }
        else if(tour==4){
            if(stats_cerf.PV>0){
                if (stats_cerf.LAST!="Special"){
                    Degats_speciaux(stats_cerf,stats_pingouin);
                    Riposte();
                    Disable();
                    cerf.style.filter ="none";
                    pingouin.style.filter ="drop-shadow(0 1rem 3rem #0044ff)";
                }
                else if (stats_cerf.LAST=="Special"){
                dialogue.innerHTML=" Vous avez déjà effectué cette action le tour précédent";
                special=false;
                }
            }
            else{
                tour= tour+1
                Pingouin();
                Riposte();
                Disable();
                pingouin.style.filter ="drop-shadow(0 1rem 3rem #0044ff)";
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
                    Disable();
                    pere_noel.style.filter ="none";
                    mere_noel.style.filter ="drop-shadow(0 1rem 3rem #0044ff)";
                }
                else if (stats_perenoel.LAST=="Attaque"){
                dialogue.innerHTML=" Vous avez déjà effectué cette action le tour précédent";
                attaque=false;
                }
            }
            else{
                tour=tour+1
                Pingouine()
                Disable();
                mere_noel.style.filter ="drop-shadow(0 1rem 3rem #0044ff)";
            }
        }
        else if(tour==2){
            if(stats_merenoel.PV>0){
                if (stats_merenoel.LAST!="Attaque"){
                    Degats(stats_merenoel,stats_pingouine);
                    Disable();
                    mere_noel.style.filter ="none";
                    lutin.style.filter ="drop-shadow(0 1rem 3rem #0044ff)";
                }
                else if (stats_merenoel.LAST=="Attaque"){
                dialogue.innerHTML=" Vous avez déjà effectué cette action le tour précédent";
                attaque=false;
                } 
            } 
            else{
                tour = tour+1
                Pingouine()
                Disable();
                lutin.style.filter ="drop-shadow(0 1rem 3rem #0044ff)";
            }
        }   
        else if(tour==3){
            if(stats_lutin.PV>0){
                if (stats_lutin.LAST!="Attaque"){
                    Degats(stats_lutin,stats_pingouine);
                    Disable();
                    lutin.style.filter ="none";
                    cerf.style.filter ="drop-shadow(0 1rem 3rem #0044ff)";
                }
                else if (stats_lutin.LAST=="Attaque"){
                dialogue.innerHTML=" Vous avez déjà effectué cette action le tour précédent";
                attaque=false;
                } 
            } 
            else{
                tour= tour+1
                Pingouine();
                Disable();
                cerf.style.filter ="drop-shadow(0 1rem 3rem #0044ff)";
            }
        }
        else if(tour==4){
            if(stats_cerf.PV>0){
                if (stats_cerf.LAST!="Attaque"){
                    Degats(stats_cerf,stats_pingouine);
                    Riposte();
                    Disable();
                    cerf.style.filter ="none";
                    pingouin.style.filter ="drop-shadow(0 1rem 3rem #0044ff)";
                }
                else if (stats_cerf.LAST=="Attaque"){
                dialogue.innerHTML=" Vous avez déjà effectué cette action le tour précédent";
                attaque=false;
                }
            }
            else{
                tour= tour+1
                Pingouine();
                Riposte();
                Disable();
                pingouin.style.filter ="drop-shadow(0 1rem 3rem #0044ff)";
            }
        }
        if (stats_pingouine.PV <=0){
            pingouine.style.display = "none";
            dialogue.innerHTML = " La pingouine est morte" +"<br/>"+dialogue.innerHTML
        }
    }
    else if(special==true){                                      // Dégats d'attaque spéciale
        if(tour==1){
            if(stats_perenoel.PV>0){
                if (stats_perenoel.LAST!="Special"){
                    stats_pingouine.Poison=true
                    stats_pingouine.Tourpoison=5
                    Disable();
                    pere_noel.style.filter ="none";
                    mere_noel.style.filter ="drop-shadow(0 1rem 3rem #0044ff)";
                    dialogue.innerHTML = "Pere noel a empoisonné la pingouine pendant 5 tours"+"<br/>"+dialogue.innerHTML;
                    special=false;
                    spece.style.backgroundColor="grey";
                    defens.style.backgroundColor="grey";
                    attack.style.backgroundColor="grey"; 
                    stats_perenoel.LAST = "Special"
                    stats_perenoel.DEF = 0;
                    stats_perenoel.PM -= 50
                    tour+=1
                    Fin();
                }
                else if (stats_perenoel.LAST=="Special"){
                dialogue.innerHTML=" Vous avez déjà effectué cette action le tour précédent";
                special=false;
                }
            }
            else{
                tour=tour+1
                Pingouine()
                Disable();
                mere_noel.style.filter ="drop-shadow(0 1rem 3rem #0044ff)";
            }
        }
        else if(tour==2){
            if(stats_merenoel.PV>0){
                if (stats_merenoel.LAST!="Special"){
                    Degats_speciaux(stats_merenoel,stats_pingouine);
                    Disable();
                    mere_noel.style.filter ="none";
                    lutin.style.filter ="drop-shadow(0 1rem 3rem #0044ff)";
                }
                else if (stats_merenoel.LAST=="Special"){
                dialogue.innerHTML=" Vous avez déjà effectué cette action le tour précédent";
                special=false;
                }
            }  
            else{
                tour = tour+1
                Pingouine();
                Disable();
                lutin.style.filter ="drop-shadow(0 1rem 3rem #0044ff)";
            }
        }
        else if(tour==3){
            if(stats_lutin.PV>0){
                if (stats_lutin.LAST!="Special"){
                    Degats_speciaux(stats_lutin,stats_pingouine);
                    Disable();
                    lutin.style.filter ="none";
                    cerf.style.filter ="drop-shadow(0 1rem 3rem #0044ff)";
                }
                else if (stats_lutin.LAST=="Special"){
                dialogue.innerHTML=" Vous avez déjà effectué cette action le tour précédent";
                special=false;
                }
            }
            else{
                tour= tour+1
                Pingouine();
                Disable();
                cerf.style.filter ="drop-shadow(0 1rem 3rem #0044ff)";
            }
        }
        else if(tour==4){
            if(stats_cerf.PV>0){
                if (stats_cerf.LAST!="Special"){
                    Degats_speciaux(stats_cerf,stats_pingouine);
                    Riposte();
                    Disable();
                    cerf.style.filter ="none";
                    pingouin.style.filter ="drop-shadow(0 1rem 3rem #0044ff)";
                }
                else if (stats_cerf.LAST=="Special"){
                dialogue.innerHTML=" Vous avez déjà effectué cette action le tour précédent";
                special=false;
                }
            }
            else{
                tour= tour+1
                Pingouine();
                Riposte();
                Disable();
                pingouin.style.filter ="drop-shadow(0 1rem 3rem #0044ff)";
            }
        }
        if (stats_pingouine.PV <=0){
            pingouine.style.display = "none";
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
                    Disable();
                    pere_noel.style.filter ="none";
                    mere_noel.style.filter ="drop-shadow(0 1rem 3rem #0044ff)";
                }
                else if (stats_perenoel.LAST=="Attaque"){
                dialogue.innerHTML=" Vous avez déjà effectué cette action le tour précédent";
                attaque=false;
                }
            }
            else{
                tour=tour+1
                Orque()
                Disable();
                mere_noel.style.filter ="drop-shadow(0 1rem 3rem #0044ff)";
            }
        }
        else if(tour==2){
            if(stats_merenoel.PV>0){
                if (stats_merenoel.LAST!="Attaque"){
                    Degats(stats_merenoel,stats_orque);
                    Disable();
                    mere_noel.style.filter ="none";
                    lutin.style.filter ="drop-shadow(0 1rem 3rem #0044ff)";
                }
                else if (stats_merenoel.LAST=="Attaque"){
                dialogue.innerHTML=" Vous avez déjà effectué cette action le tour précédent";
                attaque=false;
                } 
            } 
            else{
                tour = tour+1
                Orque()
                Disable();
                lutin.style.filter ="drop-shadow(0 1rem 3rem #0044ff)";
            }
        }   
        else if(tour==3){
            if(stats_lutin.PV>0){
                if (stats_lutin.LAST!="Attaque"){
                    Degats(stats_lutin,stats_orque);
                    Disable();
                    lutin.style.filter ="none";
                    cerf.style.filter ="drop-shadow(0 1rem 3rem #0044ff)";
                }
                else if (stats_lutin.LAST=="Attaque"){
                dialogue.innerHTML=" Vous avez déjà effectué cette action le tour précédent";
                attaque=false;
                } 
            } 
            else{
                tour= tour+1
                Orque()
                Disable();
                cerf.style.filter ="drop-shadow(0 1rem 3rem #0044ff)";
            }
        }
        else if(tour==4){
            if(stats_cerf.PV>0){
                if (stats_cerf.LAST!="Attaque"){
                    Degats(stats_cerf,stats_orque);
                    Riposte();
                    Disable();
                    cerf.style.filter ="none";
                    pingouin.style.filter ="drop-shadow(0 1rem 3rem #0044ff)";
                }
                else if (stats_cerf.LAST=="Attaque"){
                dialogue.innerHTML=" Vous avez déjà effectué cette action le tour précédent";
                attaque=false;
                }
            }
            else{
                tour= tour+1
                Orque();
                Riposte();
                Disable();
                pingouin.style.filter ="drop-shadow(0 1rem 3rem #0044ff)";
            }
        }
        if (stats_orque.PV <=0){
            orque.style.display = "none";
            dialogue.innerHTML = " L'orque est mort" +"<br/>"+dialogue.innerHTML
        }
    }
    else if(special==true){                                      // Dégats d'attaque spéciale
        if(tour==1){
            if(stats_perenoel.PV>0){
                if (stats_perenoel.LAST!="Special"){
                    stats_orque.Poison=true
                    stats_orque.Tourpoison=5
                    Disable();
                    pere_noel.style.filter ="none";
                    mere_noel.style.filter ="drop-shadow(0 1rem 3rem #0044ff)";
                    dialogue.innerHTML = "Pere noel a empoisonné l'orque pendant 5 tours"+"<br/>"+dialogue.innerHTML;
                    special=false;
                    spece.style.backgroundColor="grey";
                    defens.style.backgroundColor="grey";
                    attack.style.backgroundColor="grey"; 
                    stats_perenoel.LAST = "Special"
                    stats_perenoel.DEF = 0;
                    stats_perenoel.PM -= 50
                    tour+=1
                    Fin();
                }
                else if (stats_perenoel.LAST=="Special"){
                dialogue.innerHTML=" Vous avez déjà effectué cette action le tour précédent";
                special=false;
                }
            }
            else{
                tour=tour+1
                Orque()
                Disable();
                mere_noel.style.filter ="drop-shadow(0 1rem 3rem #0044ff)";
            }
        }
        else if(tour==2){
            if(stats_merenoel.PV>0){
                if (stats_merenoel.LAST!="Special"){
                    Degats_speciaux(stats_merenoel,stats_orque);
                    Disable();
                    mere_noel.style.filter ="none";
                    lutin.style.filter ="drop-shadow(0 1rem 3rem #0044ff)";
                }
                else if (stats_merenoel.LAST=="Special"){
                dialogue.innerHTML=" Vous avez déjà effectué cette action le tour précédent";
                special=false;
                }
            }  
            else{
                tour = tour+1
                Orque()
                Disable();
                lutin.style.filter ="drop-shadow(0 1rem 3rem #0044ff)";
            }
        }
        else if(tour==3){
            if(stats_lutin.PV>0){
                if (stats_lutin.LAST!="Special"){
                    Degats_speciaux(stats_lutin,stats_orque);
                    Disable();
                    lutin.style.filter ="none";
                    cerf.style.filter ="drop-shadow(0 1rem 3rem #0044ff)";
                }
                else if (stats_lutin.LAST=="Special"){
                dialogue.innerHTML=" Vous avez déjà effectué cette action le tour précédent";
                special=false;
                }
            }
            else{
                tour= tour+1
                Orque()
                Disable();
                cerf.style.filter ="drop-shadow(0 1rem 3rem #0044ff)";
            }
        }
        else if(tour==4){
            if(stats_cerf.PV>0){
                if (stats_cerf.LAST!="Special"){
                    Degats_speciaux(stats_cerf,stats_orque);
                    Riposte();
                    Disable();
                    cerf.style.filter ="none";
                    pingouin.style.filter ="drop-shadow(0 1rem 3rem #0044ff)";
                }
                else if (stats_cerf.LAST=="Special"){
                dialogue.innerHTML=" Vous avez déjà effectué cette action le tour précédent";
                special=false;
                }
            }
            else{
                tour= tour+1
                Orque();
                Riposte();
                Disable();
                pingouin.style.filter ="drop-shadow(0 1rem 3rem #0044ff)";
            }
        }
        if (stats_orque.PV <=0){
            orque.style.display = "none";
            dialogue.innerHTML = " L'orque est morte" +"<br/>"+dialogue.innerHTML
        }
    }
}
pere_noel.onclick= function(){
    if (defense==true && tour==1){
        Defense(stats_perenoel);
        Disable();
        pere_noel.style.filter ="none";
        mere_noel.style.filter ="drop-shadow(0 1rem 3rem #0044ff)";
    }
}
mere_noel.onclick= function(){
    if (defense==true && tour==2){
        Defense(stats_merenoel)
        Disable();
        mere_noel.style.filter ="none";
        lutin.style.filter ="drop-shadow(0 1rem 3rem #0044ff)";
    }
}
lutin.onclick= function(){
    if (defense==true && tour==3){
        Defense(stats_lutin)
        Disable();
        lutin.style.filter ="none";
        cerf.style.filter ="drop-shadow(0 1rem 3rem #0044ff)";
    }
}
cerf.onclick= function(){
    if (defense==true && tour==4){
        Defense(stats_cerf)
        Riposte()
        Disable();
        cerf.style.filter ="none";
        pingouin.style.filter ="drop-shadow(0 1rem 3rem #0044ff)";
    }
}

// Fonctions permettant la riposte des ennemis
function Tour_pingouin(){                                          // Riposte du pingouin 
    if(stats_pingouin.PV>0){
        if (random==1){
            if (stats_perenoel.PV>0){
                Degats(stats_pingouin,stats_perenoel)
                if(stats_perenoel.PV<=0){
                    pere_noel.style.display ="none";
                    dialogue.innerHTML = stats_perenoel.NOM + " est mort" + "<br/>"+dialogue.innerHTML;
                }
            }
            else{
                random = random +1
            }
        }
        if (random==2){
            if (stats_merenoel.PV>0){
                Degats(stats_pingouin,stats_merenoel)
                if(stats_merenoel.PV<=0){
                    mere_noel.style.display ="none";
                    dialogue.innerHTML = stats_merenoel.NOM + " est morte" + "<br/>"+dialogue.innerHTML;
                }
            }
            else{
                random = random +1
            }
        }
        if (random==3){
            if (stats_lutin.PV>0){
                Degats(stats_pingouin,stats_lutin)               
                if(stats_lutin.PV<=0){
                    lutin.style.display ="none";
                    dialogue.innerHTML = stats_lutin.NOM + " est mort" + "<br/>"+dialogue.innerHTML;
                }
            }
            else{
                random = random +1
            }
        }
        if (random==4){
            if (stats_cerf.PV>0){
                Degats(stats_pingouin,stats_cerf)
                if(stats_cerf.PV<=0){
                    cerf.style.display ="none";
                    dialogue.innerHTML = stats_cerf.NOM + " est mort" + "<br/>"+dialogue.innerHTML;
                }
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
                if(stats_perenoel.PV<=0){
                    pere_noel.style.display ="none";
                    dialogue.innerHTML = stats_perenoel.NOM + " est mort" + "<br/>"+dialogue.innerHTML;
                }
            }
            else{
                random = random +1
            }
        }
        if (random==2){
            if (stats_merenoel.PV>0){
                Degats(stats_pingouine,stats_merenoel)
                if(stats_merenoel.PV<=0){
                    mere_noel.style.display ="none";
                    dialogue.innerHTML = stats_merenoel.NOM + " est morte" + "<br/>"+dialogue.innerHTML;
                }
            }
            else{
                random = random +1
            }
        }
        if (random==3){
            if (stats_lutin.PV>0){
                Degats(stats_pingouine,stats_lutin)
                if(stats_lutin.PV<=0){
                    lutin.style.display ="none";
                    dialogue.innerHTML = stats_lutin.NOM + " est mort" + "<br/>"+dialogue.innerHTML;
                }
            }
            else{
                random = random +1
            }
        }
        if (random==4){
            if (stats_cerf.PV>0){
                Degats(stats_pingouine,stats_cerf)
                if(stats_cerf.PV<=0){
                    cerf.style.display ="none";
                    dialogue.innerHTML = stats_cerf.NOM + " est mort" + "<br/>"+dialogue.innerHTML;
                }
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
                if(stats_perenoel.PV<=0){
                    pere_noel.style.display ="none";
                    dialogue.innerHTML = stats_perenoel.NOM + " est mort" + "<br/>"+dialogue.innerHTML;
                }
            }
            else{
                random = random +1
            }
        }
        if (random==2){
            if (stats_merenoel.PV>0){
                Degats(stats_orque,stats_merenoel)
                if(stats_merenoel.PV<=0){
                    mere_noel.style.display ="none";
                    dialogue.innerHTML = stats_merenoel.NOM + " est morte" + "<br/>"+dialogue.innerHTML;
                }
            }
            else{
                random = random +1
            }
        }
        if (random==3){
            if (stats_lutin.PV>0){
                Degats(stats_orque,stats_lutin)
                if(stats_lutin.PV<=0){
                    lutin.style.display ="none";
                    dialogue.innerHTML = stats_lutin.NOM + " est mort" + "<br/>"+dialogue.innerHTML;
                }
            }
            else{
                random = random +1
            }
        }
        if (random==4){
            if (stats_cerf.PV>0){
                Degats(stats_orque,stats_cerf)
                if(stats_cerf.PV<=0){
                    cerf.style.display ="none";
                    dialogue.innerHTML = stats_cerf.NOM + " est mort" + "<br/>"+dialogue.innerHTML;
                }
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
            Tour_pingouin()                        //tour pingouin apres 4 secondes
            if (stats_pingouin.Poison == true){         // Poison
                stats_pingouin.PV -= stats_perenoel.ATKSPE
                stats_pingouin.Tourpoison -= 1
                dialogue.innerHTML = "Le pingouin prend"+ stats_perenoel.ATKSPE +"points de degats du au poison" + "<br/>"+dialogue.innerHTML
                    if (stats_pingouin.Tourpoison ==0){
                        stats_pingouin.Poison = false
                    }
            }
            pingouin.style.filter ="none";
            pingouine.style.filter ="drop-shadow(0 1rem 3rem #0044ff)";
        }, 4000) 
    }
    setTimeout(() => {
        random = Math.floor(Math.random() * 4)+1;
        if (tour==6){
            Tour_pingouine()                        //tour pingouine apres 4 secondes
            if (stats_pingouine.Poison == true){        //poison
                stats_pingouine.PV -= stats_perenoel.ATKSPE
                stats_pingouine.Tourpoison -= 1
                dialogue.innerHTML = "La pingouine prend"+ stats_perenoel.ATKSPE +"points de degats du au poison" + "<br/>"+dialogue.innerHTML
                    if (stats_pingouine.Tourpoison ==0){
                        stats_pingouine.Poison = false
                    }
            }
            pingouine.style.filter ="none";
            orque.style.filter ="drop-shadow(0 1rem 3rem #0044ff)";
        }
    }, 8000) 
    setTimeout(() => {
        random = Math.floor(Math.random() * 4)+1;
        if (tour==7){
            Tour_orque()                        //tour orque apres 4 secondes
            if (stats_orque.Poison == true){         //poison
                stats_orque.PV -= stats_perenoel.ATKSPE
                stats_orque.Tourpoison -= 1
                dialogue.innerHTML = "L'orque prend"+ stats_perenoel.ATKSPE +"points de degats du au poison" + "<br/>"+dialogue.innerHTML
                    if (stats_orque.Tourpoison ==0){
                        stats_orque.Poison = false
                    }
            }
            orque.style.filter ="none";
            pere_noel.style.filter ="drop-shadow(0 1rem 3rem #0044ff)";
        }
        Disable();
    }, 12000) 
}