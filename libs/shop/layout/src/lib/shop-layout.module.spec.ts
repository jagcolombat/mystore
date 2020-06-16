import { async, TestBed } from '@angular/core/testing';
import { ShopLayoutModule } from './shop-layout.module';

describe('ShopLayoutModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ShopLayoutModule],
    }).compileComponents();
  }));

  it('should create', () => {
    expect(ShopLayoutModule).toBeDefined();
  });
});
