import { Component, OnInit } from '@angular/core';
import {AbstractControl, FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-name-editor',
  templateUrl: './name-editor.component.html',
  styleUrls: ['./name-editor.component.scss']
})
// https://www.kiltandcode.com/2020/08/13/show-validation-error-messages-for-reactive-forms-in-angular-9/
export class NameEditorComponent implements OnInit {
  registerForm!: FormGroup;
  submitted=false;
  constructor(private formBuilder:FormBuilder) { }

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group(
      {
      nombre:['',[Validators.required,Validators.minLength(3),
        Validators.pattern(/^([A-Za-z áÁéÉíÍóÓúÚñÑüÜ]+)$/)]
      ],
      genero:['',Validators.required]
      })

  }
  get f(): { [key: string]: AbstractControl } {
    return this.registerForm .controls;
  }
  onSubmit(): void {
    this.submitted = true;

    if (this.registerForm.invalid) {
      return;
    }
    console.log(JSON.stringify(this.registerForm.value, null, 2));
  }
  onReset(): void {
    this.submitted = false;
    this.registerForm.reset();
  }

  get nombre() {
    return this.registerForm.get('nombre');
 }
 get genero() {
  return this.registerForm.get('genero');
}


}
