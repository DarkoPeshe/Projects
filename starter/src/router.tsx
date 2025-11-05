import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import HomePage from "./pages/HomePage";
import ArtistPage from "./pages/ArtistPage";
import AlbumPage from "./pages/AlbumPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "artist/:id",
        element: <ArtistPage />,
      },
      {
        path: "album/:albumId",
        element: <AlbumPage />,
      },
    ],
  },
]);
