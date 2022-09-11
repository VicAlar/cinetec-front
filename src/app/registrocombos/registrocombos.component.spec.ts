import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrocombosComponent } from './registrocombos.component';

describe('RegistrocombosComponent', () => {
  let component: RegistrocombosComponent;
  let fixture: ComponentFixture<RegistrocombosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistrocombosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegistrocombosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
