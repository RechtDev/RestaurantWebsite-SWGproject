window.addEventListener("DOMContentLoaded", onDomLoaded);

function onDomLoaded() {
    //variables for Index.html Meet staff show/hide section
    let infoButton = document.getElementById("infoButton");
    let showMoreDiv = document.getElementById("showMore");
    let isShown = false;
    //variables for switxhing/showing wither review tab or food tab(food tab by defualt)
    let featuredFoodButton = document.getElementById("foodButton");
    let reviewsButton = document.getElementById("reviewsButton");
    let foodTab = document.getElementById("foodTab");
    let reviewsTab = document.getElementById("reviewsTab");
    let reviewTabShown = false;
    //variables for underling the current page the user is on
    let navItems = document.querySelectorAll("li a");
    let currentLink = document.URL;
    //function that assigns class that underlines current page in nav
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
    //function that shows/hides Meet the staff section on Index.html
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
    //functions that toggle the tabs 
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
    //button to open modal for Revies.html
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