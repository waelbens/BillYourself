import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BillInputComponent } from './bill-input.component';

describe('BillInputComponent', () => {
  let component: BillInputComponent;
  let fixture: ComponentFixture<BillInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BillInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BillInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
