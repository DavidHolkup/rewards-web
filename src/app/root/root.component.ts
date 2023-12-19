import { Component, OnInit } from '@angular/core';
import { Config } from './config';

@Component({
  selector: 'app-root',
  templateUrl: './root.component.html',
  styleUrls: ['./root.component.scss']
})
export class RootComponent implements OnInit {

  config: Config = {
    features: {
      button: {
        ripple: false,
        confetti: 0,
        sound: true,
      },
      background: 0,
      images: true,
    },
    rewards: [],
    tasks: [
      {
        name: "Naucit se otazku",
        description: "Naucit se uplne novou otazku",
        stars: 2,
        image: "../../assets/images/naucitSeOtazku.jpeg"
      }, {
        name: "Zopakovat otazku",
        description: "Zopakovat si otazku, kterou uz jsi prosla.",
        stars: 1,
        image: "../../assets/images/zopakovatOtazku.jpg"
      }, {
        name: "Zkouska A",
        description: "Dostat ze zkousky Acko.",
        stars: 15,
        image: "../../assets/images/zkouskaA.jpeg"
      }, {
        name: "Zkouska B",
        description: "Dostat ze zkousky Bcko.",
        stars: 12,
        image: "../../assets/images/zkouskaB.jpeg"
      }, {
        name: "Zkouska C",
        description: "Dostat ze zkousky Ccko.",
        stars: 8,
        image: "../../assets/images/zkouskaC.png"
      }, {
        name: "Statnice",
        description: "Udelat statnice.",
        stars: 30,
        image: "../../assets/images/statnice.jpeg"
      },
    ],
    starsAvailable: 10,
    starsTotal: 54,
  }

  particlesOptions = {}

  ngOnInit() {
    this.particlesOptions = this.createParticleOptions();
  }

  createParticleOptions() {

  
  return {
    fpsLimit: 60,
    interactivity: {
      events: {
        onhover: {
          enable: this.config.features.background > 6,
          mode: "grab"
        },
        onclick: {
          enable: this.config.features.background > 7,
          mode: "push"
        },
        
      }
    },
    particles: {
      color: {
        value: "#ffffff",
      },
      links: {
        color: "#ffffff",
        distance: 150,
        enable: this.config.features.background > 4,
        opacity: 0.5,
        width: 1,
      },
      move: {
        // direction: MoveDirection.none,
        enable: this.config.features.background > 5,
        random: false,
        speed: 1,
        straight: false,
      },
      number: {
        density: {
          enable: true,
          area: 800,
        },
        value: 30,
      },
      opacity: {
        value: 0.5,
      },
      shape: {
        type: "circle",
      },
      size: {
        value: { min: 1, max: 5 },
      },
    },
    detectRetina: true,
  };
  }
  myParticles = "particles";
  

}
