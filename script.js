//your code here!
document.addEventListener("DOMContentLoaded", function () {
  const listContainer = document.getElementById('infi-list');
  const listItemHeight = 40; // Assuming each list item has a height of 40px

  // Function to check if the user has scrolled to the bottom of the list
  function checkScroll() {
    const scrollTop = listContainer.scrollTop;
    const scrollHeight = listContainer.scrollHeight;
    const clientHeight = listContainer.clientHeight;

    if (scrollTop + clientHeight >= scrollHeight - listItemHeight) {
      addMoreItems(); // Add 2 more list items when bottom is reached
    }
  }

  // Function to add more list items
  function addMoreItems() {
    for (let i = 0; i < 2; i++) {
      const newItem = document.createElement('li');
      newItem.textContent = 'Item ' + (listContainer.childElementCount + 1);
      listContainer.appendChild(newItem);
    }
  }

  // Initial setup: Add 10 list items by default
  for (let i = 0; i < 10; i++) {
    const newItem = document.createElement('li');
    newItem.textContent = 'Item ' + (i + 1);
    listContainer.appendChild(newItem);
  }

  // Attach scroll event listener to the list container
  listContainer.addEventListener('scroll', checkScroll);
});
