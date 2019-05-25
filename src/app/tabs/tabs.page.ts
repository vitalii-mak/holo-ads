import { Component } from '@angular/core';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {
  images: string[] = [
    '../../assets/images/div-art.png',
    '../../assets/images/ktc.png',
    '../../assets/images/ninja.png',
    '../../assets/images/nuwgp.png',
    '../../assets/images/011.png',
    '../../assets/images/edu.png',
    '../../assets/images/aqua.png',
  ];

  image: string;

  constructor() {
    this.image = this.images[0];
    this.changeImage();
  }

  private changeImage() {
    let index = 0;

    setInterval(() => {
      index = (++index) % this.images.length;
      this.image = this.images[index];
    }, 10000);
  }

}
