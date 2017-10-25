var nombreAleatoire;

function demarrerLaPartie() {
    nombreAleatoire = Math.round(Math.random()*100);
    console.log(nombreAleatoire);
    document.getElementById('leNombre').value = 50;
    document.getElementById('leBouton').style.display = '';
    document.getElementById('leNombre').disabled = false;
    document.getElementById('replay').style.display = 'none';
    document.getElementById('leResultat').innerHTML = '';
    document.getElementById('historique').innerHTML = '';
}

demarrerLaPartie();

function verifierLeNombre() {
    var nb = document.getElementById('leNombre').value;

    if ( nb > nombreAleatoire ) {
        var result = 'le nombre est plus petit que ' + nb;
    } else if ( nb < nombreAleatoire ) {
        var result = 'le nombre est plus grand que ' + nb;
    } else {
        var result = 'vous avez gagné !!';
        document.getElementById('leBouton').style.display = 'none';
        document.getElementById('leNombre').disabled = true;
        document.getElementById('replay').style.display = '';
    }

    document.getElementById('leResultat').innerHTML = result;
    document.getElementById('historique').innerHTML += '<li>'+result+'</li>';
}
