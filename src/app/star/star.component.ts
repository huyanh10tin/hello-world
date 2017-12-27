import {Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.css']
})
export class StarComponent implements OnInit {
  @Input() isChecked: boolean;

  constructor() {
  }

  ngOnInit() {
  }

  changeStatus() {
    console.log('Clicked');
    this.isChecked = !this.isChecked;
  }
}
