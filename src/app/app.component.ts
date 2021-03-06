import { Component } from "@angular/core";
import { TraineeService } from "./service/trainee.service";
import { ITrainee } from "./model";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
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

  traineeListener(trainee) {
    console.log(trainee);
    this.activeTrainee = trainee;
  }
}
