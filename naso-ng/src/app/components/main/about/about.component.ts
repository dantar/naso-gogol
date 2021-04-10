import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  readers: string[];
  mailto = 'info@teatrosantandrea.it';

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.readers = [
      'Antonella Biegi', 'Giulia Cavedoni', 'Andrea Colzi', 'Carla Congiu', 
      'Fabrizio Costa', 'Luca Cristiano', 'Giulia Del Nista', 'Nadia Della Croce', 
      'Serena Detti', 'Martina Evangelista', 'Chiara Gagliano', 'Silvia Galletti', 
      'Alessandra Manfredini', 'Michela Melai', 'Claudia Melli', 'Mara Pacini', 
      'Loredana Paris', 'Michela Podda', 'Enza Rampello', 'Benedetta Rognoni', 
      'Teresa Rossi', 'Andrea Spresian', 'Claudia Taffi', 'Daniele Tarini', 
      'Carmela Trimarchi', 'Elena Zucconi'
    ];
  }

  clickGoBack() {
    this.router.navigate(['intro']);
  }

}
