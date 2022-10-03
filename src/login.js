import * as React from 'react';
import { useRef, useState, useEffect, useDebugValue, useContext} from 'react';
import AuthContext from './context/AuthProvider';
// import axios from './API/axios';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
// import Lock from '@mui/icons-material/Lock';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { colors, dividerClasses } from '@mui/material';

// copyrights
function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="#">
        X-Ray Dose System
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}
// theme parameters
const theme = createTheme({
    palette:{
        primary:{
            main: '#f17721',
        },
        secondary:{
            light: '#fff',
            main: '#18a6df',
            dark: '#ba000d',
            contrastText: '#000',
        },
    },
});
// const LOGIG_URL = '/auth';
const Login = () => {
    // const {setAuth} = useContext {AuthContext};
    const userRef = useRef();
    const errRef = useRef();

    const [user, setUser] = useState('');
    const [psw, setPsw] = useState('');
    const [errMsg, setErrMsg] = useState('');
    const [success, setSuccess] = useState(false);
    
    useEffect(() => {
        userRef.current.focus();
    }, [])

    useEffect(() => {
        setErrMsg('');
    }, [user, psw])


    const handleSubmit = async (e) =>{
        e.preventDefault();
        // console.log(user, psw);
        setUser('');
        setPsw('');
        setSuccess(true);
    }

    return(
        <>
        {success ? (
                <section>
                    <h1>You are logged in!!</h1>
                    <br />
                    <p>
                        <a href="#">Go to home</a>
                    </p>
                </section>
            ) : (

            <ThemeProvider theme={theme}>
                <Container sx={{ borderRadius: '10px', bgcolor: 'secondary.light' }} component="main" maxWidth="xs">
                    <CssBaseline />
                    <Box
                    sx={{
                        marginTop: 15,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                    >
                    <Avatar  sx={{ m: 1,marginTop: 5, bgcolor: 'secondary.main' }}>
                        {/* <Lock /> */}
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Connexion
                    </Typography>
                    <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
                        <TextField
                        htmlFor="username"
                        margin="normal"
                        required
                        fullWidth
                        id="username"
                        label="id utilisateur"
                        name="username"
                        autoFocus
                        type="text" 
                        ref={userRef} 
                        autoComplete="off" 
                        onChange={(e) => setUser(e.target.value)} value={user} 
                        />
                        <TextField
                        htmlFor="password"
                        margin="normal"
                        required
                        fullWidth
                        name="password"
                        label="Mot de passe"
                        type="password"
                        id="password"
                        autoComplete="current-password"
                        onChange={(e) => setPsw(e.target.value)} value={psw}
                        />
                        {/* <FormControlLabel
                        control={<Checkbox value="remember" color="primary" />}
                        label="Remember me"
                        /> */}
                        <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{ mt: 3, mb: 2 }}
                        >
                        Login
                        </Button>
                        <Grid container>
                        {/* <Grid item xs>
                            <Link href="#" variant="body2">
                            Forgot password?
                            </Link>
                        </Grid> */}
                        {/* <Grid item>
                            <Link href="#" variant="body2">
                            {"Don't have an account? Sign Up"}
                            </Link>
                        </Grid> */}
                        </Grid>
                    </Box>
                    </Box>
                    <Copyright sx={{ mt: 6, pb: 4 }} />
                </Container>
            </ThemeProvider>
            )}
            </>
    )
}

export default Login


