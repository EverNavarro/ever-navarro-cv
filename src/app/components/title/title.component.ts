import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.scss']
})
export class TitleComponent implements OnInit {
  @Input()
  type: any = '';
  titleStyle: any = '';

  ngOnInit():void {
    this.setTitleType();
  };

  setTitleType(): void {
    switch (this.type) {
      case 'header':
        this.titleStyle = 'title__header'
        break;

      default:
        this.titleStyle = 'title__default'
        break;
    }
  }
}
