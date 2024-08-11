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

  nextStep(){
    if (this.currentStep < this.arraySteps.length -1){
      this.currentStep++;
    }
  }

  previousStep(){
    if (this.currentStep >0){
      this.currentStep--;
    }
  }
  
}
