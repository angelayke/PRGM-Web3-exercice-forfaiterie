import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeEtsHotelwhynotComponent } from './liste-ets-hotelwhynot.component';

describe('ListeEtsHotelwhynotComponent', () => {
  let component: ListeEtsHotelwhynotComponent;
  let fixture: ComponentFixture<ListeEtsHotelwhynotComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListeEtsHotelwhynotComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListeEtsHotelwhynotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
