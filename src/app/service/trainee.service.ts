import { Injectable } from "@angular/core";
import { ITrainee } from "../model";
import { HttpClient } from "@angular/common/http";
import { environment } from "src/environments/environment.prod";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class TraineeService {
  trainees: ITrainee[] = [];
  constructor(private httpclient: HttpClient) {}

  addTrainee(trainee: ITrainee): Observable<any> {
    return this.httpclient.post(
      environment.databaseURL + "/trainees.json",
      trainee
    );
  }

  getTrainees(): Array<ITrainee> {
    return this.trainees;
  }
}
