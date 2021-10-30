import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TechtransferComponent } from './techtransfer.component';

describe('TechtransferComponent', () => {
  let component: TechtransferComponent;
  let fixture: ComponentFixture<TechtransferComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TechtransferComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TechtransferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
