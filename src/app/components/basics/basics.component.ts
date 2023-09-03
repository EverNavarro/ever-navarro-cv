import { Component, Input } from '@angular/core';
import { IBasics } from 'src/app/models/resume/interface';

@Component({
  selector: 'app-basics',
  templateUrl: './basics.component.html',
  styleUrls: ['./basics.component.scss']
})
export class BasicsComponent {
  @Input()
  basics!: IBasics;

  constructor() {
  }

}
