import React, { useState } from 'react';
import './index.css';
import { Logo } from './Components/Logo';
import { Form } from './Components/Form';
import { PackingList } from './Components/PackingList';
import { Stats } from './Components/Stats';

const App = () => {
  const [items, setItems] = useState([]);
  function handleAddItems(item) {
    setItems(() => [...items, item]);
  }
  function handleDeleteItem(id) {
    setItems(() => items.filter(item => item.id !== id));
  }

  function handleToggleItem(id) {
    setItems(() => items.map((item) => item.id === id ? { ...item, packed: !item.packed } : item))
  }
  function handleClearList() {
    const confirmed = window.confirm("Are you sure you want to delete all items? ");
    if (confirmed) {
      setItems(() => [])
    }
  }
  return (
    <div>
      <Logo />
      <Form onAddItems={handleAddItems} />
      <PackingList items={items} onDeleteItem={handleDeleteItem} onToggleItem={handleToggleItem} onClearList={handleClearList} />
      <Stats items={items} />
    </div>
  );
};

export default App;