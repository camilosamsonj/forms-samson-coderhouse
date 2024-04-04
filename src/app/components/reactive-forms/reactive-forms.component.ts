import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ValidationErrors, Validators } from '@angular/forms';
@Component({
  selector: 'app-reactive-forms',
  templateUrl: './reactive-forms.component.html',
  styleUrls: ['./reactive-forms.component.scss']
})
export class ReactiveFormsComponent {

myForm = 
this.formBuilder.group({
        name: this.formBuilder.control('', Validators.required),
        lastName: this.formBuilder.control('', Validators.required),
        password: this.formBuilder.control('',  [Validators.minLength(5), Validators.required]),
        email: this.formBuilder.control('', [Validators.email, Validators.required, Validators.pattern("[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}")])});
    



get nameControl(){
  return this.myForm.get('name');
}

get lastNameControl(){
  return this.myForm.get('lastName');
}

get emailControl(){
  return this.myForm.get('email');
}

get passwordControl(){
  return this.myForm.get('password');
}

constructor(private formBuilder: FormBuilder) {
    
  }
  


}
