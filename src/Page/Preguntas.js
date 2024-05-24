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
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';

export default function Preguntas() {
  const [nombrePregunta, setNombrePregunta] = useState('');
  const [codigo, setCodigo] = useState('');
  const [dimensionSeleccionada, setDimensionSeleccionada] = useState('');
  const [data] = useState([]);

  console.log(nombrePregunta, codigo, dimensionSeleccionada);

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
          Preguntas
        </Typography>
        <Box component="form" noValidate sx={{ mt: 1 }} onSubmit={handleSubmit}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="codigo"
            label="Codigo"
            name="codigo"
            onChange={(e) => setCodigo(e.target.value)}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            id="nombrePregunta"
            label="Pregunta"
            name="nombrePregunta"
            onChange={(e) => setNombrePregunta(e.target.value)}
          />
          <FormControl fullWidth margin="normal" required>
            <InputLabel id="dimension-label">Dimensión</InputLabel>
            <Select
              label="Dimensión"
              labelId="dimension-label"
              id="dimension"
              onChange={(e) => setDimensionSeleccionada(e.target.value)}
            >
              <MenuItem value={"Dimensión 1"}>Dimensión 1</MenuItem>
              <MenuItem value={"Dimensión 2"}>Dimensión 2</MenuItem>
            </Select>
          </FormControl>
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
                  <TableCell>Pregunta</TableCell>
                  <TableCell>Dimensión</TableCell>
                  <TableCell>Acciones</TableCell>
                </TableRow>
              </TableHead>
              <tbody>
                {data.map((pregunta) => (
                  <TableRow key={pregunta.id}>
                    <TableCell>{pregunta.nombre}</TableCell>
                    <TableCell>{pregunta.dimension}</TableCell>
                    <TableCell>
                      <IconButton
                        aria-label="editar"
                        onClick={() => handleOpen(pregunta.id)}
                        color="primary"
                      >
                        <CreateIcon />
                      </IconButton>
                      <IconButton
                        onClick={() => deleteEmpleado(pregunta.id)}
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
  )
}
