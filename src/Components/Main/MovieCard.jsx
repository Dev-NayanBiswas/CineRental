import { getAllMovies } from "../../Data/movies";
import Card from "./Card";



function MovieCard() {
  const movies = getAllMovies();



  return (
    <>
      <section className='grid sm:grid-col-2 xl:grid-cols-3 lg:gap-5'>
        {
            movies.map((movie)=><Card movie={movie} key={movie.id}></Card>)
        }
      </section>
    </>
  );
}

export default MovieCard;
