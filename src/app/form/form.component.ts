import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-form",
  templateUrl: "./form.component.html",
  styleUrls: ["./form.component.scss"]
})
export class FormComponent implements OnInit {
  name = "john doe";
  email = "email@email.com";
  formValue;
  register=[];

  constructor() {}

  ngOnInit() {
    // setTimeout(function() {
    //   this.name = "newrucky";
    // }, 10000);
    // setTimeout(function() {
    //   this.name = "newrucky2";
    // }, 30000);
    // setTimeout(function() {
    //   this.name = "newrucky";
    // }, 50000);
  }

  onSubmit(f) {
    console.log(f.value);
    console.log(this.email);
    this.formValue = f.value;
    this.register.push(this.formValue);
    f.reset();
  }
}
