// Vous pouvez ajouter des scripts JavaScript ici pour rendre le site plus interactif
// Exemple : Changer la couleur de fond lorsque vous cliquez sur un élément du menu
document.addEventListener("DOMContentLoaded", function() {
    const menuItems = document.querySelectorAll("#menu li");
    const menuImages = document.querySelectorAll("#menu-content img");

    menuItems.forEach(item => {
        item.addEventListener("click", function() {
            // Change background color
            document.body.style.backgroundColor = this.getAttribute("data-color");

            // Update active menu image
            const activeImage = document.querySelector("#menu-content img.active");
            if (activeImage) {
                activeImage.classList.remove("active");
            }
            const textContent = this.textContent.toLowerCase().replace(" ", "-");
            document.getElementById(textContent).classList.add("active");
        });
    });
});
