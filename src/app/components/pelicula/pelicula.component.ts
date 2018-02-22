import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { PeliculasService } from "../../services/peliculas.service";

@Component({
  selector: "app-pelicula",
  templateUrl: "./pelicula.component.html",
  styles: []
})
export class PeliculaComponent implements OnInit {
  pelicula: any;

  constructor(public _ps: PeliculasService, public route: ActivatedRoute) {
    this.route.params.subscribe(params => {
      console.log(params);
      this._ps.getPelicula(params['id']).subscribe( pelicula => this.pelicula = pelicula );
    });
  }

  ngOnInit() {}
}
