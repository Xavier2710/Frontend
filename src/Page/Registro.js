import React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { FormControl, InputLabel, Select, MenuItem, Grid } from "@mui/material";

const Registro = () => {
  const [gender, setGender] = React.useState("");
  const [grupo, setGrupo] = React.useState("");


  const handleChange = (event) => {
    setGender(event.target.value);
    setGrupo(event.target.value);
  };

  const handleChange2 = (event) => {
    
    setGrupo(event.target.value);
  };
  return (
    <div>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <AccountCircleIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Registrate
          </Typography>
          {/*onSubmit={handleSubmit} */}
          <Box component="form" noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="codigo"
              label="Codigo"
              name="codigo"
              autoComplete="codigo"
              autoFocus
            />
            <Grid container spacing={2}>
              <Grid item xs={6}>
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="nombre"
                  label="Nombre"
                  name="nombre"
                  autoComplete="nombre"
                  autoFocus
                />
              </Grid>

              <Grid item xs={6}>
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="apellido"
                  label="Apellido"
                  name="apellido"
                  autoComplete="apellido"
                  autoFocus
                />
              </Grid>
            </Grid>
            <TextField
              margin="normal"
              required
              fullWidth
              id="fechaNacimiento"
              label="Fecha Nacimiento"
              name="fechaNacimiento"
              autoComplete="fechaNacimiento"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Correo"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Contraseña"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <FormControl fullWidth margin="normal" required>
              <InputLabel id="genero-label">Género</InputLabel>
              <Select
                label="Género"
                labelId="genero-label"
                id="genero"
                value={gender}
                onChange={handleChange}
                autoFocus
              >
                <MenuItem value={"Femenino"}>Femenino</MenuItem>
                <MenuItem value={"Masculino"}>Masculino</MenuItem>
                <MenuItem value={"Prefiero no decirlo"}>
                  Prefiero no decirlo
                </MenuItem>
              </Select>
            </FormControl>
            <FormControl fullWidth margin="normal" required>
              <InputLabel id="grupo-label">Grupo</InputLabel>
              <Select
                label="Grupo"
                labelId="grupo.label"
                id="grupo"
                value={grupo}
                onChange={handleChange2}
                autoFocus
              >
                <MenuItem value={"Control"}>Control</MenuItem>
                <MenuItem value={"Estudio"}>Estudio</MenuItem>

              </Select>
            </FormControl>

            <Button
              href="./Login"
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Registrar usuario
            </Button>
          </Box>
        </Box>
      </Container>
    </div>
  );
};

export default Registro;
