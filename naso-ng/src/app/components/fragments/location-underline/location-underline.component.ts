import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: '[app-location-underline]',
  templateUrl: './location-underline.component.html',
  styleUrls: ['./location-underline.component.scss']
})
export class LocationUnderlineComponent implements OnInit {

  @Input() text: string;

  constructor() { }

  ngOnInit(): void {
  }

}
