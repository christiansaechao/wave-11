

export type Song = {
  artist: string;
  track: string;
  album: string;
  album_art: string;
};

export const TrackCard = (props: Song) => {
  return (
    <div className = "border-10 border-pink-200">
      <div className="font-bold text-white">{props.artist}</div>
      <div className="text-white font-color-blue-300">{props.track}</div>
      <div className="text-white">{props.album}</div>
      <div className="text-white">{props.album_art}</div>
    </div>
  );
};
