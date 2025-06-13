import { Component } from '@angular/core';
import { AnimationController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone: false,
})
export class HomePage {
  constructor(private animationCtrl: AnimationController) {}

  ngOnInit() {
    this.playAnimation();
  }

  playAnimation() {
    const toolbar = document.querySelector('.ion-toolbar');
    if (toolbar) {
      const animation = this.animationCtrl.create()
        .addElement(toolbar)
        .duration(1000)
        .fromTo('opacity', 0, 1);
      animation.play();
    }
  }
}
