import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { registerLocaleData, CommonModule } from "@angular/common";
import { Helloworld } from "./app.helloworld.component";
import { AlbumComponent } from "./album/album.component";
import { GalleryComponent } from "./gallery/gallery.component";
import { TraineeComponent } from './trainee/trainee.component';
import { FormComponent } from './form/form.component';
import{FormsModule} from '@angular/forms';
@NgModule({
  declarations: [AppComponent, Helloworld, AlbumComponent, GalleryComponent, TraineeComponent, FormComponent],
  imports: [BrowserModule, AppRoutingModule, CommonModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
