import { TestBed } from '@angular/core/testing';
import { ToastService } from './toast.service';

describe('ToastServiceService', () => {
  let service: ToastService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ToastService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should be add toast to toasts', () => {
    service.show('test toast')
    expect(service.toasts.length).toEqual(1);
  });

  it('should be remove toast to toasts', () => {
    service.toasts.push('1');
    service.remove('1') 
    expect(service.toasts.length).toEqual(0);
  });

  it('should be clear toasts', () => {
    service.show('1');
    service.clear();
    expect(service.toasts.length).toEqual(0);
  });
});
