import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PuzalComponent } from './puzal.component';

describe('PuzalComponent', () => {
  let component: PuzalComponent;
  let fixture: ComponentFixture<PuzalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PuzalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PuzalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
