import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExercicioHelloWorldComponent } from './exercicio-hello-world.component';

describe('ExercicioHelloWorldComponent', () => {
  let component: ExercicioHelloWorldComponent;
  let fixture: ComponentFixture<ExercicioHelloWorldComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExercicioHelloWorldComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExercicioHelloWorldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
