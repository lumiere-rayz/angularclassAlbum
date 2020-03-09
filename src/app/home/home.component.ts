import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"]
})
export class HomeComponent implements OnInit {
  name = `Tosin-Omotayo`;
  show = `ball-show`;
  activeTrainee;
  isTemplateDriven = false;
  showAlbum = false;
  academy = [
    {
      name: "tosin",
      image: "sf.jpg",
      complexion: "black",
      hobbies: ["dance", "talk"]
    },
    {
      name: "lola",
      image: "sf.jpg",
      complexion: "yellow",
      hobbies: ["swim", "wyne"]
    },
    {
      name: "wale",
      image: "sf.jpg",
      complexion: "fair",
      hobbies: ["code", "code"]
    },
    {
      name: "charlse",
      image: "sf.jpg",
      complexion: "black",
      hobbies: ["drive", "talk"]
    }
  ];
  constructor() {}

  ngOnInit() {}

  traineeListener(trainee) {
    console.log(trainee);
    this.activeTrainee = trainee;
  }
}
