'use client';

import { useRouter } from 'next/navigation';
import React, { useState } from 'react';

export default function AddRecipePage() {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const router = useRouter();

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();
        
        const newRecipe = {
            name,
            description,
        };

        try {
            const response = await fetch('/api/recipes', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(newRecipe),
            });

            if(response.ok) {
                router.push('/');
                setName('');
                setDescription('');
            } else {
                console.error('Error adding recipe:', response.statusText);
            }
        } catch (error) {
            console.error('Error adding recipe:', error);
        }

        
    };

    return (
        <div>
            <h1>Add New Recipe</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Recipe Name:</label>
                    <input 
                        type="text"
                        id="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required 
                    />
                </div>
                <div>
                    <label htmlFor="description">Description:"</label>
                    <textarea
                        id="description"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        required
                    />
                </div>
                <button type="submit">Add Recipe</button>
            </form>
        </div>
    );
}