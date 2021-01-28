import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BottomRigthComponent } from './bottom-rigth.component';

describe('BottomRigthComponent', () => {
  let component: BottomRigthComponent;
  let fixture: ComponentFixture<BottomRigthComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BottomRigthComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BottomRigthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
