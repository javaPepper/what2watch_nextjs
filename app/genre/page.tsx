'use client'
import React, { useState } from 'react';

type GenreProps = {
  filterValue: string;
  isTouched: boolean;
};

export default function Genre({ filterValue, isTouched }: GenreProps) {
  const [isActive, setActive] = useState<boolean>(false);

  return (
    <li
      className={`catalog__genres-item ${isActive ? 'catalog__genres-item--active' : ''}`}
      onClick={(evt) => {
        console.log(evt.type)
         setActive(isTouched);
      }}
    >
      <a href='#' className='catalog__genres-link'>
        {filterValue}
      </a>
    </li>
  );
}
