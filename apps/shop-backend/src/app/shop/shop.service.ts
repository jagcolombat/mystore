import { InjectRepository } from '@nestjs/typeorm';
import { ProductEntity } from './entity/product.entity';
import { Repository } from 'typeorm';
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { toProductDto } from './mapper';
import { AddProductDto, ProductDto } from '@ecommerce/shop/share/dto';
@Injectable()
export class ShopService {
  constructor(
    @InjectRepository(ProductEntity)
    private readonly productRepo: Repository<ProductEntity>
  ){}
  // Search products
  async searchProducts(term: string): Promise<ProductDto[]> {
    const products = await this.productRepo.find({
      where: `name LIKE '%${term}%'`
    });

    return products.map(product => toProductDto(product));
  }

  // Get all products
  async getAllProducts(): Promise<ProductDto[]> {

    const products = await this.productRepo.find();
    return products.map(product => toProductDto(product));
  }
  // Add product
  async addProduct(addProductDto: AddProductDto): Promise<ProductDto> {
    const {name, price, description} = addProductDto;

    const product: ProductEntity = await this.productRepo.create({
      name, price, description
    });

    await this.productRepo.save(product);
    return toProductDto(product);
  }
  // Update product
  async updateProduct(id: string, productDto: ProductDto): Promise<ProductDto> {
    const {name, price, description} = productDto;
    let product: ProductEntity = await this.productRepo.findOne({
      where: { id }
    });

    if(!product){
      throw new HttpException(`Product doesn't exist`, HttpStatus.BAD_REQUEST);
    }

    product = { id, name, price, description};

    await this.productRepo.update({id}, product);
    return toProductDto(product);
  }
  // Delete product
  async deleteProduct(id: string): Promise<ProductDto> {

    const product: ProductEntity = await this.productRepo.findOne({
      where: { id }
    });

    if(!product){
      throw new HttpException(`Product doesn't exist`, HttpStatus.BAD_REQUEST);
    }

    await this.productRepo.delete({id});
    return toProductDto(product);
  }
}
