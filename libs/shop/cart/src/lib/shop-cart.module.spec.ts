import { async, TestBed } from '@angular/core/testing';
import { ShopCartModule } from './shop-cart.module';

describe('ShopCartModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ShopCartModule],
    }).compileComponents();
  }));

  it('should create', () => {
    expect(ShopCartModule).toBeDefined();
  });
});
