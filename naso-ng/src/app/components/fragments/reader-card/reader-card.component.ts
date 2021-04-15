import { Component, Input, OnInit } from '@angular/core';
import { GogolReader } from 'src/app/models/media.model';

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
