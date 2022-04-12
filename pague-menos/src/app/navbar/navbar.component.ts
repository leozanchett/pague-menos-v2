import { Component, OnInit } from '@angular/core';
import { NavigateService } from '../services/navigate.service';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(
    public navigateService: NavigateService
  ) {  }

  ngOnInit(): void {
  }
}
