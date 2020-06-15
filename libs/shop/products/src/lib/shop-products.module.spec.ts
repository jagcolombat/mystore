import { async, TestBed } from '@angular/core/testing';
import { ShopProductsModule } from './shop-products.module';

describe('ShopProductsModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ShopProductsModule],
    }).compileComponents();
  }));

  it('should create', () => {
    expect(ShopProductsModule).toBeDefined();
  });
});
