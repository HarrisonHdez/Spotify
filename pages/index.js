import ListAlbums from "../components/ListAlbums";
import ListPodcast from "../components/ListPodcast";

export default function Home() {
  return (
    <div className="pt-28 md:pl-72 p-8">
      <ListAlbums title="Spotify Playlists" />
      <ListPodcast title="Pódcast" />
      <ListAlbums title="Enfoque" />
      <ListAlbums title="Listas destacadas" />
    </div>
  );
}
