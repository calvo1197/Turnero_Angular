import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KioskoComponent } from './kiosko.component';

describe('KioskoComponent', () => {
  let component: KioskoComponent;
  let fixture: ComponentFixture<KioskoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KioskoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KioskoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
