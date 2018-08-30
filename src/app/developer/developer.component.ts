import { CardComponent } from '../card/card.component';
import { Component, OnInit, ViewChild, ViewContainerRef, ComponentFactoryResolver} from '@angular/core';
import {NgForm} from '@angular/forms';
@Component({
  entryComponents: [CardComponent],
  selector: 'app-developer',
  templateUrl: './developer.component.html',
  styleUrls: ['./developer.component.css']
})
export class DeveloperComponent implements OnInit {
   n: String;
   d: String;
   id: number;
   MyArrayType = Array();
   @ViewChild('messagecontainer', { read: ViewContainerRef }) entry: ViewContainerRef;

   constructor(private resolver: ComponentFactoryResolver) { }

  ngOnInit() {
    this.id = 1;
  }

  createComponent() {
    const obj = {Name: this.n, Desc: this.d};
    this.MyArrayType.push(obj);
    this.id++;
    console.log(this.MyArrayType);
  }

  get self(): DeveloperComponent {
        return this;
    }
}
