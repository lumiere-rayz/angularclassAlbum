import { Injectable } from "@angular/core";
import { ITrainee } from "../model";
import { HttpClient } from "@angular/common/http";
import { environment } from "src/environments/environment.prod";
import { Observable } from "rxjs";
import { FirebaseService } from "../firebase.service";

@Injectable({
  providedIn: "root",
})
export class TraineeService {
  trainees: ITrainee[] = [
    {
      name: "Default Name",

      complexion: "Black",
      hobbies: [],
      gender: "m",
      dateofbirth: "",
      almamata: "",
      discipline: "",
      id: 0,
      registereddate: new Date(),

      email: "",
      telephone: "",
    },
  ];
  constructor(
    private httpclient: HttpClient,
    private firebaseService: FirebaseService
  ) {}

  addTrainee(trainee: ITrainee) {
    this.firebaseService
      .getFireStore()
      .collection("students")
      .add(trainee)
      .then((docRef) => {
        console.log(docRef);
        console.log("Document written with ID: ", docRef.id);
      })
      .catch((error) => {
        console.error("Error adding document: ", error);
      });
  }

  getTrainees(): Array<ITrainee> {
    return this.trainees;
  }
}
