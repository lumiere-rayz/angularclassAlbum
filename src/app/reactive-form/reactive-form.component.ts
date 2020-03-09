import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: "app-reactive-form",
  templateUrl: "./reactive-form.component.html",
  styleUrls: ["./reactive-form.component.scss"]
})
export class ReactiveFormComponent implements OnInit {
  myForm: FormGroup;
  constructor(private fb: FormBuilder) {
    this.myForm = this.fb.group({
      name: ["", Validators.required],
      email: ["", Validators.email],
      gender: ["", Validators.required],
      state: ["", Validators.required],
      bio: [""]
    });
  }

  ngOnInit() {
    this.myForm.statusChanges.subscribe(changes => {
      console.log(changes);
    });
    this.myForm.valueChanges.subscribe(changes => {
      console.log(changes);
    });
  }

  done(myForm: FormGroup) {
    console.log(myForm.value);
    this.myForm.patchValue({ name: "emmanuel" });
  }
}
