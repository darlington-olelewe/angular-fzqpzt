import { Component } from "@angular/core";
import { MovieService } from "../service/movie-service.service";

@Component({
  selector:"app-rental-list",
  templateUrl: "./rental-list.component.html",
  styleUrls:[]
})
export class RentalListComponent{
  constructor(public movieService: MovieService){}

  getSize(){
    return this.movieService.getSize();
  }

  getTexts(){
    return this.movieService.getTexts();
  }
}