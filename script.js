const toggleButton = document.getElementById('dark-mode-toggle');

const infoButton = document.getElementById('info-button');

// Sun to Moon
const lightsOff = document.getElementById('lights-off');
// Moon to Sun
const lightsOn = document.getElementById('lights-on');

const body = document.body;

const nameLetters = document.querySelectorAll('#name > span');
const nameSounds = document.querySelectorAll('#name-audios > audio');

Array.from(nameLetters).forEach((span, index) => {
  span.addEventListener('click', () => {
    //play audio with index equal to span index from nameLetters[index]
    nameSounds[index].play();
  })
})

document.addEventListener('DOMContentLoaded', function() {

  moreInfo = document.getElementById('more-info');
  const backToTopButton = document.getElementById('back-to-top');


  // Smoothly scroll to the more-info section when pressed
  infoButton.addEventListener('click', function() {
    moreInfo.scrollIntoView({behavior: 'smooth'});
  });

  // Show or hide back to top button based on scroll position
  window.addEventListener('scroll', function() {
    if(this.window.pageYOffset > 0) {
      backToTopButton.classList.add('show');
    } else {
      backToTopButton.classList.remove('show');
    }
  })

  backToTopButton.addEventListener('click', function(e) {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
});

toggleButton.addEventListener('click', () => {
  const current = toggleButton.getAttribute("class");
  if(current == "fas fa-moon"){
    toggleButton.setAttribute("class", "fas fa-sun");
    lightsOn.play();
  }else{
    toggleButton.setAttribute("class", "fas fa-moon");
    lightsOff.play();
  }
  body.classList.toggle('dark-mode');
});



