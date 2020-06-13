import { Component} from '@angular/core';
import { NgwWowService } from 'ngx-wow';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private wowService: NgwWowService, ) {
      
   
    // this.wowService.init();
  }



}