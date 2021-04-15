import { Injectable } from '@angular/core';
import { GogolReader } from '../models/media.model';

@Injectable({
  providedIn: 'root'
})
export class SharedDataService {

  readers: GogolReader[];

  constructor() {
    let baseurl = window.location.href.substr(0, window.location.href.indexOf('#'));

    this.readers = [
      {id: '1', name: 'Daniele', image: 'assets/reader-01.jpg', video: null},
      {id: '2', name: 'Andrea', image: 'assets/readers/michela-melai.jpg', video: { url: baseurl + 'assets/readers/luca-colzi.mp4' }},
      {id: '3', name: 'Carla', image: 'assets/readers/carla-congiu.jpg', video: null},
      {id: '4', name: 'Nadia', image: 'assets/readers/nadia-dellacroce.jpg', video: null},
      {id: '5', name: 'Michela', image: 'assets/readers/michela-podda.jpg', video: null},
      {id: '6', name: 'Luca', image: 'assets/reader-01.jpg', video: null},
      {id: '7', name: 'Adele', image: 'assets/reader-01.jpg', video: null},
      {id: '8', name: 'Enza', image: 'assets/reader-01.jpg', video: null},
      {id: '9', name: 'Andrea', image: 'assets/reader-01.jpg', video: { url: baseurl + 'assets/readers/luca-colzi.mp4' }},
      {id: '10', name: 'Fabrizio', image: 'assets/reader-01.jpg', video: null},
      {id: '11', name: 'Francesco', image: 'assets/reader-01.jpg', video: null},
      {id: '12', name: 'Teresa', image: 'assets/reader-01.jpg', video: null},
      {id: '13', name: 'Carmela', image: 'assets/reader-01.jpg', video: null},
      {id: '14', name: 'Giulia', image: 'assets/reader-01.jpg', video: null},
      {id: '15', name: 'Antonella', image: 'assets/reader-01.jpg', video: null},
      {id: '16', name: 'Mara', image: 'assets/reader-01.jpg', video: null},
      {id: '17', name: 'Andrea', image: 'assets/reader-01.jpg', video: { url: baseurl + 'assets/readers/luca-colzi.mp4' }},
      {id: '18', name: 'Benedetta', image: 'assets/reader-01.jpg', video: null},
      {id: '19', name: 'Chiara', image: 'assets/reader-01.jpg', video: null},
      {id: '20', name: 'Loredana', image: 'assets/reader-01.jpg', video: null},
      {id: '21', name: 'Andrea', image: 'assets/reader-01.jpg', video: null},
      {id: '22', name: 'Luca', image: 'assets/reader-01.jpg', video: null},
      {id: '23', name: 'Adele', image: 'assets/reader-01.jpg', video: null},
      {id: '24', name: 'Enza', image: 'assets/reader-01.jpg', video: null},
      {id: '25', name: 'Claudia', image: 'assets/reader-01.jpg', video: null},
      {id: '26', name: 'Fabrizio', image: 'assets/reader-01.jpg', video: null},
      {id: '27', name: 'Francesco', image: 'assets/reader-01.jpg', video: null},
    ];
  }

}
