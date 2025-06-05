import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoadingService {

  isLoading = signal(false);

  constructor() { }

  setLoading(isLoading:boolean):void {
    this.isLoading.set(isLoading);
  }
}
