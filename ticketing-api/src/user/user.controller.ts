import { Body, Controller, Get, Param, Patch, Post } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './schemas/user.schema';
import { UserService } from './user.service';

@Controller('user')
export class UserController {

	constructor(private readonly userService: UserService){}

	@Post('create')
	async create(@Body() createUserDto: CreateUserDto): Promise<User> {
		return this.userService.create(createUserDto);
	}

	@Get(':firstname')
	async findUser(@Param('firstname') firstname: string): Promise<User[]> {
		return this.userService.findUser(firstname);
	}

	@Patch(':username')
	async updateUser(
		@Param('username') username: string,
		@Body() updateUserDto: UpdateUserDto): Promise<User> {
		
			return this.userService.updateUser(username, updateUserDto);
	}
}
