import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Grafik1Component } from './grafik1.component';

describe('Grafik1Component', () => {
  let component: Grafik1Component;
  let fixture: ComponentFixture<Grafik1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Grafik1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Grafik1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
