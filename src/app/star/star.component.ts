import {Component, OnInit, Input, Output, EventEmitter, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.css'],
  encapsulation: ViewEncapsulation.Emulated
})
export class StarComponent implements OnInit {
  @Input() isChecked: boolean;
  @Output('change') change = new EventEmitter();

  constructor() {
  }

  ngOnInit() {
  }

  changeStatus() {
    this.isChecked = !this.isChecked;
    this.change.emit({newValue: this.isChecked});
  }
}
