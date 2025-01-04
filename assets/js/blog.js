// Select main and back button elements
const mainElement = document.querySelector('main');
const backButton = document.getElementById('back');

// Function to build and append an element to the DOM
const createElement = (tag, content, parent) => {
  const element = document.createElement(tag);
  element.textContent = content;
  parent.appendChild(element);
};

// Function to handle no blog posts case
const noPostsMessage = () => {
  createElement('p', 'No Blog posts yet...', mainElement);
};

// Function to render the list of blog posts
const renderBlogList = () => {
  const blogPosts = readLocalStorage();
  if (blogPosts.length === 0) {
    noPostsMessage();
    return;
  }

  blogPosts.forEach(post => {
    const article = document.createElement('article');
    createElement('h2', post.title, article);
    createElement('p', `By: ${post.username}`, article);
    createElement('p', post.content, article);
    mainElement.appendChild(article);
  });
};

// Call the renderBlogList function
renderBlogList();

// Redirect to the home page when the back button is clicked
backButton.addEventListener('click', () => {
  redirectPage('index.html');
});
