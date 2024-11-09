// TODO: Create logic to toggle the light/dark mode styles for the page and circle. The mode should be saved to local storage.
const toggleMode = () => {
  const body = document.body;
  const currentMode = body.getAttribute('data-mode') || 'light';
  const newMode = currentMode === 'light' ? 'dark' : 'light';

  body.setAttribute('data-mode', newMode);
  // Update styles based on the mode
  body.classList.toggle('dark-mode', newMode === 'dark');
  body.classList.toggle('light-mode', newMode === 'light');

  // Update circle color based on the mode
  const circle = document.querySelector('.circle'); // Assuming you have a circle element
  circle.style.setProperty('--circle-color', newMode === 'dark' ? 'white' : 'black');

  // Save the current mode to local storage
  localStorage.setItem('mode', newMode);
};

// Event listener for the mode toggle button
document.getElementById('mode-toggle').addEventListener('click', toggleMode);

// On page load, check local storage for mode and apply it
window.onload = () => {
  const savedMode = localStorage.getItem('mode') || 'light';
  document.body.setAttribute('data-mode', savedMode);
  document.body.classList.toggle('dark-mode', savedMode === 'dark');
  document.body.classList.toggle('light-mode', savedMode === 'light');
};

// TODO: Create a function called `readLocalStorage` that reads from local storage and returns the data. If no data exists, return an empty array.
const readLocalStorage = () => {
  const data = localStorage.getItem('blogPosts');
  return data ? JSON.parse(data) : [];
};

// TODO: Create a function called `storeLocalStorage` that takes a given object and saves the new data to the existing blog data in local storage.
const storeLocalStorage = (newPost) => {
  const posts = readLocalStorage();
  posts.push(newPost);
  localStorage.setItem('blogPosts', JSON.stringify(posts));
};

// ! Use the following function whenever you need to redirect to a different page
let redirectURL = '';

const redirectPage = function (url) {
  redirectURL = url;
  location.assign(url);
};

