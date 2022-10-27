import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultCalculadoraComponent } from './result-calculadora.component';

describe('ResultCalculadoraComponent', () => {
  let component: ResultCalculadoraComponent;
  let fixture: ComponentFixture<ResultCalculadoraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResultCalculadoraComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResultCalculadoraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
