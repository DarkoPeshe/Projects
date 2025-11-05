import { useParams } from "react-router-dom";
import artists from "../../db";
import AlbumsList from "../components/AlbumsList";

const ArtistPage = () => {
  const { id } = useParams();
  const artist = artists.find((a) => a.id === Number(id));

  if (!artist) return <p>Artist not found.</p>;

  return (
    <main>
      <h2>{artist.name}</h2>
      <p>{artist.bio}</p>
      <AlbumsList albums={artist.albums} />
    </main>
  );
};

export default ArtistPage;
