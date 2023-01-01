import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeEtsHoteldeglaceComponent } from './liste-ets-hoteldeglace.component';

describe('ListeEtsHoteldeglaceComponent', () => {
  let component: ListeEtsHoteldeglaceComponent;
  let fixture: ComponentFixture<ListeEtsHoteldeglaceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListeEtsHoteldeglaceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListeEtsHoteldeglaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
