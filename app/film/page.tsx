import Image from 'next/image';
import { Film } from '../types/film';

type FilmProps = {
  film: Film;
};

export default function FilmComponent({ film }: FilmProps) {
  const { previewImage, name } = film;
  return (
    <article className='small-film-card catalog__films-card'>
      <div className='small-film-card__image'>
        <Image src={previewImage} alt={name} width={280} height={175} />
      </div>
      <h3 className='small-film-card__title'>
        <a className='small-film-card__link' href='film-page.html'>
          {name}
        </a>
      </h3>
    </article>
  );
}
