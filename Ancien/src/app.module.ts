import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Connection } from 'typeorm';

//Modules
import { UsersModule } from './components/users/users.module';
import { GroupModule } from './components/group/group.module';
import { FriendModule } from './components/friend/friend.module';
import { MessageModule } from './components/message/message.module';
import { UserGroupModule } from './components/userGroup/userGroup.module';


@Module({
  controllers: [AppController],
  providers: [AppService],
  imports: [
    UsersModule,
    GroupModule,
    FriendModule,
    MessageModule,
    UserGroupModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: '127.0.0.1',
      port: 8889,
      username: 'root',
      password: 'root',
      database: 'maxi-chat',
      entities: [__dirname + '/entity/**.entity.ts'],
      synchronize: true,
    })
  ],
})
export class AppModule {
  constructor(private readonly connection: Connection) {}
}
