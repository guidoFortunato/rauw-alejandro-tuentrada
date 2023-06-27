import React from 'react';

export const DetalleSpotify = () => {
  return (
    <section className="text-white p-5 container mx-auto py-10 lg:py-20">
      <h3 className="text-2xl lg:text-4xl pb-10">Escúchalas en Spotify</h3>
      <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-4 gap-3 my-5">
        <div className="space-y-3">
          <iframe
            style={{ borderRadius: '12px' }}
            src="https://open.spotify.com/embed/track/2OZsedyLpIuOVRVODdhaMZ?utm_source=generator"
            width="100%"
            height="152"
            frameBorder="0"
            allowFullScreen
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
          ></iframe>
          <hr />
          <p>Saturno</p>
        </div>
        <div className="space-y-3">
          <iframe
            style={{ borderRadius: '12px' }}
            src="https://open.spotify.com/embed/track/2TDyyEBasw10wu5Uh94bR1?utm_source=generator"
            width="100%"
            height="152"
            frameBorder="0"
            allowFullScreen
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
          ></iframe>
          <hr />
          <p>Punto 40</p>
        </div>
        <div className="space-y-3">
          <iframe
            style={{ borderRadius: '12px' }}
            src="https://open.spotify.com/embed/track/6fmpK6IerfBrhZo4a2MYkC?utm_source=generator"
            width="100%"
            height="152"
            frameBorder="0"
            allowFullScreen
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
          ></iframe>
          <hr />
          <p>Más de una vez</p>
        </div>
        <div className="space-y-3">
          <iframe
            style={{ borderRadius: '12px' }}
            src="https://open.spotify.com/embed/track/39qtjJ454r2fgyXaenq8Wv?utm_source=generator"
            width="100%"
            height="152"
            frameBorder="0"
            allowFullScreen
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
          ></iframe>
          <hr />
          <p>Lejos del cielo</p>
        </div>
      </div>
    </section>
  );
};
