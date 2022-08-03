import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { RouterTestingModule } from '@angular/router/testing';

import { CheckSessionGuard } from './check-session.guard';

describe('CheckSessionGuard', () => {
  let guard: CheckSessionGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        HttpClientTestingModule,
        MatSnackBarModule,
    ],
    });
    guard = TestBed.inject(CheckSessionGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
