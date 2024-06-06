// src/App.js
import React from 'react';
import './App.css';
import ItemList from './components/ItemList';
import { AppBar, Toolbar, Typography, Container } from '@mui/material';

const App = () => {
  return (
    <div className="App">
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6">API Integration with Material-UI</Typography>
        </Toolbar>
      </AppBar>
      <Container>
        <ItemList />
      </Container>
    </div>
  );
}

export default App;
