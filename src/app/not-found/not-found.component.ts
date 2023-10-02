import { Component, OnInit } from '@angular/core';
import { NavbarService } from '../services/navbar.service';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
})
export class NotFoundComponent implements OnInit {
  constructor(private nav: NavbarService) {}

  ngOnInit(): void {
    this.nav.hide();
  }
}
