import { Component, VERSION } from '@angular/core';
import { DatiAnagrafici } from './dati-anagrafici';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  datiGlobali: DatiAnagrafici = {
    nome: 'Giordano',
    cognome: 'Galié',
    dataNascita: '20/11/2005'
  };

  lista: string[] = [
    'Mela', 'Pera', 'Banana'
  ];

  addItem(value:string){
    this.lista.push(value);
  }
}
