import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Credential } from './credential'; // tunnarin tyyppi
import { Registration } from './registration'; // ilmoittautumisen tyyppi

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    /* 
    Huomaa ettÃ¤ tÃ¤ssÃ¤ sovelluksessa tehdÃ¤Ã¤n vain autentikaation frontend-
    koodia. Turvallista autentikaatiota ei pysty tekemÃ¤Ã¤n kokonaan
    frontendissÃ¤, vaan se vaatii aina backendin. Mutta koska tÃ¤mÃ¤ ei ole
    backend-kurssi, niin tyydymme "feikki-autentikaatioon".
         
    Alla olevat oikeat tunnarit viedÃ¤Ã¤n loginform-komponenttiin, jossa niitÃ¤ verrataan
    kÃ¤yttÃ¤jÃ¤n antamiin tunnareihin. Oikeissa sovelluksissa nÃ¤in ei tehdÃ¤,
    vaan kÃ¤yttÃ¤jÃ¤n antamat tunnarit lÃ¤hetetÃ¤Ã¤n lomakkeelta palvelimelle
    ja siellÃ¤ tutkitaan ovatko ne oikeat, ja asiakaspuolelle lÃ¤hetetÃ¤Ã¤n tieto siitÃ¤
    olivatko ne oikeat (true tai false). Jos tieto on true, pÃ¤Ã¤stÃ¤Ã¤n suojatulle
    sivulle.
    
    Oikeassa tietokannassa oikeat tunnarit eivÃ¤t ole suoraan nÃ¤kyvissÃ¤ kuten tÃ¤ssÃ¤,
    vaan ne ovat salakirjoitettuina esim. bcrypt -funktiolla. Normaalisti 
    jokaiselle kÃ¤yttÃ¤jÃ¤lle on omat tunnarit, mutta tÃ¤ssÃ¤ on vain yhdet ja samat
    kaikille kÃ¤yttÃ¤jille. 
    
    EdellÃ¤ mainitut jutut otetaan huomioon, sitten kun teemme oikean palvelinsovelluksen 
    backend-kurssilla
    */
    // oikeat tunnarit, joilla pÃ¤Ã¤see regformiin
    const creds: Credential[] = [
      { id: 1, username: 'tunnus987', password: 'salasana987' },
      { id: 1, username: 'teppo', password: 'testaa' },
    ];
    // ilmoittautumiset, jotka esitetÃ¤Ã¤n reglistissÃ¤ ja uusia voi luoda regformilla
    const regs: Registration[] = [
      {
        id: 1,
        name: 'Matti Mainio',
        email: 'masa@jamk.fi',
        food: 'Liha',
        sauna: 'Osallistun',
      },
      {
        id: 2,
        name: 'Erkki Esimerkki',
        email: 'epe@hotmail.fi',
        food: 'Kala',
        sauna: 'En osallistu',
      },
      {
        id: 3,
        name: 'Maija Meikäläinen',
        email: 'maikku@gmail.com',
        food: 'Kasvis',
        sauna: 'En osallistu',
      },
      {
        id: 4,
        name: 'Repa Rimpiläinen',
        email: 'rr69@suomi24.fi',
        food: 'Liha',
        sauna: 'Osallistun',
      },
    ];
    return { creds, regs };
  }

  // genId-metodi generoi uudelle ilmoittautuneelle id:n
  genId(regs: Registration[]): number {
    return regs.length > 0 ? Math.max(...regs.map((reg) => reg.id)) + 1 : 1;
  }
}
