import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { RouterTestingModule } from '@angular/router/testing';

import { CheckLoginGuard } from './check-login.guard';

describe('CheckLoginGuard', () => {
  let guard: CheckLoginGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        HttpClientTestingModule,
        MatSnackBarModule,
    ],
    });
    guard = TestBed.inject(CheckLoginGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
