window.addEventListener("DOMContentLoaded", onDomLoaded);

function onDomLoaded() {
    let infoButton = document.getElementById("infoButton");
    let showMoreDiv = document.getElementById("showMore");
    let isShown = false;
    infoButton.addEventListener("click", () => {
        if (!isShown) {
            showMoreDiv.style.display = "inline-block";
            infoButton.innerHTML = "Show Less";
            isShown = true;
        }
        else {
            showMoreDiv.style.display = "none";

            infoButton.innerHTML = "Show More";
            isShown = false;
        }
        })
}