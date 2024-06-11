import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { LinksModule } from './links/links.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost/nest'),
    LinksModule,
  ],
})
export class AppModule {}
