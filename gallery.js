var modal = document.getElementById("myModal");
var modalImg = document.getElementById("modalImg");
var galleryItems = document.querySelectorAll(".gallery-item");

galleryItems.forEach(function(item) {
    item.addEventListener("click", function() {
        modal.style.display = "block";
        modalImg.src = this.src;
    });
});

function closeModal() {
    modal.style.display = "none";
}
