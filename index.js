// Write your code here!

function displayPosts(posts) {
  const ul = document.getElementById('post-list');

 
  ul.innerHTML = '';

  posts.forEach(post => {
    const li = document.createElement('li');

    const title = document.createElement('h1');
    title.textContent = post.title;

    const body = document.createElement('p');
    body.textContent = post.body;

    li.appendChild(title);
    li.appendChild(body);

    ul.appendChild(li);
  });
}

async function getPosts() {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    displayPosts(data);
  } catch (error) {
    console.error('Failed to fetch posts:', error);
  }
}

// Call the async function on page load
getPosts();
