// import { SpotifyCard } from "./SpotifyCard";

export const DetalleSpotify = () => {
  return (
    <section className="text-white p-5 container mx-auto py-10 lg:py-10">
      <h3 className="text-2xl lg:text-4xl pb-10">Escúchalas en Spotify</h3>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 my-5">
        <div className="space-y-3">
          {/* <SpotifyCard
            link={
              "https://open.spotify.com/track/2OZsedyLpIuOVRVODdhaMZ?si=1d4297bf3a97429f"
            }
          /> */}
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
          <hr className="border border-white  " />
          <p className='text-base lg:text-lg'>Saturno</p>
        </div>
        <div className="space-y-3">
          {/* <SpotifyCard
            link={
              "https://open.spotify.com/track/2TDyyEBasw10wu5Uh94bR1?si=d1326544cd824fff"
            }
          /> */}
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
          <hr className="border border-white  " />
          <p className='text-base lg:text-lg'>Punto 40</p>
        </div>
        <div className="space-y-3">
          {/* <SpotifyCard
            link={
              "https://open.spotify.com/track/6fmpK6IerfBrhZo4a2MYkC?si=2ec87bc18ec74f8c"
            }
          /> */}
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
          <hr className="border border-white  " />
          <p className='text-base lg:text-lg'>Más de una vez</p>
        </div>
        <div className="space-y-3">
          {/* <SpotifyCard
            link={
              "https://open.spotify.com/track/39qtjJ454r2fgyXaenq8Wv?si=8e7b62be756341df"
            }
          /> */}
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
          <hr className="border border-white  " />
          <p className='text-base lg:text-lg'>Lejos del cielo</p>
        </div>
      </div>
    </section>
  );
};
