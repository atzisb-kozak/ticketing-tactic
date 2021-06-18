import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
	loginForm!: FormGroup;
	submitted = false;

	constructor(
		private formBuilder: FormBuilder
	) { }

	ngOnInit(): void {
		this.loginForm = this.formBuilder.group({
			username: ['', Validators.required],
			password: ['', Validators.required]
		});
	}

	get form() { return this.loginForm.controls; }


	getErrorMessage() {
		if (this.form.username.hasError('required')) {
			return 'You must enter a value';
		}
		return '';
	}

	async onSubmit(){
		this.submitted = true;
		if (this.loginForm.invalid) {
			console.log('erreur')
		}else {
			console.log({
				username: this.loginForm.controls.username.value,
				password: this.loginForm.controls.password.value
			})
		}
	}

	hide = true;
}
