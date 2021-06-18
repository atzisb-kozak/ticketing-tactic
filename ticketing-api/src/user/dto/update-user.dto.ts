import { IsString } from "class-validator";

export class UpdateUserDto {

	@IsString()
	firstname?: string;

	@IsString()
	lastname?: string;

	@IsString()
	email?: string;
	
	@IsString()
	password?: string;
}