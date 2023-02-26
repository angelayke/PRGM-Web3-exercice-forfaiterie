import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Grafik2Component } from './grafik2.component';

describe('Grafik2Component', () => {
  let component: Grafik2Component;
  let fixture: ComponentFixture<Grafik2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Grafik2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Grafik2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
