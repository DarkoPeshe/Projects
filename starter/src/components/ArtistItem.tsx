import type { Artist } from "../interfaces/Singers";
import { Link } from "react-router-dom";

type Props = {
  artist: Artist;
};

const ArtistItem = ({ artist }: Props) => (
  <Link to={`/artist/${artist.id}`} className="artist-link">
    <div className="artist-item">
      <img
        src={`/images/covers/${artist.cover}.jpg`}
        alt={artist.name}
        className="artist-image"
      />
      <h3>{artist.name}</h3>
    </div>
  </Link>
);

export default ArtistItem;
