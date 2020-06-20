import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CruProductComponent } from './cru-product.component';

describe('CruProductComponent', () => {
  let component: CruProductComponent;
  let fixture: ComponentFixture<CruProductComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CruProductComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CruProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
