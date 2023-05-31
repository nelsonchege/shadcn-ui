import Image from "next/image";

type Game = {
  id: number;
  name: string;
  background_image: string;
  rating: string;
};
const getGames = async (): Promise<Game[]> => {
  const res = await fetch(
    `https://api.rawg.io/api/games?key=${process.env.RAWG_API_KEY}`
  );

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  const data = await res.json();
  return data.results;
};
export default async function Home() {
  const games = await getGames();
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-8 bg-[conic-gradient(at_bottom_left,_var(--tw-gradient-stops))] from-fuchsia-300 via-green-400 to-rose-700">
      <div className="grid grid-cols-4 gap-12">
        {games.map((game) => (
          <div
            className="col-span-4 md:col-span-2 lg:col-span-1 p-4 rounded-sm bg-white"
            key={game.id}
          >
            <div className="aspect-video relative">
              <Image
                src={game.background_image}
                alt={game.name}
                fill
                className="object-cover rounded-md"
              />
            </div>
            <h1>{game.name}</h1>
            <p>{game.rating}</p>
          </div>
        ))}
      </div>
    </main>
  );
}
