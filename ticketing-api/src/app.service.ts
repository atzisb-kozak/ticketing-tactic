import { Injectable } from '@nestjs/common';
import { AuthService } from './auth/auth.service';

@Injectable()
export class AppService {

	constructor(private readonly authService: AuthService) {}

	async login(username: string, password: string): Promise<any>{
		const user = await this.authService.validateUser(username, password);
		return this.authService.login(user);
	}
}
