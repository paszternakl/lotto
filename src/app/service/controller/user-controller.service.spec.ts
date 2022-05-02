
import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { UserControllerService } from './user-controller.service';

describe('UserControllerService', () => {
  let service: UserControllerService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(UserControllerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
