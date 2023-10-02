import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class NavbarService {
  isVisible: boolean = true;

  constructor() {}

  hide(): void {
    setTimeout(() => {
      this.isVisible = false;
    }, 0);
  }

  show(): void {
    setTimeout(() => {
      this.isVisible = true;
    }, 0);
  }

  toggle(): void {
    this.isVisible = !this.isVisible;
  }
}
