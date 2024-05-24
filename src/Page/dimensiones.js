import React, { useState } from 'react';
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import TableContainer from '@mui/material/TableContainer';
import Table from '@mui/material/Table';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import IconButton from '@mui/material/IconButton';
import CreateIcon from '@mui/icons-material/Create';
import DeleteIcon from '@mui/icons-material/Delete';

const Dimensiones = () => {
  const [nombreDimension, setNombreDimension] = useState('');
  const [descripcionDimension, setDescripcionDimension] = useState('');
  const [data] = useState([]); 

  const handleSubmit = (event) => {
    event.preventDefault();
    
  };

  const deleteEmpleado = (id) => {
   
  };

  const handleOpen = (id) => {
    
  };

  return (
    <Container component="main" maxWidth="xl">
    <CssBaseline />
    <Box
      sx={{
        marginTop: 8,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      
      <Typography component="h1" variant="h5">
        Dimensiones
      </Typography>
      <Box component="form" noValidate sx={{ mt: 1 }} onSubmit={handleSubmit}>
        <TextField
          margin="normal"
          required
          fullWidth
          id="codigo"
          label="Ingrese Codigo"
          name="codigo"
          value={descripcionDimension}
          onChange={(e) => setDescripcionDimension(e.target.value)}
        />
        <TextField
          margin="normal"
          required
          fullWidth
          id="nombreDimension"
          label="Nombre de la Dimensión"
          name="nombreDimension"
          value={nombreDimension}
          onChange={(e) => setNombreDimension(e.target.value)}
        />
        <TextField
          margin="normal"
          required
          fullWidth
          id="descripcionDimension"
          label="Descripción de la Dimensión"
          name="descripcionDimension"
          value={descripcionDimension}
          onChange={(e) => setDescripcionDimension(e.target.value)}
        />
        <Button
          type="submit"
          fullWidth
          variant="contained"
          sx={{ mt: 3, mb: 2 }}
        >
          Guardar
        </Button>
      </Box>
      <Paper sx={{ width: "50%", mb: 2 }}>
        <TableContainer>
          <Table sx={{ minWidth: 'auto' }}>
            <TableHead>
              <TableRow>
                <TableCell>Codigo</TableCell>
                <TableCell>Dimension</TableCell>
                <TableCell>Descripcion</TableCell>
                <TableCell>Acciones</TableCell>
              </TableRow>
            </TableHead>
            <tbody>
              {data.map((empleado) => (
                <TableRow key={empleado.id}>
                  <TableCell>{empleado.nombres}</TableCell>
                  <TableCell>{empleado.apellidos}</TableCell>
                 
                  <TableCell>
                    <IconButton
                      aria-label="editar"
                      onClick={() => handleOpen(empleado.id)}
                      color="primary"
                    >
                      <CreateIcon />
                    </IconButton>
                    <IconButton
                      onClick={() => deleteEmpleado(empleado.id)}
                      aria-label="eliminar"
                      color="error"
                    >
                      <DeleteIcon />
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))}
            </tbody>
          </Table>
        </TableContainer>
      </Paper>
    </Box>
  </Container>
  );
};

export default Dimensiones;