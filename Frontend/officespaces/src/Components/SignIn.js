import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Dashboard from './Dashboard'


toast.configure({
  position: 'top-right',
  autoClose: '2000',
  hideProgressBar: false,
  newestOnTop: false,
  closeOnClick: true,
  rtl: false,
  pauseOnVisibilityChange: true,
  draggable: false,
  pauseOnHover: true,
});


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
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },

  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function SignIn(props) {
  const classes = useStyles();

  const [values, setValues] = React.useState({
    username: '',
    password: '',
  });

  function notify(text, type) {
    switch (type) {
      case 'info':
        toast.info(`👍${text}`, {
          position: 'top-right',
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        });
        break;
      case 'error':
        toast.error(`👎${text}`, {
          position: 'top-right',
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        });
        break;
    }
  }

  const handleChange = (prop) => (event) => {
     
    setValues({
      ...values,
      [prop]: event.target.value,
    });
  };

  const submitHandler =  async (e) => {
    e.preventDefault();
    

    var myHeaders = new Headers();

    var formdata = new FormData();
    formdata.append("Username", values['username']);
    formdata.append("Password", values['password']);
    var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: formdata,
        redirect: 'follow'
      };
      let res = await fetch("http://127.0.0.1:8000/operations/SignIn",requestOptions)
      let data = await res.json()
      
      if (data.Flag===1){
        localStorage.setItem('Token', data.Token);
        localStorage.setItem('Status', 'LoggedIn');
        localStorage.setItem('Image', data.Photo);
        localStorage.setItem('Name',data.Name);
        localStorage.setItem('m_id',data.user_id);
        localStorage.setItem('Is_Manager',data.Is_Manager);
        localStorage.setItem("First_Name",data.First_Name);
        localStorage.setItem("Last_Name",data.Last_Name);
        notify('  Login Successful!!!', 'info');
        let x = localStorage.getItem('Token')
        console.log(x)
        
        props.history.push('/announcement');
      }
      else{
        notify(data.Message, 'error');

      }
    }


      

    
    

    
  

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>{' '}
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>{' '}
        <form className={classes.form} noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="username"
            label="Username"
            name="username"
            autoComplete="admin"
            onChange={handleChange('username')}
            id='username'
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
            onChange={handleChange('password')}
            autoComplete="current-password"
            id='password'
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={submitHandler}
          >
            Sign In{' '}
          </Button>{' '}
          <Grid container>
            <Grid item xs>
              <Link href="/forgotpass" variant="body2">
                Forgot password ?
              </Link>{' '}
            </Grid>{' '}
          </Grid>{' '}
        </form>{' '}
      </div>{' '}
    </Container>
  );
}