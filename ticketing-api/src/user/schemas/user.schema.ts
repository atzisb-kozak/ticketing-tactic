import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type UserDocument = User & Document;

/**
 * User representation to store database
 *
 * @export
 * @class User
 */
@Schema()
export class User {
	@Prop()
	firstname: string;

	@Prop()
	lastname: string;

	@Prop()
	email: string;

	@Prop()
	username: string;

	@Prop()
	password: string;
}

export const UserSchema = SchemaFactory.createForClass(User);