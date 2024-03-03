import React, { useState } from 'react';

export function Form({ onAddItems }) {
    // To control the forms, there are only three steps:
    // 1. We need a state
    // 2. put the value on the element we want to control
    // 3. set the value in onChange event handler with e

    const [description, setDescription] = useState("");
    const [quantity, setQuantity] = useState(1);


    function handleSubmit(e) {
        e.preventDefault();
        // console.log(e);
        if (!description) return;
        const newItem = { id: Date.now(), description, quantity, packed: false };
        onAddItems(newItem);

        setDescription("");
        setQuantity(1);
    }

    return (
        <form className='add-form' onSubmit={handleSubmit}>
            <h3>What do you need for your 😍 trip?</h3>
            <select value={quantity} onChange={(e) => setQuantity(Number(e.target.value))}>
                {Array.from({ length: 20 }, (_, i) => i + 1)
                    .map((num) => (
                        <option value={num} key={num}>{num}</option>
                    ))}
            </select>
            <input type="text" placeholder='Item...' value={description} onChange={(e) => setDescription(e.target.value)} />
            <button>Add</button>
        </form>
    );
}
