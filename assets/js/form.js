// Select the form element
const form = document.getElementById('blogForm');

// Function to handle form submission
const handleFormSubmit = (event) => {
  event.preventDefault();

  const username = document.getElementById('username').value.trim();
  const title = document.getElementById('title').value.trim();
  const content = document.getElementById('content').value.trim();
  const errorElement = document.getElementById('error');

  if (!username || !title || !content) {
    errorElement.textContent = 'Please complete the form.';
    return;
  }

  const blogPost = { username, title, content };
  storeLocalStorage(blogPost);
  redirectPage('blog.html');
};

// Add event listener to the form
form.addEventListener('submit', handleFormSubmit);
