import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Location } from '@angular/common'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
	registerForm!: FormGroup;
	submitted = false;

	constructor(
		private formBuilder: FormBuilder,
		private location: Location
	) { }

	ngOnInit(): void {
		this.registerForm = this.formBuilder.group({
			firstname: ['', Validators.required],
			lastname: ['', Validators.required],
			email: ['', Validators.compose([Validators.email, Validators.required])],
			username: ['', Validators.required],
			password: ['', Validators.required],
		});
	}

	get form() { return this.registerForm.controls; }


	getErrorMessage() {
		if (this.form.username.hasError('required')) {
			return 'You must enter a value';
		}
		return '';
	}

	back(): void {
    this.location.back()
  }

	async onSubmit(){
		this.submitted = true;
		if (this.registerForm.invalid) {
			console.log('erreur')
		}else {
			console.log({
				username: this.registerForm.controls.username.value,
				password: this.registerForm.controls.password.value
			})
		}
	}

	hide = true;
}
