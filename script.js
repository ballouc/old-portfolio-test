function clearCheckboxes() {
    // Get all checkbox inputs
    const checkboxes = document.querySelectorAll('input[type="checkbox"]');
    // Loop through the checkboxes and clear their "checked" property
    checkboxes.forEach((checkbox) => {
      checkbox.checked = false;
      // Also clear the corresponding Local Storage item
      localStorage.removeItem(checkbox.id);
    });
  }
  
  // Get all list items
  const listItems = document.querySelectorAll('.habits li');
  
  // Loop through the list items and add an event listener to each one
  listItems.forEach((item) => {
    // Get the checkbox input inside the list item
    const checkbox = item.querySelector('input[type="checkbox"]');
    // Set the initial state of the checkbox from Local Storage, if available
    const savedState = localStorage.getItem(checkbox.id);
    if (savedState === 'checked') {
      checkbox.checked = true;
    }
    // Add an event listener to the list item that toggles the checkbox when clicked
    item.addEventListener('click', () => {
      checkbox.checked = !checkbox.checked;
      // Store the state of the checkbox in Local Storage
      if (checkbox.checked) {
        localStorage.setItem(checkbox.id, 'checked');
      } else {
        localStorage.removeItem(checkbox.id);
      }
    });
  });
  