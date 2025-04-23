let score = 0;
let listProposition = "";
let i = 0;
let btnValidate = document.getElementById("btnValiderMot");
function showScore(score, questionList) {
  let showScore = document.querySelector(".zoneScore span");
  showScore.innerHTML = ` ${score}/${questionList}`;
}
/*function asking if the user want words or phrases */

function askWordOrPhrase() {
  let listButton = document.querySelectorAll("input[name=optionSource]");
  for (let index = 0; index < listButton.length; index++) {
    if (listButton[index].defaultChecked && listButton[index].value === "1") {
      listProposition = listeMot;
      console.log(`Element ${listButton[index].id} coché par défaut`);
    } else if (
      listButton[index].defaultChecked &&
      listButton[index].value === "2"
    ) {
      listProposition = listePhrase;
      console.log(`Element ${listButton[index].id} coché par défaut`);
    }
    showProposition(listProposition[0]);
    listButton[index].addEventListener("change", (Event) => {
      if (Event.target.value === "1") {
        listProposition = listeMot;
        console.log("mot");
      } else {
        listProposition = listePhrase;
        console.log("phrase");
      }
      showProposition(listProposition[0]);
    });
  }
}
/**
 * @params {string}  element - Element string à afficher
 *
 */
function showProposition(element) {
  zoneProposition = document.querySelector(".zoneProposition");
  zoneProposition.innerHTML = element;
}

function shareScore() {
  let btnEnvoyerMail = document.querySelector("form");
  btnEnvoyerMail.addEventListener("submit", (event) => {
    event.preventDefault();
    let nom = document.getElementById("nom").value;
    console.log(nom);
  });
}

//Lunching game
function launchGame() {
  btnValidate.addEventListener("click", () => {
    if (ecritureUtilisateur.value === listProposition[i]) {
      score++;
    }
    i++;
    ecritureUtilisateur.value = "";
    if (listProposition[i] === undefined) {
      showProposition("Le jeu est fini votre score ci-dessous ");
      btnValidate.disabled = true;
    } else {
      showProposition(listProposition[i]);
    }
    showScore(score, i);
  });
}
