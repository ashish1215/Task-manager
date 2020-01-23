import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.scss']
})
export class SideMenuComponent implements OnInit {

  @Input() counter: any;

  @Output() onClick = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  onMenuClick(){
    this.onClick.emit("clicked on A menu item")
  }

}
