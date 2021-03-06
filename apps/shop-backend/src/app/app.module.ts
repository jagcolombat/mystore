import { Module, DynamicModule } from '@nestjs/common';

import { ConnectionOptions } from 'typeorm';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ShopModule } from './shop/shop.module';
import { ProductEntity } from './shop/entity/product.entity';
import { UserEntity } from './users/entity/user.entity';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth';
import { AppController } from './app.controller';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { environment } from '@env/shop-backend/environment';

@Module({
  controllers: [AppController],
  imports: [
    ShopModule,
    UsersModule,
    AuthModule,
    TypeOrmModule.forRoot({
      "type": "mysql",
      "port": environment.dbPort,
      "host": environment.dbHost,
      "username": environment.dbUser,
      "password": environment.dbPass,
      "database": environment.dbDB,
      "synchronize": true,
      "logging": true,
      "entities": [
        ProductEntity,
        UserEntity
      ]
    }),
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'shop'),
      exclude: ['/shop-backend*']
    })
  ]
})
export class AppModule {
  /*static forRoot(connOptions: ConnectionOptions): DynamicModule {
    //connOptions.entities = [ProductEntity];
    return {
      module: AppModule,
      controllers: [],
      imports: [ShopModule, TypeOrmModule.forRoot( connOptions )],
      providers: []
    }
  }*/
}
