import Link from "next/link";

export default async function ItemsPage({searchParams}: {searchParams: {search: string}}) {
  const apiUrl = `https://api.mercadolibre.com/sites/MLA/search?q=${searchParams.search}&limit=4`;
  const {results} = await fetch(apiUrl).then(
    (res) =>
      res.json() as Promise<{
        results: {
          id: string;
          title: string;
          thumbnail: string;
          price: number;
          currency_id: string;
          condition: string;
        }[];
      }>,
  );

  return (
    <section className="mx-auto mt-2 w-full max-w-3xl bg-white p-2">
      {results.map((item) => (
        <article key={item.id} className="gap my-5 flex">
          <img alt={item.title} className="" src={item.thumbnail} />
          <div>
            <p className="">{item.title}</p>
            <p className="">{`$${item.price} ARS`}</p>
            <Link className="text-blue-500 underline" href={`/items/${item.id}`}>
              Ver detalles
            </Link>
          </div>
          <span className="ml-auto font-bold">{item.condition.toUpperCase()}</span>
        </article>
      ))}
    </section>
  );
}
