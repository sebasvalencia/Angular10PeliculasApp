import { Injectable } from '@angular/core';

import { Jsonp, Http } from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class PeliculasService {

  private apiKey:string = '5ba57c6640cd68473bce8e8ed315b8a3';
  private urlMoviedb:string = 'https://api.themoviedb.org/3';

  constructor(private jsonp:Jsonp, private http:Http) { }


  getPopulares(){
    let url = `${ this.urlMoviedb }/discover/movie?sort_by=popularity.desc&api_key=${ this.apiKey }&language=es&callback=JSONP_CALLBACK`;
    return this.jsonp.get( url )
                .map( res=> res.json());
  }

  buscarPelicula( texto:string ){
    let url = `${ this.urlMoviedb }/search/movie?query=${ texto }&sort_by=popularity.desc&api_key=${ this.apiKey }&language=es&callback=JSONP_CALLBACK`;
    return this.jsonp.get( url ).map( res=> res.json());
  }


}
