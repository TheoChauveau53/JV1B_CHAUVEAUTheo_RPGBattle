attack = document.getElementById("attack");
valeurResultat = document.getElementById("valeurResultat");
afficheAction = document.getElementById("afficheAction");
perso1 = document.getElementById("perso1");

attack.onclick = function() { 
    valeurResultat.innerHTML = parseInt(valeurResultat.innerHTML)-10;
    afficheAction.innerHTML = "Tu as attaqué et infligé 10 dégats";
    
}
function attaque(){
    document.getElementById("image").src="guido.png"
}