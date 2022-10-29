import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupeForfaitsComponent } from './groupe-forfaits.component';

describe('GroupeForfaitsComponent', () => {
  let component: GroupeForfaitsComponent;
  let fixture: ComponentFixture<GroupeForfaitsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GroupeForfaitsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GroupeForfaitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
