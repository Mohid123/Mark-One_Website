import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import * as Aos from 'aos';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class MainPageComponent implements OnInit {

  ngOnInit(): void {
    Aos.init();
  }
}
