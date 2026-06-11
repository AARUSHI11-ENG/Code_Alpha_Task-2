export default async function handler(req, res) {

  const category =
  req.query.category || "general";

  const API_KEY =
  "10fe329dbe4866c984a08d0f4b5b4b5f";

  const response =
  await fetch(
  `https://gnews.io/api/v4/top-headlines?category=${category}&lang=en&country=in&max=20&apikey=${API_KEY}`
  );

  const data =
  await response.json();

  res.status(200).json(data);

}
