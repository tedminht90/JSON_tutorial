// javascript for create.html
const createPost = document.querySelector(".create");

const create = async (e) => {
  e.preventDefault();
  const temp = {
    title: createPost.title.value,
    body: createPost.body.value,
    likes: parseInt(createPost.likes.value),
  };
  await fetch("http://localhost:3000/posts", {
    method: "POST",
    headers: { "Content-type": "application/json" },
    body: JSON.stringify(temp),
  });
  window.location.replace("index.html");
};

createPost.addEventListener("submit", create);
