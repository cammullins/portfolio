import { 
  Component,
  Input,
  HostListener,
  Inject
} from '@angular/core';

import { DOCUMENT } from "@angular/platform-browser";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'This is a Title';
  public navIsFixed: boolean = false;

  constructor(@Inject(DOCUMENT) private document : Document) { }

  @HostListener("window:scroll", ['$event'])
  onWindowScroll(){
    let number = this.document.body.scrollTop;
    if (number > 100){
      this.navIsFixed = true;
    }else if(this.navIsFixed && number < 10){
      this.navIsFixed = false;
    }
  }
}
