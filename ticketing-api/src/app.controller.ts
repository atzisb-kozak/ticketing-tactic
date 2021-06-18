import { Controller, Get, Post, Body, Response } from '@nestjs/common';
import { Response as Res } from 'express';
import { AppService } from './app.service';

@Controller()
export class AppController {
	constructor(
		private readonly appService: AppService,
	) {}


	@Post('auth/login')
	async login(@Body('username') username, @Body('password') password, @Response() response: Res) {
		const token = await this.appService.login(username, password);
		response.set('Authorization', `Bearer ${token}`);
		response.cookie('access_token', token, {
				expires: new Date(new Date().getTime() + 30 * 1000),
				sameSite: 'strict',
				httpOnly: true,
		})
		response.send({username: username})
	}
}
