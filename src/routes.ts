import { Routes } from "@angular/router";
import { ReactiveFormComponent } from "./app/reactive-form/reactive-form.component";
import { FormComponent } from "./app/form/form.component";
import { HomeComponent } from "./app/home/home.component";
import { NewTraineeComponent } from "./app/new-trainee/new-trainee.component";
export const routes: Routes = [
  {
    path: "",
    redirectTo: "home",
    pathMatch: "full"
  },
  {
    path: "home",
    component: HomeComponent
  },
  {
    path: "reactiveform",
    component: ReactiveFormComponent
  },
  {
    path: "form",
    component: FormComponent
  },
  {
    path: "trainee/new",
    component: NewTraineeComponent
  },
  {
    path: "**",
    component: ReactiveFormComponent
  }
];
