import { collection, getDocs } from "firebase/firestore";
import { db } from "@/lib/firebase" 
import Link from 'next/link';

async function getRecipes() {
  const recipesCollection = collection(db, "recipes");
  const recipeSnapshot = await getDocs(recipesCollection);
  const recipeList = recipeSnapshot.docs.map(doc => ({
    id: doc.id,
    ... doc.data()
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
          <li key={recipe.id}>
            {/* Wrap the recipe name in a Link component */}
            <Link href={`/recipes/${recipe.id}`}>
              <h2>{recipe.name}</h2>
            </Link>
            <p>{recipe.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}