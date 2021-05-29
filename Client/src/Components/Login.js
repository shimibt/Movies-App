import React, { useContext, useState } from 'react';
import axios from 'axios';
import { Link, useHistory } from 'react-router-dom';
import Avatar from '@material-ui/core/Avatar'
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { UserContext } from './context';


const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '75%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function LogIn() {
  const [name,setName] = useState("");
  const [password, setPassword] = useState("");
  const classes = useStyles();
  const history = useHistory();
  const {per, setPer} = useContext(UserContext);
  

  const CheckUser =async () =>
  {
    let obj = { name : name , password : password }
    await axios.post("http://localhost:8000",obj)
    .then( (res)=> {
         if(res.data)
         {
          setPer(res.data)
          history.push({
          pathname :"/Main",  
        })
        return 
        }
        else 
       {
        alert('You must register first')
       }
    })  
  }

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <form className={classes.form} noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="username"
            label="User Name"
            name="username"
            autoComplete="username"
            onChange = { e => setName( e.target.value )}
            autoFocus
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            onChange = { e => setPassword( e.target.value )}
          />
          <input type="button" onClick={ CheckUser } value="Log In" />
          <Grid container>
            <Grid item>
              <Link to="/CreateAccount" variant="body2">
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={8}>
      </Box> 
    </Container>
        )
  }