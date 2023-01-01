import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeEtsPourvoiriedulacComponent } from './liste-ets-pourvoiriedulac.component';

describe('ListeEtsPourvoiriedulacComponent', () => {
  let component: ListeEtsPourvoiriedulacComponent;
  let fixture: ComponentFixture<ListeEtsPourvoiriedulacComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListeEtsPourvoiriedulacComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListeEtsPourvoiriedulacComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
