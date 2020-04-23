import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoaderService {

  constructor() { }

  isLoading = new Subject<boolean>();

  isLoadingEnable = true;

  show() {
    if(this.isLoadingEnable) {
      this.isLoading.next(true);
    }
  }

  hide() {
    this.isLoading.next(false);
  }

  disableLoading() {
    this.isLoadingEnable = false;
  }

  enableLoading() {
    this.isLoadingEnable = true;
  }
}
