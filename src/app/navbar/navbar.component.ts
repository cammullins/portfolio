import { Component, OnInit, HostListener, Inject} from '@angular/core';
import { DOCUMENT } from "@angular/platform-browser";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  animations: [
    // trigger('navState', [
    //   state('inactive', style({
    //     'background-color': 'red'
    //     // display: 'none'
    //   })),
    //    state('active', style({
    //      'background-color': 'blue'
    //     // display: 'flex'
    //   })),
    //   transition('inactive => active', animate('100ms ease-in')),
    //   transition('active => inactive', animate('100ms ease-out'))
    // ])
  ]
})
export class NavbarComponent implements OnInit {

  ngOnInit() { }


}
