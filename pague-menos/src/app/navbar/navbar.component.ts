import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';

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
    private router: Router
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

  goHome(): void {
    this.router.navigateByUrl("/home");
  }

  goToPurchase(): void {
    this.router.navigateByUrl("/nova-compra");
  }

}
