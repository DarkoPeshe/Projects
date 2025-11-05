import { useParams } from "react-router-dom";
import artists from "../../db";

const AlbumPage = () => {
  const { albumId } = useParams();

  const album = artists
    .flatMap((artist) => artist.albums)
    .find((album) => album.albumId === albumId);

  if (!album) return <p>Album not found.</p>;

  return (
    <main>
      <h2>{album.title}</h2>
      <img
        src={`/images/albums/${album.cover}.jpg`}
        alt={album.title}
        className="album-image-detail"
      />
      <p>Year: {album.year}</p>
      <p>Price: ${album.price}</p>
    </main>
  );
};

export default AlbumPage;
