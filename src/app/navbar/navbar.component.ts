import { Component, OnInit, Inject, HostListener } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(@Inject(DOCUMENT) private document: Document) { }

  @HostListener('window:scroll',[])
  onWindowScroll() {
    if (document.body.scrollTop > 100 ||     
    document.documentElement.scrollTop > 100) {
      document.getElementById('addClass').classList.add('secondry');
    } else {
      document.getElementById('addClass').classList.remove('secondry');
    }
  };

  ngOnInit(): void {
  }

}
