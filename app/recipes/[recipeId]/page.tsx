import { doc, getDoc } from "firebase/firestore";
import { db } from "@/lib/firebase";

interface Recipe {
    name: string;
    description: string;
}

export default async function RecipePage({ params }: { params: { recipeId: string } }) {
    const recipeId = params.recipeId;

    const recipeRef = doc(db, "recipes", recipeId);
    const recipeSnap = await getDoc(recipeRef);

    if(!recipeSnap.exists()) {
        return <div>Recipe not found</div>;
    }

    const recipeData = recipeSnap.data() as Recipe;

    return (
        <div>
            <h1>{recipeData.name}</h1>
            <p>{recipeData.description}</p>
        </div>
    )
}