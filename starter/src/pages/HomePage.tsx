import artists from "../../db";
import ArtistsList from "../components/ArtistsList";

const HomePage = () => {
  return (
    <main>
      <ArtistsList artists={artists} />
    </main>
  );
};

export default HomePage;
