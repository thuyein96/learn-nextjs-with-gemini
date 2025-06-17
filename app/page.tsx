import { collection, getDocs } from "firebase/firestore";
import { db } from "@/lib/firebase" 

async function getRecipes() {
  const recipesCollection = collection(db, "recipes");
  const recipeSnapshot = await getDocs(recipesCollection);
  const recipeList = recipeSnapshot.docs.map(doc => ({
    id: doc.id,
    ...doc.data()
  }));
  return recipeList;
}

export default async function Home() {
  const recipes = await getRecipes();

  return (
    <div>
      <h1>Recipe List</h1>
      <ul>
      {recipes.map(recipe => (
        <li key = {recipe.id}>
          <h2>{recipe.name}</h2>
          <p>{recipe.description}</p>
        </li>
      ))}
      </ul>
    </div>
  );
}