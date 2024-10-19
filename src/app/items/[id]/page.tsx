export default async function ProductPage({params: {id}}: {params: {id: string}}) {
  const apiUrl = `https://api.mercadolibre.com/items/${id}`;
  const item = await fetch(apiUrl).then(
    (res) =>
      res.json() as Promise<{
        id: string;
        title: string;
        thumbnail: string;
        price: number;
        currency_id: string;
        condition: string;
        available_quantity: number;
      }>,
  );
  const apiUrlDescription = `https://api.mercadolibre.com/items/${id}/description`;
  const {plain_text} = await fetch(apiUrlDescription).then(
    (res) =>
      res.json() as Promise<{
        plain_text: string;
      }>,
  );

  return (
    <div className="m-3 mx-auto max-w-3xl bg-white">
      <section className="grid w-full grid-cols-2 pt-6">
        <div>
          <img alt={item.title} className="aspect-square h-96" src={item.thumbnail} />
          <h3 className="pl-5 pt-3 font-bold">Descripción del producto</h3>
        </div>
        <div className="flex flex-col pr-5">
          <p className="">{item.condition.toUpperCase()}</p>
          <h1 className="my-2 text-3xl font-bold">{item.title}</h1>
          <p className="my-3 text-3xl font-bold">{`$${item.price} ARS`}</p>
          <button className="mt-2 w-full rounded-xl bg-blue-500 px-4 py-2 text-white" type="button">
            Comprar
          </button>
        </div>
      </section>
      {plain_text ? (
        <p className="p-5 text-sm opacity-70">{plain_text}</p>
      ) : (
        <p className="p-5 text-sm opacity-70">No hay descripción disponible.</p>
      )}
    </div>
  );
}
