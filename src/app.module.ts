import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Connection } from 'typeorm';

//Modules
import { MessageModule } from './components/message/message.module';


@Module({
  controllers: [AppController],
  providers: [AppService],
  imports: [
    MessageModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: '127.0.0.1',
      port: 8889,
      username: 'root',
      password: 'root',
      database: 'maxi-chat-react',
      entities: [__dirname + '/entity/**.entity.ts'],
      synchronize: true,
    })
  ],
})
export class AppModule {
  constructor(private readonly connection: Connection) {}
}
