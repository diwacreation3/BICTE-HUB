// Get the modal element
const modal = document.getElementById("modal");

// Get the <a> element for "About"
const aboutLink = document.querySelector(".about a");

// Get the <span> element for close button
const closeBtn = document.getElementById("closeBtn");

// Function to show the modal
function showModal() {
  modal.style.display = "block";
}

// Function to hide the modal
function hideModal() {
  modal.style.display = "none";
}

// Event listener for "About" link
aboutLink.addEventListener("click", showModal);

// Event listener for close button
closeBtn.addEventListener("click", hideModal);

// Event listener to close the modal if the user clicks outside of it
window.addEventListener("click", (event) => {
  if (event.target === modal) {
    hideModal();
  }
});