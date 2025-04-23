/*
@param{number}shareButton : Un bouton 
*/

function showPopup() {
  let blocPopup = document.querySelector(".popupBackground");
  blocPopup.classList.add("active");
}

function hidePoppup() {
  let blocPopup = document.querySelector(".popupBackground");
  blocPopup.classList.remove("active");
}

function initPopUp() {
  let shareButton = document.querySelector(".zonePartage button");
  let popupBackground = document.querySelector(".popupBackground");
  shareButton.addEventListener("click", () => {
    showPopup();
  });

  popupBackground.addEventListener("click", (e) => {
    if (e.target === popupBackground) {
      hidePoppup();
    }
  });
}
