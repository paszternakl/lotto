import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShuffleSvgComponent } from './shuffle-svg.component';

describe('ShuffleSvgComponent', () => {
  let component: ShuffleSvgComponent;
  let fixture: ComponentFixture<ShuffleSvgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShuffleSvgComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShuffleSvgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
