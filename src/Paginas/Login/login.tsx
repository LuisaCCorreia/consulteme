import { Link, useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';

import HeaderNaoLogado from '../../Components/Header/HeaderNaoLogado';
import Footer from '../../Components/Footer/footer';
import { useState } from 'react';


function Login() {
  const [email, setEmail] = useState("")
  const [senha, setSenha] = useState("")
  const navigate = useNavigate();

  let atendente = {email:"maria@email.com", senha:"123"}
  let gerente = {email:"jose@email.com", senha:"123"}
  let medico = {email:"pedro@email.com", senha:"123"}

  function signin (e:any)  {
    e.preventDefault();

    if(email === atendente.email && senha === atendente.senha) {
      localStorage.setItem("cargo", "ATENDENTE")
      navigate('/homeatendente')

    } else if(email === gerente.email && senha === gerente.senha) {
      localStorage.setItem("cargo", "GERENTE")
      navigate('/homegerente')
    } else if(email === medico.email && senha === medico.senha) {
      localStorage.setItem("cargo", "MEDICO")
      navigate('/homemedico')
    }

  }
    
return (
    <>
      <HeaderNaoLogado />

      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Typography component="h1" variant="h5">
            Entrar
          </Typography>
          <Box component="form">
            <TextField
              value={email}
              onChange={(e) => {setEmail(e.target.value)}}
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
             value={senha}
             onChange={(e) => {setSenha(e.target.value)}}
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <Button
            onClick={(e)=>{signin(e)}}
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
          </Box>
        </Box>
        
      </Container>  
      
      <Footer classe="footer" />
    </>
  );

}

export default Login;