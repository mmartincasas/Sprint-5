import { Component } from '@angular/core';
import { EscenaComponent } from '../escena/escena.component';
import { StepsService } from '../../services/steps.service';
import IStep from '../../models/IStep';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [EscenaComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})

export class HomeComponent {

  steps: IStep[] = [];

  constructor(protected stepService: StepsService){}

  ngOnInit(): void {
    this.steps = this.stepService.getSteps();
  }

}
