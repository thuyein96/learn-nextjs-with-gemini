import { NextResponse } from 'next/server';
import { collection, addDoc } from "firebase/firestore";
import { db } from "@/lib/firebase";

export async function POST(request: Request) {
    try {
        const { name, description } = await request.json();

        if (!name || !description) {
            return NextResponse.json({ message: 'Name and description are required' }, { status: 400 });
        }

        const docRef = await addDoc(collection(db, "recipes"), {
            name,
            description
        });

        return NextResponse.json({ message: 'Recipe added successfully', id: docRef.id }, { status: 201 });
    } catch (error) {
        console.error("Error adding recipe:", error);
        return NextResponse.json({ message: 'Error adding recipe' }, { status: 500 });
    }
}