import { async, TestBed } from '@angular/core/testing';
import { ShopShareDtoModule } from './shop-share-dto.module';

describe('ShopShareDtoModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ShopShareDtoModule],
    }).compileComponents();
  }));

  it('should create', () => {
    expect(ShopShareDtoModule).toBeDefined();
  });
});
