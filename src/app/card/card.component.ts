import { DeveloperComponent } from '../developer/developer.component';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  private _parent: DeveloperComponent ;
  @Input() Text: any;
  Name: String;
  Desc: String;
  @Input() i: any;
  constructor() { }
  ngOnInit() {
    console.log(this.Text.Name);
    this.Name = this.Text.Name;
    this.Desc = this.Text.Desc;
  }
  @Input() set parent(value: DeveloperComponent ) {
      this._parent = value;
  }
  get parent(): DeveloperComponent {
      return this._parent;
  }
  destroyComponent() {
    if (this.i !== -1) {
        this.parent.MyArrayType.splice(this.i, 1);
    }
  }
}
