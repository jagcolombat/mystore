import { async, TestBed } from '@angular/core/testing';
import { ShopUtilsModule } from './shop-utils.module';

describe('ShopUtilsModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ShopUtilsModule],
    }).compileComponents();
  }));

  it('should create', () => {
    expect(ShopUtilsModule).toBeDefined();
  });
});
