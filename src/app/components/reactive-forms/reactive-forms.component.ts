import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ValidationErrors, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-forms',
  templateUrl: './reactive-forms.component.html',
  styleUrls: ['./reactive-forms.component.scss']
})

export class ReactiveFormsComponent {

myFormGroup: FormGroup;

modalAbierto: boolean = false;

openModal(): void {
  this.modalAbierto = true;
}

closeModal(): void {
  this.modalAbierto = false;
}
// get nameControl(){
//   return this.myForm.get('name');
// }

// get lastNameControl(){
//   return this.myForm.get('lastName');
// }

// get emailControl(){
//   return this.myForm.get('email');
// }

// get passwordControl(){
//   return this.myForm.get('password');
// }

constructor(private formBuilder: FormBuilder) {
  this.myFormGroup = this.formBuilder.group({
    name: this.formBuilder.control('', [
      Validators.required,
      Validators.minLength(3)
    ]),
    lastName: this.formBuilder.control('',[
    Validators.required, Validators.minLength(5)
  ]),
    password: this.formBuilder.control('', [
      Validators.minLength(8), 
      Validators.required,
      Validators.pattern(passwordPattern),
    ]),
    email: this.formBuilder.control('', [
      Validators.email,
      Validators.required,
    ])});
 
  }

applyValidationStyleClass(formControlName: string): string {
  const control = this.myFormGroup.get(formControlName);
  if(control?.touched){
    if(control?.invalid){
      return 'is-invalid';
    }else{
      return 'is-valid';
    }
  }
  return '';
}

getErrors(formControlName: string): ValidationErrors | null | undefined {
  return this.myFormGroup.get(formControlName)?.errors;
}

onSubmit(): void {
  if (this.myFormGroup.invalid || !this.modalAbierto) {
    this.myFormGroup.markAllAsTouched();
  }
  else{
    
    const formDataJson = JSON.stringify(this.myFormGroup.value);
    console.log(formDataJson);
  }
 }
}

const passwordPattern = /^(?=.*[A-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]+$/;