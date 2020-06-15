import { async, TestBed } from '@angular/core/testing';
import { ShopDataAccessModule } from './shop-data-access.module';

describe('ShopDataAccessModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ShopDataAccessModule],
    }).compileComponents();
  }));

  it('should create', () => {
    expect(ShopDataAccessModule).toBeDefined();
  });
});
