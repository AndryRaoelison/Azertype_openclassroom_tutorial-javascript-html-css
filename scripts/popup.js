/*
@param{number}boutonPartager : Un bouton 
*/

function afficherPopUp() {
  let blocPopup = document.querySelector(".popupBackground");
  blocPopup.classList.add("active");
}

function cacherPopUp() {
  let blocPopup = document.querySelector(".popupBackground");
  blocPopup.classList.remove("active");
}

function initPopUp() {
  let boutonPartager = document.querySelector(".zonePartage button");
  let popupBackground = document.querySelector(".popupBackground");
  boutonPartager.addEventListener("click", () => {
    afficherPopUp();
  });

  popupBackground.addEventListener("click", (Event) => {
    if (Event.target === popupBackground) {
      cacherPopUp();
    }
  });
}
