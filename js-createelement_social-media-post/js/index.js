console.clear();

function handleLikeButtonClick(event) {
  const buttonElement = event.target;
  buttonElement.classList.toggle("post__button--liked");
}

const likeButton = document.querySelector('[data-js="like-button"]');
likeButton.addEventListener("click", handleLikeButtonClick);

// Exercise:
// Use document.createElement() and append another social media post to the body.

const newArticle = document.createElement("article");
newArticle.classList.add("post");
document.body.append(newArticle);

const newPara = document.createElement("p");
newPara.classList.add("post__content");
newPara.textContent =
  "Chasing sunsets and dreams ☀️✨ #Wanderlust #AdventureAwaits 🌍🌴";
newArticle.append(newPara);

const newFooter = document.createElement("footer");
newFooter.classList.add("post__footer");
newArticle.append(newFooter);

const newSpan = document.createElement("span");
newSpan.classList.add("post__username");
newSpan.textContent = "@sabeen";
newFooter.append(newSpan);

const newButton = document.createElement("button");
newButton.classList.add("post__button");
newButton.textContent = "♥ Like";
newFooter.append(newButton);
newButton.addEventListener("click", handleLikeButtonClick);
