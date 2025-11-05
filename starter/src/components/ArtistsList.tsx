import type { Artist } from "../interfaces/Singers";
import ArtistItem from "./ArtistItem";
import "./ArtistsList.css";

type Props = {
  artists: Artist[];
};

const ArtistsList = ({ artists }: Props) => (
  <div className="artists-list">
    {artists.map((artist) => (
      <ArtistItem key={artist.id} artist={artist} />
    ))}
  </div>
);

export default ArtistsList;
