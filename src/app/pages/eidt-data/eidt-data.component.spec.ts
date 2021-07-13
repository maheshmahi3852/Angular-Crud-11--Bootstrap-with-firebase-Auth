import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EidtDataComponent } from './eidt-data.component';

describe('EidtDataComponent', () => {
  let component: EidtDataComponent;
  let fixture: ComponentFixture<EidtDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EidtDataComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EidtDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
