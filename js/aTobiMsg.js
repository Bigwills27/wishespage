document.addEventListener("DOMContentLoaded", () => {
  const heading = document.querySelector(".heading");
  const otherHeadings = document.querySelectorAll(".other-heading");
  const cassette = document.querySelector(".cassette");
  const content = document.querySelector(".content");
  const tvContainer = document.querySelector(".tv-ctn");
  const theTV = document.querySelector(".the-tv");
  const mainVid = document.querySelector(".main-vid");
  const xClose = document.querySelector(".x-close");
  const finalHeading = document.querySelector(".final-heading");

  let headingsComplete = false; // Flag to indicate completion of heading animations

  // Show initial heading with jello-slide animation
  heading.classList.add("jello-slide");

  // Function to display the next heading with animation (reusable)
  function showNextHeading(currentHeadingIndex) {
    if (currentHeadingIndex >= otherHeadings.length - 1) {
      headingsComplete = true; // Mark completion after the last heading
      return;
    }

    setTimeout(() => {
      otherHeadings[currentHeadingIndex].style.display = "none";
      otherHeadings[currentHeadingIndex + 1].classList.add("jello-slide");
      otherHeadings[currentHeadingIndex + 1].style.display = "block";

      showNextHeading(currentHeadingIndex + 1); // Call recursively for next heading
    }, 3000);
  }

  // Start animation sequence after initial heading animation
  setTimeout(() => {
    heading.style.display = "none";
    otherHeadings[0].classList.add("jello-slide");
    otherHeadings[0].style.display = "block";

    showNextHeading(0); // Start showing other headings in sequence
  }, 3000);

  // Handle cassette click event
  cassette.addEventListener("click", () => {
    cassette.style.display = "none !important";
    if (!headingsComplete) return; // Exit if headings haven't finished

    content.style.display = "none"; // Hide content section
    tvContainer.style.display = "flex"; // Show TV container

    setTimeout(() => {
      theTV.style.transition = "transform 3s ease-in-out"; // Enable smooth scaling
      theTV.style.transform = "scale(100)"; // Scale up the TV

      setTimeout(() => {
        theTV.style.opacity = "0.6"; // Hide TV after reaching full scale
        mainVid.style.opacity = 1;
        mainVid.play();
        xClose.style.display = "flex";
      }, 3000); // Hide TV after 1 second
    }, 2000); // Delay scaling animation for 1 second
  });

  const finalHeadings = document.querySelectorAll(".final-heading");
  let finalHeadingIndex = 0;

  xClose.addEventListener("click", () => {
    cassette.style.display = "flex";
    mainVid.pause();
    mainVid.style.display = "none";
    content.style.display = "flex";
    tvContainer.style.display = "none";
    xClose.style.display = "none";
    otherHeadings.forEach((otherHeading) => {
      otherHeading.style.display = "none";
    });

    const animateFinalHeading = () => {
      if (finalHeadingIndex >= finalHeadings.length) return;

      finalHeadings[finalHeadingIndex].classList.add("jello-slide"); // Add animation class
      finalHeadings[finalHeadingIndex].style.display = "block"; // Show heading

      setTimeout(() => {
        // Hide the current heading only if it's not the last one
        if (finalHeadingIndex < finalHeadings.length - 1) {
          finalHeadings[finalHeadingIndex].style.display = "none";
          finalHeadings[finalHeadingIndex].classList.remove("jello-slide"); // Remove animation class
        }

        finalHeadingIndex++; // Move to the next heading
        animateFinalHeading(); // Call recursively to animate next heading
      }, 3000); // Set delay before hiding each heading
    };

    animateFinalHeading(); // Start animation sequence
  });
});
