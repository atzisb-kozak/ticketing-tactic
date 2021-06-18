import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { EjwtConstant } from 'src/auth/constant';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
	constructor() {
		super({
			jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
			ingoreExpiration: false,
			secretOrKey: EjwtConstant.JWTSECRET,
		});
	}

	async validate(payload: any) {
		return { _id: payload.sub, username: payload.username };
	}
}