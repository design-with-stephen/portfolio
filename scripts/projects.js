// Function to show only three cards initially
function showInitialCards() {
  const projectCategories = document.querySelectorAll('.project-category');
  projectCategories.forEach(category => {
      const cards = category.querySelectorAll('.card');
      for (let i = 0; i < cards.length; i++) {
          if (i < 6) {
              cards[i].style.display = "block";
          } else {
              cards[i].style.display = "none";
          }
      }
  });
}

// Function to handle showing category content
function showCategory(category) {
  const categories = document.querySelectorAll('.project-category');
  categories.forEach((cat) => {
      cat.classList.remove('active');
  });

  // Show the selected category
  const selectedCategory = document.querySelector(`.project-category.${category}`);
  selectedCategory.classList.add('active');
}

// Call the function to show initial cards
showInitialCards();

// Get all the <li> elements
const categoryListItems = document.querySelectorAll('.tab');

// Add a click event listener to each <li> element
categoryListItems.forEach(listItem => {
  listItem.addEventListener('click', () => {
    categoryListItems.forEach(item => {
       item.classList.remove('isactive');
  });

  // Add the "isactive" class to the clicked <li> element
  listItem.classList.add('isactive');

  // Show the category content based on the clicked <li> element
  const categoryId = listItem.getAttribute('onclick').split("'")[1];
  showCategory(categoryId);
  // Call the function to show initial cards when switching categories
  showInitialCards();
});
});


// Selecting necessary elements
let loadMore = document.querySelector('.seeMoreBtn');
let loadLess = document.querySelector('.seeLessBtn');
let cards = document.querySelectorAll(".image_box .card");

// Function to toggle card visibility
function toggleCards(start, end, display) {
    for (let i = start; i < end; i++) {
        cards[i].style.display = display;
    }
}

// Initially show the first three cards
toggleCards(0, 6, "block");

// Functionality for "See More" button
loadMore.addEventListener('click', (event) => {
    event.preventDefault();
    toggleCards(3, cards.length, "block"); 
    loadMore.style.display = "none"; 
    loadLess.style.display = "inline-block"; 
});

// Functionality for "See Less" button
loadLess.addEventListener('click', (event) => {
    event.preventDefault();
    toggleCards(3, cards.length, "none");
    loadMore.style.display = "inline-block"; 
    loadLess.style.display = "none"; 
});


// Get modal elements
const modal = document.getElementById("imageModal");
const modalImg = document.getElementById("modalImage");
const closeBtn = document.querySelector(".close-modal");

// Add click event to all images
document.querySelectorAll('.project-image-wrap img').forEach(img => {
    img.addEventListener('click', () => {
        modal.style.display = "block";
        modalImg.src = img.src;
    });
});

// Close modal when clicking the close button
closeBtn.addEventListener('click', () => {
    modal.style.display = "none";
});

// Optional: close modal when clicking outside the image
modal.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.style.display = "none";
    }
});