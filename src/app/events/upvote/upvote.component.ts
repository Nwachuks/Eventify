import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-upvote',
  templateUrl: './upvote.component.html',
  styleUrls: ['./upvote.component.css']
})
export class UpvoteComponent implements OnInit {
  @Input() voted: boolean;
  @Input() count: number;
  @Output() vote = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  onClick() {
    this.vote.emit({});
  }

}
