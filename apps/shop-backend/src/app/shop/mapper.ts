import {ProductEntity} from './entity/product.entity';
import {ProductDto} from '@ecommerce/shop/share/dto';

export const toProductDto = (data: ProductEntity): ProductDto => {
  const {id, name, price, description} = data;

  const productDto: ProductDto = {id, name, price, description};

  return productDto;
};
