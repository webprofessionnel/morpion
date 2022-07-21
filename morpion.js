function initialisation() {
  //On cache le bouton "Rejouer"
  document.getElementById('rejouer').style.visibility = 'hidden';
  //On définit les joueurs
  joueurs = ['X', 'O'];
  //Et le joueur qui commence
  joueur = joueurs[0];
  nbTours = 1;
}

function jouer(zone) {
  if (document.getElementById(zone).innerHTML == '') {
    if (joueur === joueurs[0]) {
      //document.getElementById(zone).innerHTML = '<img src="./image-morpion/croix.png">';
      //deuxième façon c'est comme suivant
      let img = document.createElement('img');
      img.setAttribute('src', './image-morpion/croix.png');
      img.setAttribute('alt', 'croix');
      document.getElementById(zone).appendChild(img);
      joueur = joueurs[1];
    } else {
      document.getElementById(zone).innerHTML =
        '<img src="./image-morpion/rond.png">';
      joueur = joueurs[0];
    }
    console.log(nbTours);
    verification();
    nbTours++;
  }
}

function verification() {
  if (nbTours > 4) {
    if (
      (document.getElementById('a1').innerHTML ===
        document.getElementById('a2').innerHTML &&
        document.getElementById('a1').innerHTML ===
          document.getElementById('a3').innerHTML &&
        document.getElementById('a1').innerHTML != '') ||
      (document.getElementById('b1').innerHTML ===
        document.getElementById('b2').innerHTML &&
        document.getElementById('b1').innerHTML ===
          document.getElementById('b3').innerHTML &&
        document.getElementById('b1').innerHTML != '') ||
      (document.getElementById('c1').innerHTML ===
        document.getElementById('c2').innerHTML &&
        document.getElementById('c1').innerHTML ===
          document.getElementById('c3').innerHTML &&
        document.getElementById('c1').innerHTML != '') ||
      (document.getElementById('a1').innerHTML ===
        document.getElementById('b1').innerHTML &&
        document.getElementById('a1').innerHTML ===
          document.getElementById('c1').innerHTML &&
        document.getElementById('a1').innerHTML != '') ||
      (document.getElementById('a2').innerHTML ===
        document.getElementById('b2').innerHTML &&
        document.getElementById('a2').innerHTML ===
          document.getElementById('c2').innerHTML &&
        document.getElementById('a2').innerHTML != '') ||
      (document.getElementById('a3').innerHTML ===
        document.getElementById('b3').innerHTML &&
        document.getElementById('a3').innerHTML ===
          document.getElementById('c3').innerHTML &&
        document.getElementById('a3').innerHTML != '') ||
      (document.getElementById('a1').innerHTML ===
        document.getElementById('b2').innerHTML &&
        document.getElementById('a1').innerHTML ===
          document.getElementById('c3').innerHTML &&
        document.getElementById('a1').innerHTML != '') ||
      (document.getElementById('a3').innerHTML ===
        document.getElementById('b2').innerHTML &&
        document.getElementById('a3').innerHTML ===
          document.getElementById('c1').innerHTML &&
        document.getElementById('a3').innerHTML != '')
    ) {
      if (joueur === joueurs[0]) {
        swal('Good job!', 'Le joueur O a gagné !', 'success');
      } else if (joueur === joueurs[1]) {
        swal('Good job!', 'Le joueur X a gagné !', 'success');
      }
      rejouer();
    }
    if (nbTours > 8) {
      swal('Egalité !', '...');
      rejouer();
    }
  }
}

function rejouer() {
  document.getElementById('rejouer').style.visibility = 'visible';
  // document.getElementById("rejouer").addEventListener("click", function() {
  // 	location.reload();
  // });
  document.getElementById('rejouer').onclick = function () {
    //
    location.reload();
  };
}
