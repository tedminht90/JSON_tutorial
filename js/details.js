// javascript for details.html
const id = new URLSearchParams(window.location.search).get("id");
//console.log(id);
const displayPost = document.querySelector(".details");
const deletePost = document.querySelector(".delete");
const updatePost = document.querySelector(".update");

const renderPost = async () => {
  try {
    const resp = await fetch("http://localhost:3000/posts/" + id);
    const post = await resp.json();
    //console.log(post);
    let template = `
    <h1>${post.title}</h1>
    <p>${post.body}</p>
    `;
    displayPost.innerHTML = template;
  } catch (error) {
    console.log(error);
  }
};

deletePost.addEventListener("click", async () => {
  await fetch("http://localhost:3000/posts/" + id, {
    method: "DELETE",
  });
  window.location.replace("index.html");
});

updatePost.addEventListener("submit", async (e) => {
  e.preventDefault();
  const temp = {
    title: updatePost.title.value,
    body: updatePost.body.value,
    likes: parseInt(updatePost.likes.value),
  };
  await fetch("http://localhost:3000/posts/" + id, {
    method: "PUT",
    headers: { "Content-type": "application/json" },
    body: JSON.stringify(temp),
  });
  window.location.replace("index.html");
});

window.addEventListener("DOMContentLoaded", renderPost);
