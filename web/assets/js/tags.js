const tagButtons = document.querySelectorAll(".tag-button");
const articles = document.querySelectorAll(".article[data-postid]");


function handleTagButtonClick(event) {
  // Remove selected state of all tags
  tagButtons.forEach(button => {
    button.classList.remove("tag-list__item--selected");
  });

  // Add selected state to clicked tag
  event.currentTarget.classList.add("tag-list__item--selected");

  const tagId = event.currentTarget.dataset.tagid;
  if (!tagId) {
    // "All posts" clicked. Show all posts and return
    articles.forEach(article => {
      article.style.display = "block";
    });
    return;
  }

  // Go throuh all articles and hide or show if they have the clicked tag
  articles.forEach(article => {
    const tagList = article.getAttribute("data-postid").split(" ");
    article.style.display = tagList.includes(tagId) ? "block" : "none";
  });
}

tagButtons.forEach(button =>
  button.addEventListener("click", handleTagButtonClick)
);
