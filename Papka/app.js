particlesJS('particles-js',
  
  {
    "particles": { 
      "number": {
        "value": 100,
        "density": {
          "enable": true,
          "value_area":300
        }
      },
      "color": {
        "value": "#ff5757", //random // #FFFFFF // #FF69B4
      },
      "shape": {
        "type": "star", // triangle edge triangle polygon star 
        "stroke": {
          "width": 2,
          "color": "#random"
        },
        "polygon": {
          "nb_sides": 5
        }
      },
      "opacity": {
        "value": 30,
        "random": false,
        "anim": {
          "enable": false,
          "speed": 3,
          "opacity_min": 100,
          "sync": false
        }
      },
      "size": {
        "value": 8,
        "random": true,
        "anim": {
          "enable": false,
          "speed": 50,
          "size_min": 2,
          "sync": false
        }
      },
      "line_linked": {
        "enable": true,
        "distance": 30,
        "color": "#FFFFFF",
        "opacity": 10,
        "width": 2
      },
      "move": {
        "enable": true,
        "speed": 30,
        "direction": "bottom-left", // none top top-right right bottom-right bottom bottom-left left top-left
        "random": true,
        "straight": true,
        "out_mode": "bounce", // out bounce
        "attract": {
          "enable": true,
          "rotateX": 3000,
          "rotateY": 1
        }
      }
    },
  "interactivity": {
    "detect_on": "canvas",
    "events": {
      "onhover": {
        "enable": false,
        "mode": "grab" //grab bubble repulse
      },
      "onclick": {
        "enable": true,
        "mode": "bubble" // push remove bubble repulse
      },
      "resize": true
    },
    "modes": {
      "grab": {
        "distance": 70,
        "line_linked": {
          "opacity": 3
        }
      },
      "bubble": {
        "distance": 200,
        "size": 24,
        "duration": 0.3,
        "opacity": 1,
        "speed": 22
      },
      "repulse": {
        "distance": 100,
        "duration": 0.4
      },
      "push": {
        "particles_nb": 9
      },
      "remove": {
        "particles_nb": 26
      }
    }
  }
  }

);