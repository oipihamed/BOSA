import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfigCategoriasComponent } from './config-categorias.component';

describe('ConfigCategoriasComponent', () => {
  let component: ConfigCategoriasComponent;
  let fixture: ComponentFixture<ConfigCategoriasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConfigCategoriasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConfigCategoriasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
