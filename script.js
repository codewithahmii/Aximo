document.addEventListener("DOMContentLoaded", function () {
    console.log("Navigation Bar Loaded Successfully!");
  });

  
  const counters = document.querySelectorAll('.counter');

  counters.forEach(counter => {
      const updateCount = () => {
          const target = +counter.getAttribute('data-target');
          const count = +counter.innerText.replace('%', '');
          const increment = target / 200; // Adjust speed by changing the divisor

          if (count < target) {
              counter.innerText = Math.ceil(count + increment) + (counter.innerText.includes('%') ? '%' : '');
              setTimeout(updateCount, 10); // Adjust interval for smoother or faster animation
          } else {
              counter.innerText = target + (counter.innerText.includes('%') ? '%' : '');
          }
      };

      updateCount();
  });
  

  function hide() {
    const dropdowns= document.querySelectorAll("#dropdown");
    
  
  
    dropdowns.forEach(function(dropdown) {
      const h=dropdown.querySelector("#h1");
      const dropdownproject=dropdown.querySelector("#dropdownproject");
      h.addEventListener("click", function() {
     
        if (dropdownproject.style.display === "block") {
          dropdownproject.style.display = 'none';
        } else {
          dropdownproject.style.display = 'block';
        }
      });
     
    });
   
  }
  
  hide();
  
  const cardContainers = document.querySelectorAll('.card-container');

  // Function to show social icons
  function showIcons(event) {
      const socialIcons = event.currentTarget.querySelector('.social-icons');
      socialIcons.style.display = 'block'; // Show icons when mouse enters the card
  }

  // Function to hide social icons
  function hideIcons(event) {
      const socialIcons = event.currentTarget.querySelector('.social-icons');
      socialIcons.style.display = 'none'; // Hide icons when mouse leaves the card
  }

  // Add event listeners to each card container
  cardContainers.forEach(card => {
      card.addEventListener('mouseenter', showIcons);
      card.addEventListener('mouseleave', hideIcons);
  });