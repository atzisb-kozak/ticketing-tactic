import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User, UserDocument } from './schemas/user.schema';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UserService {
	constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {}

	async create(createUserDto: CreateUserDto): Promise<User> {
		const user = new this.userModel(createUserDto);
		return user.save();
	}

	async findUser(firstname: string): Promise<User[]> {
		return this.userModel.find({ "firstname": firstname}).exec();
	}

	async updateUser(username: string, updateUserDto:UpdateUserDto): Promise<User> {
		const user = await this.userModel.findOne({ "username": username }).exec()
		const updateUser = Object.assign(user, updateUserDto);
		return updateUser.save();
	}
}
