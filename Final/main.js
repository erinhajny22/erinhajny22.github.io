document.addEventListener('DOMContentLoaded', () => {
    const carouselImages = document.querySelector('.carousel-images'); // Container with all images
    const prevButton = document.querySelector('.carousel-button.prev');
    const nextButton = document.querySelector('.carousel-button.next');
    const images = document.querySelectorAll('.carousel-images img'); // All images in the carousel
    const totalImages = images.length;
    let currentIndex = 0;

    // Function to update the carousel position
    function updateCarousel() {
        const offset = -currentIndex * 20; // Move -100% for each image
        carouselImages.style.transform = `translateX(${offset}%)`;
    }

    // Next button functionality
    nextButton.addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % totalImages; // Move forward, loop to start
        updateCarousel();
    });

    // Previous button functionality
    prevButton.addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + totalImages) % totalImages; // Move backward, loop to end
        updateCarousel();
    });

    // Auto-rotate the carousel every 3 seconds
    setInterval(() => {
        currentIndex = (currentIndex + 1) % totalImages;
        updateCarousel();
    }, 3000);

    // Initialize position
    updateCarousel();


    // Fetch the JSON file
    fetch("projects.json")
      .then((response) => response.json())
      .then((data) => {
        const projects = data.projects;
  
        // Generate project cards 
        projects.forEach((project) => {
          const card = document.createElement("div");
          card.classList.add("project-card");
          card.setAttribute("data-tech", project.tech.toLowerCase());
  
          card.innerHTML = `
            <img src="${project.image}" alt="${project.title}" class="project-image">
            <div class="project-info">
              <h3>${project.title}</h3>
              <p>${project.description}</p>
              <a href="${project.link}" class="project-link" target="_blank">View Project</a>
            </div>
          `;
          projectsContainer.appendChild(card);
        });
      })
      .catch((error) => console.error("Error loading projects:", error));
  });
  
