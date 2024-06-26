export default async function SingleMoviePage({
  params,
}: {
  params: { id: string };
}) {
  const res = await fetch(
    `https://api.cinerama.uz/test/movies/view?module_id=3&id=${params.id}`,
    {
      next: { revalidate: 2 },
      cache: "no-store",
      headers: {
        Authorization: `Bearer DrTVm2Bi8pHE75xYsM94fjciuAhju2XM`,
      },
    }
  );
  const data = await res.json();

  return <>{JSON.stringify(data)}</>;
}
