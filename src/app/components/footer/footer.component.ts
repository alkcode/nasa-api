import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  public fb:string = '';
  public github = '';

  constructor() { }

  ngOnInit(): void {
    this.fb='https://www.facebook.com/aleksei.martinez.3/';
    this.github='https://alkcode.github.io/';
  }

}
