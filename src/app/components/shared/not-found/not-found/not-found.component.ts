import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-not-found',
  template: '<h1>404 Not found.</h1> <br/> <a routerLink="/home">Go tohome</a>',
})
export class NotFoundComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
