import { async, TestBed } from '@angular/core/testing';
import { SharedSecurityModule } from './shared-security.module';

describe('SharedSecurityModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [SharedSecurityModule],
    }).compileComponents();
  }));

  it('should create', () => {
    expect(SharedSecurityModule).toBeDefined();
  });
});
