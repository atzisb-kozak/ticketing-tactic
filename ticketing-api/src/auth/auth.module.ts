import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { UserModule } from 'src/user/user.module';
import { AuthService } from './auth.service';
import { EjwtConstant } from './constant';
import { JwtStrategy } from './stategies/jwt.strategy';

@Module({
	imports: [ UserModule, PassportModule, JwtModule.register({
			secret: EjwtConstant.JWTSECRET,
			signOptions: {
				expiresIn: '60s'
			}
		}) 
	],
	providers: [ AuthService, JwtStrategy ],
	exports: [ AuthService ]
})
export class AuthModule {}
