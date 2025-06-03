import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoadingService {

  isLoading: boolean = false;

  constructor() { }

  setLoading(isLoading:boolean):void {
    this.isLoading = isLoading;
  }
}
