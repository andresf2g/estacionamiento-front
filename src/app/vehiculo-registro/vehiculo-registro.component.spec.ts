import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VehiculoRegistroComponent } from './vehiculo-registro.component';

describe('VehiculoRegistroComponent', () => {
  let component: VehiculoRegistroComponent;
  let fixture: ComponentFixture<VehiculoRegistroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VehiculoRegistroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VehiculoRegistroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
