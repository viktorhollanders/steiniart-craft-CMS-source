const toggleTag = document.querySelector(".toggle-menu");
const overlayTag = document.querySelector("nav.overlay");

toggleTag.addEventListener("click", function() {
	overlayTag.classList.toggle("open");
	toggleTag.classList.toggle("is-active");
});