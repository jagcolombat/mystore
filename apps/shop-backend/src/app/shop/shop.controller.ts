import { Body, Controller, Delete, Get, HttpCode, Param, Post, Put, Query, Req } from '@nestjs/common';
import { ShopService } from './shop.service';
import { AddProductDto, ProductDto, ProductListDto, ProductSearchDto } from '@ecommerce/shop/share/dto';

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

  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() productDto: ProductDto,
  ): Promise<ProductDto>{
    console.log('update', productDto, id);
    return await this.shopService.updateProduct(id, productDto);
  }

  @Delete(':id')
  @HttpCode(204)
  async destroy(
    @Param('id') id: string,
    @Body() productDto: ProductDto,
  ): Promise<ProductDto>{
    console.log('update', productDto, id);
    return await this.shopService.deleteProduct(id);
  }
}
