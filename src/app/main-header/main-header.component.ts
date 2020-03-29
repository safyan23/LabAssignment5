import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main-header',
  templateUrl: './main-header.component.html',
  styleUrls: ['./main-header.component.css']
})
export class MainHeaderComponent implements OnInit {

  firstName = 'Safyan';
  lastName = 'Iqbal';
  greeting = 'r1c2';

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  showGreeting() {
    const banner = document.getElementById('banner');
    banner.innerHTML = 'Hello ' + this.firstName + ' ' + this.lastName + '.';
  }

  hideGreeting() {
    const banner = document.getElementById('banner');
    banner.innerHTML = 'r1c2';
  }

navigateTo(path: string) {
  this.router.navigate([path]);
}

}
