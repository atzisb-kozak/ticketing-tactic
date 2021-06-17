import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { TicketModule } from './ticket/ticket.module';
import { FilesModule } from './files/files.module';
import { AuthModule } from './auth/auth.module';

@Module({
	imports: [MongooseModule.forRootAsync({
		useFactory: () => ({
			uri: 'mongodb://root:toor@db:27017/ticketing?authSource=admin',
			
		})
	}), TicketModule, FilesModule, AuthModule],
	controllers: [AppController],
	providers: [AppService],
})
export class AppModule {}
