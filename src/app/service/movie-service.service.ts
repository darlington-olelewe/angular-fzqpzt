import { Injectable } from "@angular/core"

@Injectable({
  providedIn:"root"
})
export class MovieService{
  movies:string[] = ["Cats", "Howard the Duck", "Jack and Jill", "Batman and Robin"]

  rentMovie(movie:string){
    this.movies.push(movie)
  }

  getSize(){
    return this.movies.length;
  }

  getTexts(){
    return this.movies.join(", ");
  }
}

