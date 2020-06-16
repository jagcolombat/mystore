import { async, TestBed } from '@angular/core/testing';
import { ShopUiModule } from './shop-ui.module';

describe('ShopUiModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ShopUiModule],
    }).compileComponents();
  }));

  it('should create', () => {
    expect(ShopUiModule).toBeDefined();
  });
});
