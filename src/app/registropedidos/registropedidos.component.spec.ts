import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistropedidosComponent } from './registropedidos.component';

describe('RegistropedidosComponent', () => {
  let component: RegistropedidosComponent;
  let fixture: ComponentFixture<RegistropedidosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistropedidosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegistropedidosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
