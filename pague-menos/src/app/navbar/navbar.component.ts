import { Component, OnInit } from '@angular/core';
import { NavigateService } from '../services/navigate.service';

enum ActivePage {
  HOME = "HOME",
  PURCHASE = "PURCHASE",
}

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  public activePage: ActivePage = ActivePage.HOME;

  constructor(
    public navigateService: NavigateService
  ) {  }

  ngOnInit(): void {
  }

  setActivePage(page: String): void {
    switch (page) {
      case "HOME":
        this.activePage = ActivePage.HOME;
        break;
      case "PURCHASE":
        this.activePage = ActivePage.PURCHASE;
        break;
    }
  }

}
