window.onload = function() {
    const text2 = document.querySelector('.text2');
    const anim = document.querySelector('body')
    body.style.animation = 'transitionIn 0.75s;'
    function restartAnimation() {
      text2.style.animation = 'none';
      text2.offsetHeight; /* Trigger reflow */
      text2.style.animation = 'typing 2s steps(40) forwards, blink-caret 2s infinite';
      setTimeout(restartAnimation, 5000); // Restart animation after 5 seconds
    }
    restartAnimation(); // Start the animation loop
    document.addEventListener("DOMContentLoaded", function() {
      setTimeout(function() {
        var body = document.getElementById("body");
        body.style.width = "50%";
      }, 2000); // Adjust the delay time in milliseconds (2000 ms = 2 seconds)
    });
    
  };
let img1 = document.querySelector('image1');
let img2 = document.querySelector('image2');
let img3 = document.querySelector('image3');
let img4 = document.querySelector('image4');
let img5 = document.querySelector('image5');
let img6 = document.querySelector('image6');
let sec = document.querySelector('.center-container');
// Wait for the DOM content to be fully loaded before accessing elements
document.addEventListener('DOMContentLoaded', function() {
  // Select the text and image elements
  let img1 = document.querySelector('.image1');
  let img2 = document.querySelector('.image2');
  let img3 = document.querySelector('.image3');
  let img4 = document.querySelector('.image4');
  let img5 = document.querySelector('.image5');
  let img6 = document.querySelector('.image6');
  let text = document.getElementById('text');
  let text1 = document.getElementById('text1');
  let sec = document.querySelector('.center-container');

  // Define the default top position for the text element
  let textTop = 40; // Adjust as needed
  let textTop1 = 60; // Adjust as needed
  let img1MarginLeft = 1; // Use margin-left instead of left

  // Apply the default top position to the text element initially
  text.style.top = textTop + '%';
  img1.style.marginLeft = img1MarginLeft + 'px'; // Use margin-left instead of left

  // Add scroll event listener to adjust positions dynamically
  window.addEventListener('scroll', () => {
      let value = window.scrollY;

      // Calculate the new top position of the text
      let newTop = Math.max(textTop - value * (-0.1), 0);
      let newTop1 = Math.max(textTop1 - value * (-0.1), 0);
      let newMarginLeft = Math.max(img1MarginLeft + value * (2.5), 0); // Adjust the factor for smooth movement

      // Apply the new positions to the elements
      text.style.top = newTop + '%';
      text1.style.top = newTop1 + '%';
      img1.style.marginTop = newMarginLeft + 'px'; // Use margin-left instead of left
      img2.style.marginTop = newMarginLeft + 'px'; // Use margin-left instead of left
      img3.style.marginTop = newMarginLeft + 'px'; // Use margin-left instead of left
      img4.style.marginTop = newMarginLeft + 'px'; // Use margin-left instead of left
      sec.style.marginTop =  newMarginLeft + 'px'; // Apply margin-top to center-container
      img6.style.marginTop = newMarginLeft + 'px'; // Apply margin-bottom to image5
  });
});
// JavaScript
document.addEventListener("DOMContentLoaded", function() {
  const bgAudio = document.getElementById('bgAudio');
  bgAudio.preload = "auto"; // Add preload attribute
  let currentAudio = null; // Track the currently playing audio
  let isSectionInView = false; // Track if the section is in view
  let fadeOutInterval; // Store interval for fade out effect

  // Function to play audio when section is in viewport
  function playAudioForSection(sectionId, audioFile) {
    const section = document.getElementById(sectionId);
    bgAudio.volume = 0.2;
    // Create IntersectionObserver instance
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.target === section && entry.isIntersecting) {
          const sectionTop = entry.boundingClientRect.top;
          const sectionBottom = entry.boundingClientRect.bottom;
          const sectionHeight = sectionBottom - sectionTop;
          const viewportHeight = window.innerHeight;
          const threshold = 0.5; // Adjust this threshold as needed
          // Check if at least 50% of the section is in view
          if (sectionHeight >= viewportHeight * threshold) {
            isSectionInView = true;
            if (currentAudio !== audioFile) {
              // Pause the previously playing audio
              if (currentAudio) {
                fadeOut(currentAudio);
              }
              // Play the new audio
              fadeIn(audioFile);
              currentAudio = audioFile;
            }
          }
        } else if (entry.target === section && !entry.isIntersecting) {
          // If the section is not fully in view anymore, start fade out
          isSectionInView = false;
          if (currentAudio) {
            fadeOut(currentAudio);
          }
        }
      });
    }, { threshold: [0, 0.5, 1] }); // Observe at 0%, 50%, and 100% thresholds

    // Observe the section
    observer.observe(section);
  }

  // Function to fade in audio
  function fadeIn(audioFile) {
    bgAudio.src = audioFile;
    bgAudio.loop = true; // Set audio to loop
    if (bgAudio.volume === 0) {
      bgAudio.volume = 0.1; // Initial volume
    }
    bgAudio.play();
    // Gradually increase volume
    let fadeInInterval = setInterval(() => {
      if (bgAudio.volume < 1) {
        bgAudio.volume += 0.1;
      } else {
        clearInterval(fadeInInterval);
      }
    }, 200);
  }

  // Function to fade out audio
  function fadeOut(audioFile) {
    if (fadeOutInterval) {
      clearInterval(fadeOutInterval);
    }
    fadeOutInterval = setInterval(() => {
      if (bgAudio.volume > 0) {
        bgAudio.volume -= 0.1;
      } else {
        clearInterval(fadeOutInterval);
        bgAudio.pause();
      }
    }, 200);
  }
  // Play different audio files for different sections
  playAudioForSection('Home', 'space.mp3');
  playAudioForSection('Skills', 'space.mp3');
  playAudioForSection('Portfolio', 'space.mp3');
  playAudioForSection('resumeSection', 'space.mp3');
});
document.addEventListener('DOMContentLoaded', function() {
  // Select the cloud and sun elements
  let cl1 = document.getElementById('cloud1');
  let cl2 = document.getElementById('cloud2');
  let cl3 = document.getElementById('cloud3');
  let sun = document.getElementById('sun');
  
  // Define the default top positions for the clouds and sun
  let cl1Top = 100;
  let cl2Top = 200;
  let cl3Top = 1000;
  let sunTop = 20;

  // Apply the default top positions to the clouds and sun initially
  cl1.style.top = cl1Top + 'px';
  cl2.style.top = cl2Top + 'px';
  cl3.style.top = cl3Top + 'px';
  sun.style.top = sunTop + 'px';

  // Add scroll event listener to adjust cloud and sun positions dynamically
  window.addEventListener('scroll', () => {
      let value = window.scrollY;

      // Calculate the new top positions of the clouds and sun
      let newTop1 = Math.max(cl1Top - value * (-0.1), 0);
      let newTop2 = Math.max(cl2Top - value * (-0.1), 0);
      let newTop3 = Math.max(cl3Top - value * (-0.1), 0);
      let newSunTop = Math.max(sunTop - value * (-0.7), 0);

      // Apply the new top positions to the clouds and sun
      cl1.style.top = newTop1 + 'px';
      cl2.style.top = newTop2 + 'px';
      cl3.style.top = newTop3 + 'px';
      sun.style.top = newSunTop + 'px';
  });
});
document.querySelector('body').addEventListener('mousemove', moveEarth);

function moveEarth(event) {
    var earths = document.querySelectorAll('#btn1, #btn2,#btn3');
    earths.forEach(function(earth) {
        let rect = earth.getBoundingClientRect();
        let centerX = rect.left + rect.width / 2; // Center X position of the element
        let centerY = rect.top + rect.height / 2; // Center Y position of the element

        let deltaX = event.clientX - centerX; // Distance from cursor to center X
        let deltaY = event.clientY - centerY; // Distance from cursor to center Y

        // Adjust movement based on distance from center
        let newX = deltaX * 0.05; // Adjust this multiplier for subtle movement
        let newY = deltaY * 0.05; // Adjust this multiplier for subtle movement

        // Apply smooth transition
        earth.style.transition = 'transform 0.2s ease-out';
        earth.style.transform = `translate(${newX}px, ${newY}px)`;
    });
}
document.querySelector('body').addEventListener('mousemove', moveEarth);

function moveEarth(event) {
    var earth1 = document.getElementById('btn1');
    var earth2 = document.getElementById('btn2');
    var earth3 = document.getElementById('btn3');
    var earth4 = document.getElementById('btn4');
    var earth5 = document.getElementById('btn5');
    var earth6 = document.getElementById('btn6');
    var earth7 = document.getElementById('btn7');
    var earth8 = document.getElementById('btn8');
    var earth9 = document.getElementById('btn9');
    var text = document.getElementById('planetext1');
    var text2 = document.getElementById('planetext2');
    var text3 = document.getElementById('planetext3');

    moveElement(earth1, event);
    moveElement(earth2, event);
    moveElement(earth3, event);
    moveElement(earth4, event);
    moveElement(earth5, event);
    moveElement(earth6, event);
    moveElement(earth7, event);
    moveElement(earth8, event);
    moveElement(earth9, event);
    moveElement(text, event);
    moveElement(text2, event);
    moveElement(text3, event);
    
}

function moveElement(element, event) {
    let rect = element.getBoundingClientRect();
    let centerX = rect.left + rect.width / 2; // Center X position of the element
    let centerY = rect.top + rect.height / 2; // Center Y position of the element

    let deltaX = event.clientX - centerX; // Distance from cursor to center X
    let deltaY = event.clientY - centerY; // Distance from cursor to center Y

    // Adjust movement based on distance from center
    let newX = deltaX * 0.08; // Adjust this multiplier for subtle movement
    let newY = deltaY * 0.08; // Adjust this multiplier for subtle movement

    // Apply smooth transition
    element.style.transition = 'transform 0.2s ease-out';
    element.style.transform = `translate(${newX}px, ${newY}px)`;
}

