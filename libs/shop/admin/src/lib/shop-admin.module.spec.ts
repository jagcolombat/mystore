import { async, TestBed } from '@angular/core/testing';
import { ShopAdminModule } from './shop-admin.module';

describe('ShopAdminModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ShopAdminModule],
    }).compileComponents();
  }));

  it('should create', () => {
    expect(ShopAdminModule).toBeDefined();
  });
});
