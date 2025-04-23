let score = 0;
let listeProposition = "";
let i = 0;
let btnValiderMot = document.getElementById("btnValiderMot");
function afficherScore(score, listeQuestion) {
  let afficheScore = document.querySelector(".zoneScore span");
  afficheScore.innerHTML = ` ${score}/${listeQuestion}`;
}
/* Fonction demandant les mots ou les 
 phrases */

function askWordOrPhrase() {
  let listeBouton = document.querySelectorAll("input[name=optionSource]");

  for (let index = 0; index < listeBouton.length; index++) {
    if (listeBouton[index].defaultChecked && listeBouton[index].value === "1") {
      listeProposition = listeMot;
      console.log(`Element ${listeBouton[index].id} coché par défaut`);
    } else if (
      listeBouton[index].defaultChecked &&
      listeBouton[index].value === "2"
    ) {
      listeProposition = listePhrase;
      console.log(`Element ${listeBouton[index].id} coché par défaut`);
    }
    afficherProposition(listeProposition[0]);
    listeBouton[index].addEventListener("change", (Event) => {
      if (Event.target.value === "1") {
        listeProposition = listeMot;
        console.log("mot");
      } else {
        listeProposition = listePhrase;
        console.log("phrase");
      }
      afficherProposition(listeProposition[0]);
    });
  }
}
/**
 * @params {string}  element - Element string à afficher
 *
 */
function afficherProposition(element) {
  zoneProposition = document.querySelector(".zoneProposition");
  zoneProposition.innerHTML = element;
}

function partageScore() {
  let btnEnvoyerMail = document.querySelector("form");
  btnEnvoyerMail.addEventListener("submit", (event) => {
    event.preventDefault();
    let nom = document.getElementById("nom").value;
    console.log(nom);
  });
}

//Lancement du jeu
function launchGame() {
  btnValiderMot.addEventListener("click", () => {
    if (ecritureUtilisateur.value === listeProposition[i]) {
      score++;
    }
    i++;
    ecritureUtilisateur.value = "";
    if (listeProposition[i] === undefined) {
      afficherProposition("game done");
      btnValiderMot.disabled = true;
    } else {
      afficherProposition(listeProposition[i]);
    }
    afficherScore(score, i);
  });
}
