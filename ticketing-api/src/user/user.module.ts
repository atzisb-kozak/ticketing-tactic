import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { User, UserDocument, UserSchema } from './schemas/user.schema';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { hash } from 'bcrypt';

@Module({
	imports: [MongooseModule.forFeatureAsync(
		[
			{
				name: User.name,
				useFactory: function() {
					const schema = UserSchema;
					schema.pre<UserDocument>('save', async function(next) {
						if (!this.isModified('password')){
							return next();
						}
						this.password = await hash(this.password, 10);
					});
					return schema;
				}
			}
		])
	],
	controllers: [ UserController ],
	providers: [ UserService ],
	exports: [ UserService ],
})
export class UserModule {}
