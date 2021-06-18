import { User } from "src/user/schemas/user.schema";

export class CreateTicketDto {
	title: string;
	onwer: User;
	tags: string[];
	type: string;
	severity: string;
	priority: string;
	details: string;
	file: string;
	assigned: User[];
	watchers: User[];
}