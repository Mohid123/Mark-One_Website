import { AfterViewInit, Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import * as Aos from 'aos';
import {} from 'googlemaps';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class MainPageComponent implements OnInit, AfterViewInit {
  @ViewChild('map') mapElement: any;
  map!: google.maps.Map;

  corporateSecondFloorData = [
    {
      number: '201',
      area: '605.00',
      price: '60,000',
      total: '36,300,000'
    },
    {
      number: '202',
      area: '487.00',
      price: '60,000',
      total: '29,220,000'
    },
    {
      number: '203',
      area: '707.00',
      price: '60,000',
      total: '42,420,000'
    },
    {
      number: '204',
      area: '401.00',
      price: '60,000',
      total: '24,060,000'
    },
    {
      number: '205',
      area: '476.00',
      price: '60,000',
      total: '28,560,000'
    }
  ];

  corporateThirdFloorData = [
    {
      number: '301',
      area: '579.00',
      price: '40,000',
      total: '23,160,000'
    },
    {
      number: '302',
      area: '465.00',
      price: '40,000',
      total: '18,600,000'
    },
    {
      number: '303',
      area: '678.00',
      price: '40,000',
      total: '27,120,000'
    },
    {
      number: '304',
      area: '383.00',
      price: '40,000',
      total: '15,320,000'
    },
    {
      number: '305',
      area: '453.00',
      price: '40,000',
      total: '18,120,000'
    }
  ];

  apartmentFourthFloorData = [
    {
      number: '401',
      area: '676',
      price: '30,000',
      total: '20,280,000'
    },
    {
      number: '402',
      area: '461',
      price: '30,000',
      total: '13,830,000'
    },
    {
      number: '403',
      area: '736',
      price: '30,000',
      total: '22,080,000'
    },
    {
      number: '404',
      area: '737',
      price: '30,000',
      total: '22,110,000'
    },
  ];

  apartmentFifthFloorData = [
    {
      number: '501',
      area: '676',
      price: '30,000',
      total: '20,280,000'
    },
    {
      number: '502',
      area: '461',
      price: '30,000',
      total: '13,830,000'
    },
    {
      number: '503',
      area: '736',
      price: '30,000',
      total: '22,080,000'
    },
    {
      number: '504',
      area: '737',
      price: '30,000',
      total: '22,110,000'
    },
  ]

  ngOnInit(): void {
    Aos.init();
  }

  ngAfterViewInit(): void {
    const mapProperties = {
      center: new google.maps.LatLng(33.54299527955479, 73.11374548106458),
      zoom: 15,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    this.map = new google.maps.Map(this.mapElement?.nativeElement, mapProperties);
  }
}
