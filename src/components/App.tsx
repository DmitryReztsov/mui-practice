import React from 'react';
import {Box, Container, CssBaseline, Typography} from '@mui/material';
import ToDoList from './ToDoList';

function App() {
  return (
    <Box
      sx={{
        bgcolor: 'primary.main',
        display: 'flex',
        flex: '1 1 auto'
      }}
    >
      <CssBaseline />
      <Container
        sx={{
          mx: 'auto',
          my: 0,
          bgcolor: 'background.paper',
          boxShadow: 3,
        }}
      >
        <Typography
          variant={'h1'}
          align={'center'}
          children={'ToDo List'}
          sx={{
            color: 'text.primary',
            py: '10px',
          }}
        />
        <ToDoList />
      </Container>
    </Box>
  );
}

export default App;
