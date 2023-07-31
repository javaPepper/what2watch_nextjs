import FilmComponent from '../film/page';
import { Film } from '../types/film';

type FilmsListProps = {
    films: Film[];
}

export default function FilmsList({films}: FilmsListProps) {
  return (
    <div className='catalog__films-list'>
      {films?.map((el) => (
        <FilmComponent key={el.id} film={el} />
      ))}
    </div>
  );
}
