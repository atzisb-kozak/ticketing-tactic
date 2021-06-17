import { IsString } from 'class-validator';

/**
 * Data Transfer Object for creating user in database
 *
 * @export
 * @class CreateUserDto
 * 
 */
export class CreateUserDto {

	@IsString()
	firstname: string;

	@IsString()
	lastname: string;

	@IsString()
	email: string;

	@IsString()
	username: string;

	@IsString()
	password: string;
	
}