import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('f') testForm: NgForm;
  defaultQuestion = 'pet';
  answer = '';
  genders = ['male', 'female'];
  submitted = false;
  submittedData = {
    userData: {
      username: '',
      email: ''
    },
    secretQuestion: '',
    answer: '',
    gender: ''
  };

  suggestUserName() {
    const suggestedName = 'Superuser';
    // this.testForm.setValue({
    //   userData: {
    //     username: suggestedName,
    //     email: '',
    //   },
    //   secret: 'pet',
    //   questionAnswer: '',
    //   gender: 'female'
    // });

    this.testForm.form.patchValue({
      userData: {
        username: suggestedName
      }
    });
  }

  // onSubmit(form: NgForm) {
  //   console.log(form);
  // }
  onSubmit() {
    this.submittedData.userData.username = this.testForm.value.userData.username;
    this.submittedData.userData.email = this.testForm.value.userData.email;
    this.submittedData.secretQuestion = this.testForm.value.secret;
    this.submittedData.answer = this.testForm.value.answer;
    this.submittedData.gender = this.testForm.value.gender;
    this.submitted = true;
    this.testForm.reset();
  }
}
