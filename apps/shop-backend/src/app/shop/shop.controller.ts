import { Body, Controller, Get, Post, Query, Req } from '@nestjs/common';
import { ShopService } from './shop.service';
import { AddProductDto } from './dto/product.create.dto';
import { ProductDto } from './dto/product.dto';
import { ProductListDto } from './dto/product.list.dto';
import { SearchProductDto } from './dto/search-product.dto';

@Controller('products')
export class ShopController {
  constructor(private readonly shopService: ShopService){}

  @Get()
  async findAll(@Query() query: SearchProductDto): Promise<ProductListDto>{
    const products = await this.shopService.searchProducts(query.term || '');
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
