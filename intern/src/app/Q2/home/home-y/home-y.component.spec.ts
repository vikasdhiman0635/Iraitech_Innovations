import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeYComponent } from './home-y.component';

describe('HomeYComponent', () => {
  let component: HomeYComponent;
  let fixture: ComponentFixture<HomeYComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeYComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeYComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
