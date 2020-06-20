import { Body, Controller, Get, Post, Query, Req } from '@nestjs/common';
import { ShopService } from './shop.service';
import { AddProductDto } from './dto/product.create.dto';
import { ProductDto } from './dto/product.dto';
import { ProductListDto } from './dto/product.list.dto';
import { ProductSearchDto } from './dto/product.search.dto';

@Controller('product')
export class ShopController {
  constructor(private readonly shopService: ShopService){}

  @Get()
  async find(@Query() query: ProductSearchDto): Promise<ProductListDto>{
    const products = query.term ?
      await this.shopService.searchProducts(query.term || '') :
      await this.shopService.getAllProducts();
    return { products };
  }

  @Post()
  async create(
    @Body() addProductDto: AddProductDto,
    @Req() req: any
  ): Promise<ProductDto>{
    console.log('create', addProductDto);
    return await this.shopService.addProduct(addProductDto);
  }
}
