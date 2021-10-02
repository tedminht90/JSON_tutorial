// javascript for index.html
const displayPosts = document.querySelector(".posts");
//console.log(displayPosts);
const searchPosts = document.querySelector(".search");

const renderPosts = async (key) => {
  // Nên tìm hiểu về callback, promise, async/await
  let url = "http://localhost:3000/posts?_sort=likes&_order=desc";
  if (key) {
    url += `&q=${key}`;
  }

  try {
    const resp = await fetch(url);
    const posts = await resp.json();
    //console.log(posts);
    let template = "";
    //foreach or map
    posts.map((item) => {
      template += `
        <div class="post">
        <h2>${item.title}</h2>
        <p><small>${item.likes} likes</small></p>
        <p>${item.body.slice(0, 200)}</p>
        <a href="/details.html?id=${item.id}" >Read more...</a>
        </div>
        `;
    });
    displayPosts.innerHTML = template;
  } catch (error) {
    console.log(error);
  }
};

const search = (e) => {
  e.preventDefault();
  renderPosts(searchPosts.key.value.trim());
};

searchPosts.addEventListener("submit", search);

window.addEventListener("DOMContentLoaded", () => renderPosts());
