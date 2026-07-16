'use client';

import { useState, useEffect } from 'react';

export default function InventoryTracker() {
  const [text, setText] = useState('');
  const [items, setItems] = useState([]);

  useEffect(() => {
    console.log('List changed. Count:', items.length);
  }, [items]);

  function addItem() {
    if (text === '') return;
    setItems([...items, text]);
    setText('');
  }

  function removeItem(index) {
    setItems(items.filter((_, i) => i !== index));
  }

  return (
    <div className="border rounded-lg p-4 bg-white mt-8">
      <h2 className="text-xl font-bold text-gray-900 mb-4">Inventory Tracker</h2>

      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Type an item"
        className="border rounded px-2 py-1 text-gray-900 mr-2"
      />

      <button
        type="button"
        onClick={addItem}
        className="bg-blue-600 text-white px-3 py-1 rounded"
      >
        Add
      </button>

      <ul className="mt-4">
        {items.map((item, index) => (
          <li key={index} className="flex justify-between py-2 border-b text-gray-900">
            <span>{item}</span>
            <button
              type="button"
              onClick={() => removeItem(index)}
              className="text-red-600 text-sm"
            >
              Remove
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
