import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BabyDetailComponent } from './baby-detail.component';

describe('BabyDetailComponent', () => {
  let component: BabyDetailComponent;
  let fixture: ComponentFixture<BabyDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BabyDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BabyDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
