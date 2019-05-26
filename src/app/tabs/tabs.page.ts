import { Component } from '@angular/core';
import { Platform } from '@ionic/angular';

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

  width: number;
  height: number;
  minSize: number;

  image1: Position = {} as Position;
  image2: Position = {} as Position;
  image3: Position = {} as Position;
  image4: Position = {} as Position;

  size: number;

  constructor(
    private platform: Platform,
  ) {
    this.initializeApp();
    this.calculatePosition();
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

  initializeApp() {
    const width = this.platform.width();
    const height = this.platform.height();
    this.height = height;
    this.width = width;

    if (width <= height) {
      this.minSize = width;
    } else {
      this.minSize = height;
    }
    this.size = this.minSize * 0.20;
  }

  calculatePosition() {
    this.image1.top = this.height / 2 - this.width / 4 - this.size / 2;
    this.image1.left = this.width / 2 - this.size / 2;

    this.image2.top = this.height / 2 + this.width / 4 - this.size / 2;
    this.image2.left = this.width / 2 - this.size / 2;

    this.image3.top = this.height / 2 - this.size / 2;
    this.image3.left = this.width / 2 - this.width / 4 - this.size / 2;

    this.image4.top = this.height / 2 - this.size / 2;
    this.image4.left = this.width / 2 + this.width / 4 - this.size / 2;
  }
}

interface Position {
  left: number;
  top: number;
}
