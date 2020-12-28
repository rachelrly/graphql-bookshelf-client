import React from 'react';
import '../css/Loading.css';

function Loading() {

  const n = 1.4;
  const r = 135.5 * n;
  const rx = 243.2;
  const ry = 450;
  const x = 74.8 * n;
  const y = 60.7 * n;
  const z = 318;

  const quotes = ["'Books are the mirrors of the soul.' ― Virginia Woolf",
    "'A book must be the axe for the frozen sea within us.' ― Franz Kafka",
    "'The library is inhabited by spirits that come out of the pages at night.' ― Isabel Allende",
    "'A book lying idle on a shelf is wasted ammunition.' ― Henry Miller",
    "'A house without books is like a room without windows.' ― Horace Mann"
  ]

  const rand = Math.floor(Math.random() * quotes.length);

  return (
    <section className='loading-wrapper'>
      <svg xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 500 500">
        <title>Bookshelf Loading Quote</title>
        <defs>
          <path d={`M${rx}, ${ry}c-${x},   
    0-${r}-${y}-${r}-${r}s${y}-${r},${r}-${r}s${r}, ${y}, ${r},
    ${r} S${z}, ${ry}, ${rx}, ${ry}z`} id="textcircle" />
        </defs>
        <text ry="100" rx="100" textLength={quotes[rand].length}>
          <textPath href="#textcircle">{quotes[rand]}</textPath>
        </text>
      </svg>
    </section>
  )
}

export default Loading;
