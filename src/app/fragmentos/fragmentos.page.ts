import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fragmentos',
  templateUrl: './fragmentos.page.html',
  styleUrls: ['./fragmentos.page.scss'],
})
export class FragmentosPage implements OnInit {
  mySlideOptions = {
    initialSlide: 3,
    speed: 400
  };
  constructor() { }

  ngOnInit() {
  }

}
