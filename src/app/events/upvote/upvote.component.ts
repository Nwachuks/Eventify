import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-upvote',
  templateUrl: './upvote.component.html',
  styleUrls: ['./upvote.component.css']
})
export class UpvoteComponent implements OnInit {
  @Input() set voted(val) {
    this.iconColor = val ? 'red' : 'white';
  }
  @Input() count: number;
  @Output() vote = new EventEmitter();
  iconColor: string;

  constructor() { }

  ngOnInit() {
  }

  onClick() {
    this.vote.emit({});
  }

}
