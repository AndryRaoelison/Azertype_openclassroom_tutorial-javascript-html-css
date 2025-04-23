//séléction des zône ou l'utilisateur va inscrire son texte
let userInputText = document.getElementById("inputEcriture");
let buttonValidate = document.getElementById("btnValiderMot");

//Mot/phrase proposer
let zoneProposition = document.querySelector(".zoneProposition");

//Affichage du score

//Radios
let radioSelect = document.querySelectorAll(".optionSource input");

afficherProposition(listeProposition[0]);
askWordOrPhrase();
launchGame();
initPopUp();
partageScore();

//Ceci est un test d'applicaiton :
let BoutonRadio = document.querySelectorAll("input[name=country]");
for (let index = 0; index < BoutonRadio.length; index++) {
  BoutonRadio[index].addEventListener("change", () => {
    console.log(
      `Le bouton ${BoutonRadio[index].value} est checked : ${BoutonRadio[index].checked}`
    );
  });
}

let boutonCheckBox = document.querySelector("input[name=Conditions]");
boutonCheckBox.addEventListener("change", () => {
  console.log("Le bouton est : " + boutonCheckBox.checked);
});
