import { async, TestBed } from '@angular/core/testing';
import { SharedApiModule } from './shared-api.module';

describe('SharedApiModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [SharedApiModule],
    }).compileComponents();
  }));

  it('should create', () => {
    expect(SharedApiModule).toBeDefined();
  });
});
