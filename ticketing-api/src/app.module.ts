import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { UserModule } from './user/user.module';
import { set } from 'mongoose'

set('useFindAndModify', false);

@Module({
	imports: [MongooseModule.forRootAsync({
		useFactory: () => ({
			uri: 'mongodb://root:toor@db:27017/ticketing?authSource=admin',
			
		})
	}), UserModule],
	controllers: [AppController],
	providers: [AppService],
})
export class AppModule {}
