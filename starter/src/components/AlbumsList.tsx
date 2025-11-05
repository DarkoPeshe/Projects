import type { Album } from "../interfaces/Singers";
import { Link } from "react-router-dom";
import "./AlbumList.css";

type Props = {
  albums: Album[];
};

const AlbumsList = ({ albums }: Props) => (
  <div className="albums-list">
    {albums.map((album) => (
      <Link
        key={album.albumId}
        to={`/album/${album.albumId}`}
        className="album-link"
      >
        <div className="album-item">
          <img
            src={`/images/albums/${album.cover}.jpg`}
            alt={album.title}
            className="album-image"
          />
          <p>
            {album.title} ({album.year})
          </p>
          <p>${album.price}</p>
        </div>
      </Link>
    ))}
  </div>
);

export default AlbumsList;
