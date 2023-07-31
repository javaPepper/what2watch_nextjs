import { Film } from "../types/film";

export async function getPromo(): Promise<Film> {
    const response = await fetch('https://11.react.pages.academy/wtw/promo')
    if(!response.ok) {
      throw Error('promo fetching error')
    }
    return response.json();
  }

export async function getFilms(): Promise<Film[]> {
    const data = await fetch('https://11.react.pages.academy/wtw/films');
    if (!data.ok) {
      throw new Error('films fetching error');
    }
    return data.json();
  }