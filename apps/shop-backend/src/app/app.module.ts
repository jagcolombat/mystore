import { Module, DynamicModule } from '@nestjs/common';

import { ConnectionOptions } from 'typeorm';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ShopModule } from './shop/shop.module';
import { ProductEntity } from './shop/entity/product.entity';

@Module({
  imports: [
    ShopModule,
    TypeOrmModule.forRoot({
      "type": "mysql",
      "host": "localhost",
      "port": 3306,
      "username": "shop",
      "password": "sh0p",
      "database": "shop",
      "synchronize": true,
      "logging": true,
      "entities": [
        ProductEntity
      ]
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
