import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { RouterTestingModule } from '@angular/router/testing';

import { ProdOfertaService } from './prod-oferta.service';

describe('ProdOfertaService', () => {
  let service: ProdOfertaService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        FormsModule,
        ReactiveFormsModule,
        RouterTestingModule,
        HttpClientTestingModule,
        MatSnackBarModule,
      ] 

    });
    service = TestBed.inject(ProdOfertaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
