// All but 10 posts are hidden by default

function handleButtonClick() {
  const hiddenPosts = document.querySelectorAll(
    ".article:not(.article--visible)"
  );

  [...hiddenPosts]
    .slice(0, 9)
    .forEach(post => post.classList.add("article--visible"));

  if (hiddenPosts.length < 9) {
    button.style.display = "none";
  }
}

const button = document.querySelector(".more-posts");
button.addEventListener("click", handleButtonClick);
