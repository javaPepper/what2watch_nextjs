import { GENRES_LIST } from '../const';

export function GenreList() {

  return (
    <div className='catalog__genres-list'>
      {GENRES_LIST.map((el) => (
        <>
          <input
            id={`genre-${el}`}
            type='radio'
            name='genre'
            className='catalog__genres-item visually-hidden'
            key={el}
            defaultChecked={el === 'All genres'}
          >
          </input>
          <label className="catalog__genres-link" htmlFor={`genre-${el}`}>{el}</label>
        </>
      ))}
    </div>
  );
}
