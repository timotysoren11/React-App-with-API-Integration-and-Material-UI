// src/components/ItemList.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { List, ListItem, ListItemText, TextField, Container } from '@mui/material';

const ItemList = () => {
  const [items, setItems] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredItems, setFilteredItems] = useState([]);

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/posts')
      .then(response => {
        setItems(response.data);
        setFilteredItems(response.data);
      })
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  useEffect(() => {
    setFilteredItems(
      items.filter(item => item.title.toLowerCase().includes(searchTerm.toLowerCase()))
    );
  }, [searchTerm, items]);

  return (
    <Container>
      <TextField
        label="Search"
        variant="outlined"
        fullWidth
        margin="normal"
        onChange={e => setSearchTerm(e.target.value)}
      />
      <List>
        {filteredItems.map(item => (
          <ListItem key={item.id}>
            <ListItemText primary={item.title} />
          </ListItem>
        ))}
      </List>
    </Container>
  );
};

export default ItemList;
