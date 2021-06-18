import { Injectable } from '@nestjs/common';
import { UserService } from 'src/user/user.service';
import { JwtService } from '@nestjs/jwt';
import { compare } from 'bcrypt';

@Injectable()
export class AuthService {
	constructor(
		private readonly userService: UserService,
		private readonly jwtService: JwtService,
	) {}

	async validateUser(username: string, password: string): Promise<any> {
		const user = await this.userService.findUserByUsername(username);
		const wrightPassword = await compare(password, user.password);
		if (user && wrightPassword) {
			const { password, ...result } = user;
			return result;
		}
		return null;
	}

	async login(user: any) {
		const payload = { username: user.username, sub: user._id };
		return {
			access_token: this.jwtService.sign(payload),
		};
	}
}
