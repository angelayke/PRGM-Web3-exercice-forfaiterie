import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForfaitMoinsCentComponent } from './forfait-moins-cent.component';

describe('ForfaitMoinsCentComponent', () => {
  let component: ForfaitMoinsCentComponent;
  let fixture: ComponentFixture<ForfaitMoinsCentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ForfaitMoinsCentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ForfaitMoinsCentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
