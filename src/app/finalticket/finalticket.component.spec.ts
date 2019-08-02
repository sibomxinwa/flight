import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FinalticketComponent } from './finalticket.component';

describe('FinalticketComponent', () => {
  let component: FinalticketComponent;
  let fixture: ComponentFixture<FinalticketComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FinalticketComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FinalticketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
