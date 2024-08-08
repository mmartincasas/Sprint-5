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
  
}
