import React, { useState, useEffect } from 'react';
import axios from 'axios';

function ItemList() {
  const [items, setItems] = useState([]);
  const [newItemTitle, setNewItemTitle] = useState('');

  useEffect(() => {
    axios.get('http://localhost:3001/todos')
      .then(response => setItems(response.data))
      .catch(error => console.error(error));
  }, []);

  const handleAddItem = () => {
    axios.post('http://localhost:3001/todos', {
      title: newItemTitle,
      completed: false
    })
      .then(response => {
        setItems([...items, response.data]);
        setNewItemTitle('');
      })
      .catch(error => console.error(error));
  };

  const handleUpdateItem = (id, completed) => {
    axios.patch(`http://localhost:3001/todos/${id}`, { completed })
      .then(response => {
        const updatedItem = response.data;
        const updatedItems = items.map(item => {
          if (item.id === updatedItem.id) {
            return updatedItem;
          } else {
            return item;
          }
        });
        setItems(updatedItems);
      })
      .catch(error => console.error(error));
  };

  const handleDeleteItem = (id) => {
    axios.delete(`http://localhost:3001/todos/${id}`)
      .then(response => {
        const deletedItemId = response.data.id;
        const remainingItems = items.filter(item => item.id !== deletedItemId);
        setItems(remainingItems);
      })
      .catch(error => console.error(error));
  };

  return (
    <div>
      <h2>Items</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Completed</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {items.map(item => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.title}</td>
              <td>
                <input type="checkbox"
                  checked={item.completed}
                  onChange={event => handleUpdateItem(item.id, event.target.checked)} />
              </td>
              <td>
                <button onClick={() => handleDeleteItem(item.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <h2>Add Item</h2>
      <div>
        <label htmlFor="new-item-title">Title:</label>
        <input type="text" id="new-item-title" value={newItemTitle} onChange={event => setNewItemTitle(event.target.value)} />
        <button onClick={handleAddItem}>Add</button>
      </div>
    </div>
  );
}

export default ItemList;
