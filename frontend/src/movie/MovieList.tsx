import { useEffect, useState } from 'react';
import { Movie } from '../types/movie';

function MovieList() {
  const [movieData, setMovieData] = useState<Movie[]>([]);

  useEffect(() => {
    const fetchMovie = async () => {
      const rsp = await fetch('https://localhost:4000/movie');
      const temp = await rsp.json();
      setMovieData(temp);
    };
    fetchMovie();
  }, []);

  return (
    <>
      <div className="">
        <table className="table">
          <thead>
            <tr>
              <td>Title</td>
              <td>Category</td>
              <td>Year</td>
              <td>Director</td>
              <td>Rating</td>
              <td>Edited</td>
              <td>Lent To</td>
              <td>Notes</td>
            </tr>
          </thead>
          <tbody>
            {movieData.map((m) => (
              <tr>
                {/* key={m.movieId} */}
                <td>{m.title}</td>
                <td>{m.category}</td>
                <td>{m.year}</td>
                <td>{m.director}</td>
                <td>{m.rating}</td>
                <td>{m.edited}</td>
                <td>{m.lentTo}</td>
                <td>{m.notes}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default MovieList;
