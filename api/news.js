export default async function handler(req, res) {

  const category =
  req.query.category || "general";

  const search =
  req.query.search;

  const API_KEY =
  "10fe329dbe4866c984a08d0f4b5b4b5f";

  let url;

  if(search){

    url =
    `https://gnews.io/api/v4/search?q=${search}&lang=en&country=in&max=20&apikey=${API_KEY}`;

  }else{

    url =
    `https://gnews.io/api/v4/top-headlines?category=${category}&lang=en&country=in&max=20&apikey=${API_KEY}`;

  }

  const response =
  await fetch(url);

  const data =
  await response.json();

  res.status(200).json(data);

}
