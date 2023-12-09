const DrinksPage = async () => {

  const url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a';

  const response = await fetch(url);
  const data = await response.json();
  console.log(Object.keys(data));

  return (
    <div>
      <h1 className="text-4xl">Drinks Page</h1>
    </div>
  )
}
export default DrinksPage;