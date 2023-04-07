function clearCheckboxes() {
    // Get all list items
    const listItems = document.querySelectorAll('.habits li');
    // Loop through the list items and remove the 'selected' class
    listItems.forEach((item) => {
      item.classList.remove('selected');
      // Also clear the corresponding Local Storage item
      localStorage.removeItem(item.id);
    });
  }
  
  // Get all list items
  const listItems = document.querySelectorAll('.habits li');
  
  // Loop through the list items and add an event listener to each one
  listItems.forEach((item) => {
    // Set the initial state of the list item from Local Storage, if available
    const savedState = localStorage.getItem(item.id);
    if (savedState === 'selected') {
      item.classList.add('selected');
    }
    // Add an event listener to the list item that toggles the 'selected' class when clicked
    item.addEventListener('click', () => {
      item.classList.toggle('selected');
      // Store the state of the list item in Local Storage
      if (item.classList.contains('selected')) {
        localStorage.setItem(item.id, 'selected');
      } else {
        localStorage.removeItem(item.id);
      }
    });
  });
  