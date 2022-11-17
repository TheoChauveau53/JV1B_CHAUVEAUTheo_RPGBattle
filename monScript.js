attack = document.getElementById("attack");
valeurResultat = document.getElementById("valeurResultat");
afficheAction = document.getElementById("afficheAction");
attack_dmg =
attack.onclick = function() { 
    valeurResultat.innerHTML = parseInt(valeurResultat.innerHTML)-10;
    afficheAction.innerHTML = "Tu as attaqué et infligé 10 dégats";

}

