import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { RouterTestingModule } from '@angular/router/testing';

import { CheckRolGuard } from './check-rol.guard';

describe('CheckLoginGuard', () => {
  let guard: CheckRolGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        HttpClientTestingModule,
        MatSnackBarModule,
    ],
    });
    guard = TestBed.inject(CheckRolGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
