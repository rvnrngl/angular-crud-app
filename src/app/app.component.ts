import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NavbarService } from './services/navbar.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  isNotFound: boolean = false;
  constructor(
    public nav: NavbarService,
    private router: Router,
  ) {}
}
