import { Component, Input } from '@angular/core';
import IStep from '../../models/IStep';

@Component({
  selector: 'app-escena',
  standalone: true,
  imports: [],
  templateUrl: './escena.component.html',
  styleUrl: './escena.component.scss'
})

export class EscenaComponent {

  @Input()  arraySteps: IStep[] = [];
  
  currentStep = 0;
  animating = false;
  animationClass = '';



  changeStep(targetStep: number) {
    if (this.animating || targetStep === this.currentStep) return;

    const direction = targetStep > this.currentStep ? 'next' : 'previous';
    this.animating = true;
    this.animationClass = direction === 'next' ? 'slide-out-left' : 'slide-out-right';

    setTimeout(() => {
      this.currentStep = targetStep;
      this.animationClass = direction === 'next' ? 'slide-in-right' : 'slide-in-left';

      setTimeout(() => {
        this.animationClass = '';
        this.animating = false;
      }, 500);
    }, 500);
  }

  nextStep() {
    if (this.currentStep < this.arraySteps.length - 1) {
      this.changeStep(this.currentStep + 1);
    }
  }

  previousStep() {
    if (this.currentStep > 0) {
      this.changeStep(this.currentStep - 1);
    }
  }
  
}
