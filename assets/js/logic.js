// Function to toggle light/dark mode
const toggleMode = () => {
  document.body.classList.toggle('dark');
  const isDarkMode = document.body.classList.contains('dark');
  document.documentElement.style.setProperty('--circle-color', isDarkMode ? '#000' : '#ffb100');
  localStorage.setItem('mode', isDarkMode ? 'dark' : 'light');
};

// Function to read from local storage
const readLocalStorage = () => {
  const data = localStorage.getItem('blogPosts');
  return data ? JSON.parse(data) : [];
};

// Function to store data in local storage
const storeLocalStorage = (newPost) => {
  const blogPosts = readLocalStorage();
  blogPosts.push(newPost);
  localStorage.setItem('blogPosts', JSON.stringify(blogPosts));
};

let redirectURL = '';

// Function to redirect to a different page
const redirectPage = (url) => {
  redirectURL = url;
  location.assign(url);
};

// Read mode from local storage and apply it
const applyStoredMode = () => {
  const mode = localStorage.getItem('mode');
  if (mode === 'dark') {
    document.body.classList.add('dark');
    document.documentElement.style.setProperty('--circle-color', '#000');
  }
};

// Add event listener to the toggle button
document.getElementById('toggle').addEventListener('click', toggleMode);

// Apply stored mode on page load
applyStoredMode();

