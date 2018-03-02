import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  test: number ;

  constructor() { }

  ngOnInit() {
    this.test = 5;
    console.log(this.test);
  }

}
