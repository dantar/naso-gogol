import { Component, Input, OnInit } from '@angular/core';
import { GogolReader } from '../../main/finale-premio/finale-premio.component';

@Component({
  selector: '[app-reader-card]',
  templateUrl: './reader-card.component.html',
  styleUrls: ['./reader-card.component.scss']
})
export class ReaderCardComponent implements OnInit {

  @Input() reader: GogolReader;

  constructor() { }

  ngOnInit(): void {
  }

}
