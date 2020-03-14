import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { registerLocaleData, CommonModule } from "@angular/common";
import { Helloworld } from "./app.helloworld.component";
import { AlbumComponent } from "./album/album.component";
import { GalleryComponent } from "./gallery/gallery.component";
import { TraineeComponent } from "./trainee/trainee.component";
import { FormComponent } from "./form/form.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { ReactiveFormComponent } from "./reactive-form/reactive-form.component";
import { RouterModule } from "@angular/router";
import { routes } from "src/routes";
import { HomeComponent } from "./home/home.component";
import { PagenotfoundComponent } from "./pagenotfound/pagenotfound.component";
import { NewTraineeComponent } from "./new-trainee/new-trainee.component";
import { UpdateTraineeComponent } from "./update-trainee/update-trainee.component";
import { DeleteTraineeComponent } from "./delete-trainee/delete-trainee.component";
import { ViewTraineeComponent } from "./view-trainee/view-trainee.component";
@NgModule({
  declarations: [
    AppComponent,
    Helloworld,
    AlbumComponent,
    GalleryComponent,
    TraineeComponent,
    FormComponent,
    ReactiveFormComponent,
    HomeComponent,
    PagenotfoundComponent,
    NewTraineeComponent,
    UpdateTraineeComponent,
    DeleteTraineeComponent,
    ViewTraineeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
