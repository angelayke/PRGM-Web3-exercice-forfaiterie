import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionForfaitsComponent } from './gestion-forfaits.component';

describe('GestionForfaitsComponent', () => {
  let component: GestionForfaitsComponent;
  let fixture: ComponentFixture<GestionForfaitsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GestionForfaitsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GestionForfaitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
