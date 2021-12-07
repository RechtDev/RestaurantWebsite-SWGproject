window.addEventListener("DOMContentLoaded", onDomLoaded);

function onDomLoaded() {
    let infoButton = document.getElementById("infoButton");
    let showMoreDiv = document.getElementById("showMore");
    let featuredFoodButton = document.getElementById("foodButton");
    let reviewsButton = document.getElementById("reviewsButton");
    let foodTab = document.getElementById("foodTab");
    let reviewsTab = document.getElementById("reviewsTab");
    let reviewTabShown = false;
    let isShown = false;
    let navItems = document.querySelectorAll("li a");
    let currentLink = document.URL;
    window.addEventListener("load", () => {
        if (currentLink.includes("Index")) {
            navItems[0].classList.toggle("activeNav");
        }
        else if (currentLink.includes("Menu")) {
            navItems[1].classList.toggle("activeNav");
        }
        else if (currentLink.includes("Reviews") || currentLink.includes("Reservations"))
        {
            navItems[2].classList.toggle("activeNav");
        }
    })

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
    reviewsButton.addEventListener("click", () => {
        if (!reviewTabShown) {
            foodTab.classList.toggle("hidden");
            reviewsTab.classList.toggle("hidden");
            reviewTabShown = true;
        }
    })
    featuredFoodButton.addEventListener("click", () => {
        if (reviewTabShown) {
            foodTab.classList.toggle("hidden");
            reviewsTab.classList.toggle("hidden");
            reviewTabShown = false;
        }
    })
    var exampleModal = document.getElementById('exampleModal')
    exampleModal.addEventListener('show.bs.modal', function (event) {
        // Button that triggered the modal
        var button = event.relatedTarget
        // Extract info from data-bs-* attributes
        var recipient = button.getAttribute('data-bs-whatever')
        // If necessary, you could initiate an AJAX request here
        // and then do the updating in a callback.
        //
        // Update the modal's content.
        var modalTitle = exampleModal.querySelector('.modal-title')
        var modalBodyInput = exampleModal.querySelector('.modal-body input')

        modalTitle.textContent = 'New message to ' + recipient
        modalBodyInput.value = recipient
    })
}