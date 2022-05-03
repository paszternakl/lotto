import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrashSvgComponent } from './trash-svg.component';

describe('TrashSvgComponent', () => {
  let component: TrashSvgComponent;
  let fixture: ComponentFixture<TrashSvgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrashSvgComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TrashSvgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
