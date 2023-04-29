import { MovieService } from "../service/movie-service.service";
import {Component, Input} from "@angular/core"
@Component({
  selector:'app-movie-item',
  template:`
  <div class="card bg-dark text-light" style="width:10rem;">
    <div class="card-body">
    <h6>{{movie}}</h6>

    <button 
      (click)="addMovie()"
      class="btn btn-primary" style="flex">Rent</button>
    </div>
  </div>
  `
})
export class MovieItemComponent{
  @Input()movie:string;
  constructor(public movieService:MovieService){}

  addMovie(){
    return this.movieService.rentMovie(this.movie);
  }
}