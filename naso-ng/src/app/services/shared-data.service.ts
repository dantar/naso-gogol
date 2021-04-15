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
      {id: '1', fullname:'Antonella Biegi', name: 'Antonella', image: 'assets/readers/antonella-biegi.jpg', video: null},
      {id: '2', fullname:'Giulia Cavedoni', name: 'Giulia C', image: 'assets/readers/giulia-cavedoni.jpg', video: null},
      {id: '3', fullname:'Andrea Colzi', name: 'Andrea C', image: 'assets/readers/andrea-colzi.jpg', video: { url: baseurl + 'assets/readers/andrea-colzi.mp4' }},
      {id: '4', fullname:'Carla Congiu', name: 'Carla', image: 'assets/readers/carla-congiu.jpg', video: null},
      {id: '5', fullname:'Fabrizio Costa', name: 'Fabrizio', image: 'assets/readers/fabrizio-costa.jpg', video: null},
      {id: '6', fullname:'Luca Cristiano', name: 'Luca C', image: 'assets/readers/luca-cristiano.jpg', video: null},
      {id: '7', fullname:'Giulia Del Nista', name: 'Giulia DN', image: 'assets/readers/giulia-delnista.jpg', video: null},
      {id: '8', fullname:'Nadia Della Croce', name: 'Nadia', image: 'assets/readers/nadia-dellacroce.jpg', video: null},
      {id: '9', fullname:'Serena Detti', name: 'Serena', image: 'assets/readers/serena-detti.jpg', video: null},
      {id: '10', fullname:'Martina Evangelista', name: 'Martina', image: 'assets/readers/martina-evangelista.jpg', video: null},
      {id: '11', fullname:'Chiara Aurora Gagliano', name: 'Chiara', image: 'assets/readers/chiaraaurora-gagliano.jpg', video: { url: baseurl + 'assets/readers/chiaraaurora-gagliano.mp4' }},
      {id: '12', fullname:'Silvia Galletti', name: 'Silvia', image: 'assets/readers/silvia-galletti.jpg', video: { url: baseurl + 'assets/readers/silvia-galletti.mp4' }},
      {id: '13', fullname:'Alessandra Manfredini', name: 'Alessandra', image: 'assets/readers/alessandra-manfredini.jpg', video: null},
      {id: '14', fullname:'Michela Melai', name: 'Michela M', image: 'assets/readers/michela-melai.jpg', video: null},
      {id: '15', fullname:'Claudia Melli', name: 'Claudia', image: 'assets/readers/claudia-melli.jpg', video: null},
      {id: '16', fullname:'Mara Pacini', name: 'Mara', image: 'assets/readers/mara-pacini.jpg', video: null},
      {id: '17', fullname:'Loredana Paris', name: 'Loredana', image: 'assets/readers/loredana-paris.jpg', video: null},
      {id: '18', fullname:'Michela Podda', name: 'Michela P', image: 'assets/readers/michela-podda.jpg', video: null},
      {id: '19', fullname:'Enza Rampello', name: 'Enza', image: 'assets/readers/enza-rampello.jpg', video: null},
      {id: '20', fullname:'Benedetta Rognoni', name: 'Benedetta', image: 'assets/readers/benedetta-rognoni.jpg', video: null},
      {id: '21', fullname:'Teresa Rossi', name: 'Teresa', image: 'assets/readers/teresa-rossi.jpg', video: null},
      {id: '22', fullname:'Andrea Spresian', name: 'Andrea S', image: 'assets/readers/andrea-spresian.jpg', video: null},
      {id: '23', fullname:'Claudia Taffi', name: 'Claudia', image: 'assets/readers/claudia-taffi.jpg', video: null},
      {id: '24', fullname:'Daniele Tarini', name: 'Daniele', image: 'assets/readers/daniele-tarini.jpg', video: null},
      {id: '25', fullname:'Carmela Trimarchi', name: 'Carmela', image: 'assets/readers/carmela-trimarchi.jpg', video: null},
      {id: '26', fullname:'Elena Zucconi', name: 'Elena', image: 'assets/readers/elena-zucconi.jpg', video: null},
      {id: '27', fullname:'Giulia Solano', name: 'Giulia S', image: 'assets/readers/giulia-solano.jpg', video: null},
      {id: '28', fullname:'Francesco Morosi', name: 'Francesco', image: 'assets/readers/francesco-morosi.jpg', video: null},
    ];
  }

}
