import React from 'react';
import { TiStar } from 'react-icons/ti';

export function useStarsForRating(num) {
  switch (num) {
    case 1:
      return (
        <div className='star-wrapper'>
          <TiStar className='star-icon' />
        </div>);

    case 2:
      return (
        <div className='star-wrapper'>
          <TiStar className='star-icon' />
          <TiStar className='star-icon' />
        </div>);

    case 3:
      return (
        <div className='star-wrapper'>
          <TiStar className='star-icon' />
          <TiStar className='star-icon' />
          <TiStar className='star-icon' />
        </div>);

    case 4:
      return (
        <div className='star-wrapper'>
          <TiStar className='star-icon' />
          <TiStar className='star-icon' />
          <TiStar className='star-icon' />
          <TiStar className='star-icon' />
        </div>);

    case 5:
      return (
        <div className='star-wrapper'>
          <TiStar className='star-icon' />
          <TiStar className='star-icon' />
          <TiStar className='star-icon' />
          <TiStar className='star-icon' />
          <TiStar className='star-icon' />
        </div>);

  }
}