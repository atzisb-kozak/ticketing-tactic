import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { User } from "src/user/schemas/user.schema";
import * as mongoose from 'mongoose';

export type TicketDocument = Ticket & mongoose.Document;

@Schema({
	timestamps: true,
})
export class Ticket {
	@Prop()
	title: string;

	@Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'User'})
	owner: User;

	@Prop([String])
	tags: string[];
	
	@Prop()
	details: string;

	@Prop()
	type: string;

	@Prop()
	severity: string;

	@Prop()
	priority: string;

	@Prop()
	file: string;

}

export const TicketSchema = SchemaFactory.createForClass(Ticket);