import { TestBed } from '@angular/core/testing';

import { LoaderService } from './loader.service';

describe('LoaderService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LoaderService = TestBed.get(LoaderService);
    expect(service).toBeTruthy();
  });

  it('loading is not enabled', () => {
    const service: LoaderService = TestBed.get(LoaderService);
    service.disableLoading();
    expect(service.isLoadingEnable).toBeFalsy();
  });

  it('loading is enabled', () => {
    const service: LoaderService = TestBed.get(LoaderService);
    service.enableLoading();
    expect(service.isLoadingEnable).toBeTruthy();
  });
});
