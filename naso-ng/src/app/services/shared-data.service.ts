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
      {id: '1', fullname:'Antonella Biegi', name: 'Antonella', image: 'assets/readers/antonella-biegi.jpg', video: { url: baseurl + 'assets/readers/antonella-biegi.mp4' }},
      {id: '2', fullname:'Giulia Cavedoni', name: 'Giulia C', image: 'assets/readers/giulia-cavedoni.jpg', video: { url: baseurl + 'assets/readers/giulia-cavedoni.mp4' }},
      {id: '3', fullname:'Andrea Colzi', name: 'Andrea C', image: 'assets/readers/andrea-colzi.jpg', video: { url: baseurl + 'assets/readers/andrea-colzi.mp4' }},
      {id: '4', fullname:'Carla Congiu', name: 'Carla', image: 'assets/readers/carla-congiu.jpg', video: { url: baseurl + 'assets/readers/carla-congiu.mp4' }},
      {id: '5', fullname:'Fabrizio Costa', name: 'Fabrizio', image: 'assets/readers/fabrizio-costa.jpg', video: { url: baseurl + 'assets/readers/fabrizio-costa.mp4' }},
      {id: '6', fullname:'Luca Cristiano', name: 'Luca C', image: 'assets/readers/luca-cristiano.jpg', video: { url: baseurl + 'assets/readers/luca-cristiano.mp4' }},
      {id: '7', fullname:'Giulia Del Nista', name: 'Giulia DN', image: 'assets/readers/giulia-delnista.jpg', video: { url: baseurl + 'assets/readers/giulia-delnista.mp4' }},
      {id: '8', fullname:'Nadia Della Croce', name: 'Nadia', image: 'assets/readers/nadia-dellacroce.jpg', video: { url: baseurl + 'assets/readers/nadia-dellacroce.mp4' }},
      {id: '9', fullname:'Serena Detti', name: 'Serena', image: 'assets/readers/serena-detti.jpg', video: { url: baseurl + 'assets/readers/serena-detti.mp4' }},
      {id: '10', fullname:'Martina Evangelista', name: 'Martina', image: 'assets/readers/martina-evangelista.jpg', video: { url: baseurl + 'assets/readers/martina-evangelista.mp4' }},
      {id: '11', fullname:'Chiara Aurora Gagliano', name: 'Chiara', image: 'assets/readers/chiaraaurora-gagliano.jpg', video: { url: baseurl + 'assets/readers/chiaraaurora-gagliano.mp4' }},
      {id: '12', fullname:'Silvia Galletti', name: 'Silvia', image: 'assets/readers/silvia-galletti.jpg', video: { url: baseurl + 'assets/readers/silvia-galletti.mp4' }},
      {id: '13', fullname:'Alessandra Manfredini', name: 'Alessandra', image: 'assets/readers/alessandra-manfredini.jpg', video: { url: baseurl + 'assets/readers/alessandra-manfredini.mp4' }},
      {id: '14', fullname:'Michela Melai', name: 'Michela M', image: 'assets/readers/michela-melai.jpg', video: { url: baseurl + 'assets/readers/michela-melai.mp4' }},
      {id: '15', fullname:'Claudia Melli', name: 'Claudia M', image: 'assets/readers/claudia-melli.jpg', video: { url: baseurl + 'assets/readers/claudia-melli.mp4' }},
      {id: '16', fullname:'Mara Pacini', name: 'Mara', image: 'assets/readers/mara-pacini.jpg', video: { url: baseurl + 'assets/readers/mara-pacini.mp4' }},
      {id: '17', fullname:'Loredana Paris', name: 'Loredana', image: 'assets/readers/loredana-paris.jpg', video: { url: baseurl + 'assets/readers/loredana-paris.mp4' }},
      {id: '18', fullname:'Michela Podda', name: 'Michela P', image: 'assets/readers/michela-podda.jpg', video: { url: baseurl + 'assets/readers/michela-podda.mp4' }},
      {id: '19', fullname:'Enza Rampello', name: 'Enza', image: 'assets/readers/enza-rampello.jpg', video: { url: baseurl + 'assets/readers/enza-rampello.mp4' }},
      {id: '20', fullname:'Benedetta Rognoni', name: 'Benedetta', image: 'assets/readers/benedetta-rognoni.jpg', video: { url: baseurl + 'assets/readers/benedetta-rognoni.mp4' }},
      {id: '21', fullname:'Teresa Rossi', name: 'Teresa', image: 'assets/readers/teresa-rossi.jpg', video: { url: baseurl + 'assets/readers/teresa-rossi.mp4' }},
      {id: '22', fullname:'Andrea Spresian', name: 'Andrea S', image: 'assets/readers/andrea-spresian.jpg', video: { url: baseurl + 'assets/readers/andrea-spresian.mp4' }},
      {id: '23', fullname:'Claudia Taffi', name: 'Claudia T', image: 'assets/readers/claudia-taffi.jpg', video: { url: baseurl + 'assets/readers/claudia-taffi.mp4' }},
      {id: '24', fullname:'Daniele Tarini', name: 'Daniele', image: 'assets/readers/daniele-tarini.jpg', video: { url: baseurl + 'assets/readers/daniele-tarini.mp4' }},
      {id: '25', fullname:'Carmela Trimarchi', name: 'Carmela', image: 'assets/readers/carmela-trimarchi.jpg', video: { url: baseurl + 'assets/readers/carmela-trimarchi.mp4' }},
      {id: '26', fullname:'Elena Zucconi', name: 'Elena', image: 'assets/readers/elena-zucconi.jpg', video: { url: baseurl + 'assets/readers/elena-zucconi.mp4' }},
      {id: '27', fullname:'Giulia Solano', name: 'Giulia S', image: 'assets/readers/giulia-solano.jpg', video: { url: baseurl + 'assets/readers/giulia-solano.mp4' }},
      {id: '28', fullname:'Francesco Morosi', name: 'Francesco', image: 'assets/readers/francesco-morosi.jpg', video: null},
    ];
  }

}
